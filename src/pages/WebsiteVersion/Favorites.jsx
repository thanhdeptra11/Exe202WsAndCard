import React, { useState } from "react";
import FavoriteCard from "../../components/FavoriteCard";
import SearchBar from "@/components/SearchBar";
import data from "../../database/dbExampleHere";
const Favorites = () => {
  const shops = data.shops;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center from-pink-500 to-blue-500 text-center">
      <div className="flex flex-col w-full max-w-screen-xl mx-auto p-4">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4 mb-6 p-6">
          <SearchBar />
          <select className="w-full sm:w-1/5 p-2 border rounded-lg">
            <option value="" hidden>
              Sắp xếp theo giá
            </option>
            <option value="default">Mặc định</option>
            <option value="asc">Giá tăng dần</option>
            <option value="desc">Giá giảm dần</option>
          </select>

          {/* Sort by name */}
          <select className="w-full sm:w-1/5 p-2 border rounded-lg">
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
        <main className="flex-1 p-6 flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {shops.map((product, index) => (
              <FavoriteCard key={index} {...product} className="flex-grow max-w-xs" />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Favorites;
