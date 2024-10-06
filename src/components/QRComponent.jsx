import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const QRComponent = (props) => {
    const { total, uuid, postData } = props;
    const bank = {
        BANK_ID: "VietinBank",
        ACCOUNT_NO: "108874842372",
        TEMPLATE: "compact2",
        AMOUNT: total,
        DESCRIPTION: 'Foodtripvn ' + uuid,
        ACCOUNT_NAME: 'FOODTRIPVNS'
    };
    const api_get = "https://oauth.casso.vn/v2/transactions?sort=DESC";
    const CASSO_API_KEY = "AK_CS.d5c89350837c11ef92ba87773ecade6b.HflxXnpeVAQ6VtEve6U9549eI0r7AMYZ9YyABLBXrfi3KIcCmJmRxrFfiz5AeiQjpfwyeHSO";

    const navigate = useNavigate();

    const [data, setData] = useState({});
    const [isPaid, setIsPaid] = useState(false);
    const [userInfo, setUserInfo] = useState({ email: '' });

    const fetchData = async () => {
        try {
            const res = await fetch(api_get, {
                headers: {
                    Authorization: `apikey ${CASSO_API_KEY}`,
                    "Content-Type": "application/json",
                }
            });
            const jsonData = await res.json();
            setData(jsonData);

            jsonData.data.records.forEach(trans => {
                if (Math.floor(trans.amount) >= Math.floor(total) && trans.description.includes(uuid.replace(/-/g, ""))) {
                    setIsPaid(true);
                    saveOrder();
                    return;
                }
            });

        } catch (error) {
            console.log('fetchData qr error', error);
        }
    };

    useEffect(() => {
        fetchData();

        const intervalId = setInterval(() => {
            fetchData();
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    const saveOrder = async () => {
        const orderData = { ...postData, userInfo };
        axios.post(`http://localhost:5173/order`, orderData)
            .then(res => {
                setTimeout(() => {
                    toast.success('Yêu cầu hỗ trợ đã được gửi thành công!');
                    navigate('/');
                }, 2000);
            })
            .catch(error => {
                console.log('saveOrder error:', error);
                toast.error('Có lỗi gì đó đã xảy ra!😭\nVui lòng liên hệ admin qua facebook/zalo/sdt');
            });
    };

    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };

    return (
        <div style={styles.container}>
            <style>{`
                .qr-code {
                    flex: 1;
                    padding-right: 20px;
                    background-color: white;
                    padding: 15px;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                .user-form {
                    flex: 1;
                    padding: 20px;
                    background-color: white; 
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    color: black; 
                }
                .form-label {
                    font-weight: bold;
                    font-size: 1.1rem;
                    margin-bottom: 10px; /* Khoảng cách giữa label và ô nhập liệu */
                    color: black; 
                }
                .form-control {
                    margin-left:15px;
                    margin-bottom: 15px; /* Khoảng cách giữa các ô nhập liệu */
                    background-color: white; 
                    color: black; 
                    border: 1px solid black; 
                    padding: 10px;
                    border-radius: 5px;
                    width: 75%;
                    box-shadow: none; 
                }
                .form-control:focus {
                    outline: none;
                    border-color: black; 
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); 
                }
                .form-control::placeholder {
                    color: grey; 
                }
                .form-button {
                    margin-top: 20px;
                    background-color: #f48258; 
                    color: white; 
                    font-weight: bold;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                .form-button:hover {
                    background-color: #f48258; 
                    transition: background-color 0.3s ease;
                }
                h2 {
                    color: black; 
                    margin-bottom: 20px;
                    font-weight: bold;
                }
                .alert-message {
                    color: red;
                    font-weight: bold;
                    text-align: center;
                    margin-bottom: 20px;
                }
                .form-group {
                    margin-bottom: 20px; 
                }
            `}</style>
            <div className="qr-code">
                <h2 className="alert-message">Vui lòng không sửa nội dung chuyển khoản!</h2>
                <img
                    src={`https://img.vietqr.io/image/${bank.BANK_ID}-${bank.ACCOUNT_NO}-${bank.TEMPLATE}.png?amount=${bank.AMOUNT}&addInfo=${bank.DESCRIPTION}&accountName=${bank.ACCOUNT_NAME}`}
                    alt="QR Code"
                    style={{ width: '50%', borderRadius: '8px', display: 'block', margin: '0 auto' }} 
                />
            </div>
            <div className="user-form">
                <h2>Bạn cần hỗ trợ?</h2>
                <Form>
                    <Form.Group controlId="formEmail" className="form-group">
                        <Form.Label className="form-label">Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            name="email" 
                            value={userInfo.email} 
                            onChange={handleChange} 
                            placeholder="Nhập email của bạn" 
                            required 
                        />
                    </Form.Group>
                    <Button className="form-button" variant="primary" onClick={saveOrder}>
                        Gửi Yêu Cầu Hỗ Trợ
                    </Button>
                </Form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        gap: '20px',
        padding: '20px',
        backgroundColor: '#f1f3f5',
        borderRadius: '10px',
    }
};

export default QRComponent;
