import React from 'react';
import QRComponent from '../../components/QRComponent'; // Đảm bảo đường dẫn đúng với vị trí của file Qr.js
import { v4 as uuidv4 } from 'uuid';

const QRPage = () => {
    const total = 1000000; // Tổng tiền cần thanh toán, có thể thay đổi theo yêu cầu của bạn
    const uuid = uuidv4(); // UUID của giao dịch
    const name = "Preminum2";
    const time = 12;
    const origin = 10000000;
    const discount = 9000000;
    const percentDiscount = "90%";
    const postData = {
        // Thêm dữ liệu bạn cần gửi trong postData
    };

    return (
        <div>
            <QRComponent total={total} uuid={uuid} name={name} time={time} origin={origin} discount={discount} percentDiscount={percentDiscount} postData={postData} />
        </div>
    );
};

export default QRPage;
