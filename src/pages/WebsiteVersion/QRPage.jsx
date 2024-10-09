import React from "react";
import QRComponent from "../../components/QRComponent"; // Đảm bảo đường dẫn đúng với vị trí của file Qr.js
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";

const QRPage = () => {
  const location = useLocation();
  const { selectedPlan } = location.state || {};
  console.log(selectedPlan);
  const total = selectedPlan ? selectedPlan.price : 0; // Tổng tiền cần thanh toán
  const uuid = uuidv4(); // UUID của giao dịch
  const name = selectedPlan ? selectedPlan.title : "";
  const time = selectedPlan ? selectedPlan.duration : 0;
  const origin = 29000 * time;
  const discount = origin - total;
  const percentDiscount = Math.floor((discount / origin) * 100) + '%';
  const benefits = selectedPlan ? selectedPlan.benefits : [];
  return (
    <div>
      <QRComponent total={total} uuid={uuid} name={name} time={time} origin={origin} discount={discount} percentDiscount={percentDiscount} benefits={benefits} />
    </div>
  );
};

export default QRPage;
