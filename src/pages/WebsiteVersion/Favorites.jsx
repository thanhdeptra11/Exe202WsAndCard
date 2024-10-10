import React, { useState } from "react";
import FavoriteCard from "../../components/FavoriteCard";
import SearchBar from "@/components/SearchBar";

const Favorites = () => {
  const products = [
    { name: "Gyro Sandwich", price: 15.0, rating: "4.9", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e323753ed4ee638813c8c9354f0b3e3324a1e07daa7495d880397f3528c3925a?" },
    { name: "Enchilada", price: 25.5, rating: "5.0", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/70aac73f7020ca446d118fef0eb7a642ba741bd59e5f93a027e7d6366934e1a4?" },
    { name: "Green Beans", price: 12.0, rating: "4.9", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f192e246195049212e868c2a0bf82685e85352ae0f90c75603af7316560099e?" },
    { name: "Pizza", price: 18.5, rating: "5.0", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ddc179f653dffa6fea80526b012a661d78c43a6b06cc6df9010eb70de48ea220?" },
    { name: "Chicken Pot Pie", price: 25.0, rating: "4.9", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/250e28ab4c601083409b7989c2a29ee9cf7a881777bb641b17e083ebfaf10db8?" },
    { name: "Green Salad", price: 15.0, rating: "4.9", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/31fcfb115378ac66b4decc3414ef8b861d07be2b7c426baeba33ac91d899794d?" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center from-pink-500 to-blue-500 text-center">
      <div className="flex flex-col w-full max-w-screen-xl mx-auto p-4">
        {/* Search Bar */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
          <SearchBar></SearchBar>
          {/* Sort by price */}
          {/* Sort by price */}
          <select className="w-full sm:w-1/3 p-2 border rounded-lg">
            <option value="" hidden>
              Sắp xếp theo giá
            </option>
            <option value="default">Mặc định</option>
            <option value="asc">Giá tăng dần</option>
            <option value="desc">Giá giảm dần</option>
          </select>

          {/* Sort by name */}
          <select className="w-full sm:w-1/3 p-2 border rounded-lg">
            <option value="" hidden>
              Món ăn
            </option>
            <option value="bun">Bún</option>
            <option value="pho">Phở</option>
            <option value="banhmi">Bánh mì</option>
            <option value="chao">Cháo</option>
            <option value="che">Chè</option>
            <option value="all">Tất cả</option>
          </select>
        </div>

        {/* Favorite Products */}
        <main className="flex-1 bg-white p-6 flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {products.map((product, index) => (
              <FavoriteCard key={index} {...product} className="flex-grow max-w-xs" />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Favorites;
