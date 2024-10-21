import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center from-pink-500 to-blue-500 text-center">
      <h1 className="text-9xl font-bold text-red-500">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Oops! Không Tìm Thấy Trang</h2>
      <p className="text-lg mt-2">Xin lỗi, Trang web bạn tìm kiếm không tồn tại.</p>

      <Link to="/" className="mt-6 px-6 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300">
        Trở về Trang Chủ
      </Link>
    </div>
  );
};

export default NotFoundPage;
