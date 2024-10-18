import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import address from "../database/address.js";
import AdvancedShopCard from "../examples/Advanced";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import api from "../api";

const foodOptions = [
  "Bún bò",
  "Cơm gà",
  "Phở",
  "Bún",
  "Cơm",
  "Bánh gà",
  "Bánh xèo",
  "Nem lụi",
  "Mì gà",
  "Bánh tráng cuốn thịt heo",
  "Bún mắm nêm",
  "Bánh bột lọc",
  "Bánh mì",
  "Xôi",
  "Kem",
  "Chè",
  "Bún riêu",
  "Bún sườn",
  "Phở cuốn",
  "Gỏi cuốn",
  "Ốc",
];

function InfoSection() {
  const [shops, setShops] = useState([]);
  const [filteredShops, setFilteredShops] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [districts, setDistricts] = useState([]);
  const [randomFood, setRandomFood] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch all shops from the API
  const fetchShops = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(api.SHOP_GETALL);
      setShops(response.data);
    } catch (error) {
      console.error("Error fetching shops:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Generate a random food and filter shops by it
  const handleRandomFood = () => {
    const selectedFood = foodOptions[Math.floor(Math.random() * foodOptions.length)];
    localStorage.setItem("FOOD_RANDOM", selectedFood);
    setRandomFood(selectedFood);
    applyFilters(selectedFood, minPrice, maxPrice, province, district);
  };

  // Apply filters to shops
  const applyFilters = (foodName, minP, maxP, prov, dist) => {
    const filtered = shops.filter(
      (shop) =>
        shop.menu.some((item) => item.name.includes(foodName)) &&
        (prov ? shop.address.some((addr) => prov.includes(addr.province)) : true) &&
        (dist ? shop.address.some((addr) => dist.includes(addr.district)) : true) &&
        shop.minPrice >= minP &&
        shop.maxPrice <= maxP,
    );
    setFilteredShops(filtered);
  };

  // Save filter settings and apply them
  const handleFilterSubmit = () => {
    const filter = {
      minPrice,
      maxPrice,
      province,
      district,
    };
    localStorage.setItem("SHOP_FILTER", JSON.stringify(filter));

    const savedFood = localStorage.getItem("FOOD_RANDOM");
    if (savedFood) {
      applyFilters(savedFood, minPrice, maxPrice, province, district);
    } else {
      handleRandomFood();
    }
  };

  // Handle province change and load districts
  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setProvince(selectedProvince);
    setDistrict("");
    const provinceData = address.find((prov) => prov.Name === selectedProvince);
    setDistricts(provinceData ? provinceData.Districts : []);
  };

  // Clear filters and reset state
  const handleClear = () => {
    setMinPrice(0);
    setMaxPrice(1000000);
    setProvince("");
    setDistrict("");
    setDistricts([]);
    localStorage.removeItem("FOOD_RANDOM");
    localStorage.removeItem("SHOP_FILTER");
    setFilteredShops([]);
    setRandomFood("");
    fetchShops();
  };

  // Load saved data from localStorage on mount
  useEffect(() => {
    fetchShops();
  }, [fetchShops]);

  // Apply filters when shops data changes
  useEffect(() => {
    const savedFood = localStorage.getItem("FOOD_RANDOM");
    const savedFilter = JSON.parse(localStorage.getItem("SHOP_FILTER"));

    if (savedFood) {
      setRandomFood(savedFood);
      if (savedFilter) {
        setMinPrice(savedFilter.minPrice);
        setMaxPrice(savedFilter.maxPrice);
        setProvince(savedFilter.province);
        setDistrict(savedFilter.district);
        applyFilters(savedFood, savedFilter.minPrice, savedFilter.maxPrice, savedFilter.province, savedFilter.district);
      } else {
        applyFilters(savedFood, minPrice, maxPrice, province, district);
      }
    }
  }, [shops]);

  return (
    <div className="flex flex-col max-w-full w-[1560px] items-center">
      <div className="w-full flex justify-center items-center mt-12 gap-10">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Tùy chỉnh</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px] sm:h-[500px]">
            <DialogHeader>
              <DialogTitle>Tùy chỉnh Bộ lọc</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-6 p-6">
              <div className="flex gap-10">
                <div className="flex flex-col gap-6 items-start w-1/4">
                  <label className="text-lg font-semibold">Khoảng giá</label>
                  <label className="text-lg font-semibold">Vị trí</label>
                </div>
                <div className="flex flex-col gap-6 w-3/4">
                  <div className="flex gap-6">
                    <input type="number" value={minPrice} onChange={(e) => setMinPrice(parseInt(e.target.value) || 0)} min="0" className="input-field" />
                    <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(parseInt(e.target.value) || 1000000)} min="0" className="input-field" />
                  </div>
                  <select value={province} onChange={handleProvinceChange} className="input-field">
                    <option value="">Chọn Tỉnh/Thành phố</option>
                    {address.map((prov) => (
                      <option key={prov.Name} value={prov.Name}>
                        {prov.Name}
                      </option>
                    ))}
                  </select>
                  <select value={district} onChange={(e) => setDistrict(e.target.value)} className="input-field" disabled={!province}>
                    <option value="">Chọn Quận/Huyện</option>
                    {districts.map((dist) => (
                      <option key={dist.Name} value={dist.Name}>
                        {dist.Name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={handleClear}>
                  Xóa tất cả
                </Button>
                <Button className="bg-red-500 text-white" onClick={handleFilterSubmit}>
                  Lưu lựa chọn
                </Button>
              </DialogFooter>
            </div>
          </DialogContent>
        </Dialog>
        <Button onClick={handleRandomFood} className="bg-red-500 text-white">
          Nhận Món Ăn
        </Button>
      </div>
      <div className="w-full h-full mt-6">
        {loading ? <p>Loading shops...</p> : randomFood && filteredShops.length > 0 ? <AdvancedShopCard foodName={randomFood} shops={filteredShops} /> : <p>Không có cửa hàng nào phù hợp.</p>}
      </div>
    </div>
  );
}

export default InfoSection;
