// components/FavoriteCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function FavoriteCard({ name, rating, imageUrl, address, priceRange }) {
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    // Xử lý thêm vào giỏ hàng ở đây
    console.log(`Added ${name} to cart`);
    // Bạn có thể gọi một hàm từ Context hoặc Redux để thêm sản phẩm vào giỏ hàng
  };

  return (
    <div className="cursor-pointer transform transition-transform duration-300 hover:scale-105 flex flex-col" onClick={() => navigate(`/detail/${name}`, { state: { name } })}>
      <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full ring-1 ring-gray-300 hover:ring-2 hover:ring-red-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md">
        {/* Hình Ảnh Sản Phẩm */}
        <div className="relative">
          <img loading="lazy" src={imageUrl} alt={name} className="w-full h-48 object-cover" />
          {/* Biểu tượng Yêu Thích (Optional) */}
          <button className="absolute top-2 right-2 bg-white bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Thông Tin Sản Phẩm */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
          <div className="flex items-center justify-between mb-4">
            <span className="text-m text-red-500 ">
              <span className="text-sm text-red-500 mr-1">₫</span>
              {priceRange}
            </span>

            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.286 3.963c.3.921-.755 1.688-1.54 1.118l-3.376-2.455a1 1 0 00-1.176 0l-3.376 2.455c-.785.57-1.838-.197-1.54-1.118l1.286-3.963a1 1 0 00-.364-1.118L2.05 9.39c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.963z" />
              </svg>
              <span className="text-gray-700">{rating}</span>
            </div>
          </div>
          {/* Hiển thị Địa Chỉ với Biểu Tượng */}
          {address.map((addr, index) => (
            <div key={index} className="flex text-gray-600 text-sm mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a6 6 0 00-6 6c0 2.5 3 6 6 10 3-4 6-7.5 6-10a6 6 0 00-6-6zm0 2a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
              <span className="flex-1">
                {addr.specificAddress}, {addr.district}, {addr.city}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;
