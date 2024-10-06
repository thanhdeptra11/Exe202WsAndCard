import React from 'react';
import QRComponent from '../../components/QRComponent'; // Đảm bảo đường dẫn đúng với vị trí của file Qr.js

const QRPage = () => {
    const total = 1000000; // Tổng tiền cần thanh toán, có thể thay đổi theo yêu cầu của bạn
    const uuid = 'your-uuid-value'; // UUID của giao dịch
    const postData = {
        // Thêm dữ liệu bạn cần gửi trong postData
    };

    return (
        <div>
            <h1>QR Payment</h1>
            <QRComponent total={total} uuid={uuid} postData={postData} />
        </div>
    );
};

export default QRPage;
