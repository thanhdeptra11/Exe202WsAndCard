import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const QRComponent = (props) => {
  const { total, initialUuid, name, time, origin, discount, percentDiscount, benefits } = props;
  const [uuid, setUuid] = useState(initialUuid);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Đường dẫn API
  // let domain = "http://localhost:9999/api";
  let domain = "https://foodtrip-server.onrender.com/api";

  const api_get = "https://oauth.casso.vn/v2/transactions?sort=DESC";
  const CASSO_API_KEY = "AK_CS.d5c89350837c11ef92ba87773ecade6b.HflxXnpeVAQ6VtEve6U9549eI0r7AMYZ9YyABLBXrfi3KIcCmJmRxrFfiz5AeiQjpfwyeHSO";

  // Thông tin ngân hàng
  const bank = {
    BANK_ID: "VietinBank",
    ACCOUNT_NO: "108874842372",
    TEMPLATE: "compact2",
    AMOUNT: total,
    DESCRIPTION: uuid,
    ACCOUNT_NAME: "FOODTRIPVNS",
  };

  // Các state
  const [data, setData] = useState({});
  const [isPaid, setIsPaid] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: "", supportContent: "" });

  // Lấy dữ liệu người dùng từ local storage
  useEffect(() => {
    const storedUserData = localStorage.getItem('user');
    if (storedUserData) {
      try {
        const parsedUser = JSON.parse(storedUserData);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);
  

  const fetchData = async () => {
    try {
      const res = await fetch(api_get, {
        headers: {
          Authorization: `apikey ${CASSO_API_KEY}`,
          "Content-Type": "application/json",
        },
      });
      const jsonData = await res.json();
      setData(jsonData);

      // Kiểm tra các giao dịch
      jsonData.data.records.forEach((trans) => {
        if (Math.floor(trans.amount) >= Math.floor(total) && trans.description.includes(uuid.replace(/-/g, ""))) {
          setIsPaid(true);
          console.log(user)
          saveOrder();
          return;
        }
      });
    } catch (error) {
      console.log("fetchData qr error", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn trang lên đầu khi trang được tải

    const fetchDataIfUserExists = async () => {
      if (user) {
        await fetchData();
      }
    };
  
    fetchDataIfUserExists();
    const intervalId = setInterval(() => {
      if (user) {
        fetchData();
      }
    }, 3000);
  
    return () => clearInterval(intervalId);
  }, [user]);
  

  const saveOrder = async () => {
    if (!user) {
      console.error("User is not available. Cannot create order.");
      return; // Dừng hàm nếu không có user data
    }
    if (!user.data) {
      console.error("User data is not available. Cannot create order.");
      return; // Dừng hàm nếu không có user data
    }

    const orderData = {
      userId: user.data._id, // Sử dụng _id từ user
      total: total,
      time: time,
      transactionNo: uuid,
    };
    console.log(orderData);

    axios
      .post(`${domain}/bill/save-order`, orderData)
      .then((res) => {
        if (res.status === 200) {
          setTimeout(() => {
            navigate("/success-payment");
          }, 2000);
        }
      })
      .catch((error) => {
        console.log("saveOrder error:", error);
        navigate("/fail-payment");
      });
  };

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          .qr-code {
            flex: 1;
            max-width: 50%;
            padding: 10px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .user-form {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 20px;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .order-summary,
          .benefits-section {
            flex: 1;
            padding: 10px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .order-summary h2,
          .benefits-section h2 {
            font-size: 24px;
            color: #EF4444;
            margin-bottom: 20px;
            text-align: center;
          }
          .payment-details {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
            border-bottom: 1px solid #ccc;
          }
          .payment-details p {
            font-size: 18px;
            color: #333;
            margin-bottom: 10px;
          }
          .payment-details p:last-child {
            font-size: 24px;
            font-weight: bold;
            color: #EF4444;
          }
          .alert-message {
            color: red;
            font-weight: bold;
            text-align: center;
            margin-bottom: 20px;
          }
          .benefits-section ul {
            list-style-type: none;
            padding: 0;
          }
          .benefits-section ul li {
            font-size: 18px;
            margin-bottom: 10px;
            text-align: center;
          }
        `}
      </style>
      <div className="qr-code">
        <h2 className="alert-message">Vui lòng không sửa nội dung chuyển khoản!</h2>
        <img
          src={`https://img.vietqr.io/image/${bank.BANK_ID}-${bank.ACCOUNT_NO}-${bank.TEMPLATE}.png?amount=${bank.AMOUNT}&addInfo=${bank.DESCRIPTION}&accountName=${bank.ACCOUNT_NAME}`}
          alt="QR Code"
          style={{ width: "50%", borderRadius: "8px", display: "block", margin: "0 auto" }}
        />
      </div>
      <div className="user-form">
        <div className="benefits-section">
          <h2>Bạn sẽ nhận được gì khi mua gói thành viên?</h2>
          <ul>
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div className="order-summary">
          <h2>Tóm tắt đơn hàng</h2>
          <div className="payment-details">
            <p>Tên gói: {name}</p>
            <p>Gói: {time} tháng</p>
            <p>Giá gốc: {formatAmount(origin)} VND</p>
          </div>
          <div className="payment-details">
            <p>Tổng phụ</p>
            <p>Gói Giảm giá -{percentDiscount}</p>
            <p>-{formatAmount(discount)} VND</p>
          </div>
          <div className="payment-details">
            <p>Ước tính tổng</p>
            <p>{formatAmount(bank.AMOUNT)} VND</p>
          </div>
          <div className="payment-details">
            <p>Thời gian hiệu lực</p>
            <p>{calculateExpiryDate(time)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    padding: "20px",
    backgroundColor: "#f1f3f5",
    borderRadius: "10px",
  },
};

const formatAmount = (amount) => {
  return new Intl.NumberFormat("de-DE").format(amount);
};

const calculateExpiryDate = (months) => {
  const currentDate = new Date();
  const startDate = currentDate.toLocaleDateString('vi-VN');
  currentDate.setMonth(currentDate.getMonth() + months);
  const endDate = currentDate.toLocaleDateString('vi-VN');
  return `${startDate} - ${endDate}`;
};

export default QRComponent;
