// components/FavoriteCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function FavoriteCard({ name, price, rating, image }) {
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    // Xử lý thêm vào giỏ hàng ở đây
    console.log(`Added ${name} to cart`);
    // Bạn có thể gọi một hàm từ Context hoặc Redux để thêm sản phẩm vào giỏ hàng
  };

  return (
    <div
      className="cursor-pointer transform transition-transform duration-300 hover:scale-105 flex flex-col"
      onClick={() => navigate(`/detail/${name}`, { state: { name } })}
    >
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-auto">
        {/* Hình Ảnh Sản Phẩm */}
        <div className="relative">
          <img
            loading="lazy"
            src={image}
            alt={name}
            className="w-full h-48 object-cover"
          />
          {/* Biểu tượng Yêu Thích (Optional) */}
          <button className="absolute top-2 right-2 bg-white bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Thông Tin Sản Phẩm */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xl font-bold text-gray-900">{price}</span>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.286 3.963c.3.921-.755 1.688-1.54 1.118l-3.376-2.455a1 1 0 00-1.176 0l-3.376 2.455c-.785.57-1.838-.197-1.54-1.118l1.286-3.963a1 1 0 00-.364-1.118L2.05 9.39c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.963z" />
              </svg>
              <span className="text-gray-700">{rating}</span>
            </div>
          </div>

          {/* Nút Thêm Vào Giỏ Hàng */}
          <button
            onClick={handleAddToCart}
            className="mt-auto bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;
