import React, { useState } from "react";
import address from "../database/address.js";
import Advanced from "../examples/Advanced";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const food = ["Phở", "Bánh mì", "Bún chả", "Gỏi cuốn", "Bánh xèo", "Cơm tấm", "Chả giò", "Bún bò Huế", "Hủ tiếu", "Cao lầu"];

function InfoSection() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [randomFood, setRandomFood] = useState("");

  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setProvince(selectedProvince);
    setCity("");
    setDistrict("");
    const provinceData = address.find((prov) => prov.Name === selectedProvince);
    if (provinceData) {
      setCities(provinceData.Districts);
    } else {
      setCities([]);
    }
    setDistricts([]);
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setCity(selectedCity);
    setDistrict("");
    const cityData = cities.find((dist) => dist.Name === selectedCity);
    if (cityData) {
      setDistricts(cityData.Wards);
    } else {
      setDistricts([]);
    }
  };

  const handleMinPriceChange = (e) => setMinPrice(e.target.value);
  const handleMaxPriceChange = (e) => setMaxPrice(e.target.value);
  const handleClear = () => {
    setMinPrice(0);
    setMaxPrice(1000000);
    setProvince("");
    setCity("");
    setDistrict("");
    setCities([]);
    setDistricts([]);
  };

  const handleSubmitAndRole = () => {
    const randomFoodIndex = Math.floor(Math.random() * food.length);
    const selectedFood = food[randomFoodIndex];
    setRandomFood(selectedFood);
    const fullAddress = `${district} - ${city} - ${province}`;
    console.log({ minPrice, maxPrice, fullAddress, selectedFood });
  };

  return (
    <div className="flex flex-col max-w-full w-[1560px] items-center">
      {/* Dialog for filters */}
      <div className="w-full flex justify-center items-center mt-12 gap-10">
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Tùy chỉnh</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px] sm:h-[400px]">
              <DialogHeader>
                <DialogTitle>Tùy chỉnh Bộ lọc</DialogTitle>
                <DialogDescription>Điều chỉnh các bộ lọc theo ý muốn. Nhấn lưu để áp dụng các thay đổi.</DialogDescription>
              </DialogHeader>

              <div className="flex flex-col items-center gap-6 p-6">
                <div className="flex gap-6 items-center">
                  <div className="flex flex-col items-center gap-1">
                    <label className="text-lg font-semibold">Giá tối thiểu (VND)</label>
                    <div className="flex gap-3 items-center px-3 py-1.5 rounded border border-gray-200 bg-white shadow-sm">
                      <input
                        type="number"
                        value={minPrice}
                        onChange={handleMinPriceChange}
                        min="0"
                        max="1000000"
                        className="bg-transparent border-none focus:outline-none text-sm text-center"
                        placeholder="0đ"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <label className="text-lg font-semibold">Giá tối đa (VND)</label>
                    <div className="flex gap-3 items-center px-3 py-1.5 rounded border border-gray-200 bg-white shadow-sm">
                      <input
                        type="number"
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                        min="0"
                        max="1000000"
                        className="bg-transparent border-none focus:outline-none text-sm text-center"
                        placeholder="1.000.000đ"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 items-center">
                  <div className="flex flex-col items-center gap-1 w-full">
                    <label className="text-lg font-semibold ">Tỉnh / Thành phố</label>
                    <select
                      value={province}
                      onChange={handleProvinceChange}
                      className="px-3 py-1.5 bg-transparent rounded border border-gray-200 bg-white shadow-sm focus:outline-none text-sm text-center w-full"
                    >
                      <option value="">Chọn Tỉnh/Thành phố</option>
                      {address.map((prov) => (
                        <option key={prov.Name} value={prov.Name}>
                          {prov.Name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col items-center gap-1 w-full">
                    <label className="text-lg font-semibold">Quận / Huyện</label>
                    <select
                      value={city}
                      onChange={handleCityChange}
                      className=" px-3 py-1.5 bg-transparent rounded border border-gray-200 bg-white shadow-sm focus:outline-none text-sm text-center w-full"
                      disabled={!province}
                    >
                      <option value="">Chọn Quận/Huyện</option>
                      {cities.map((city) => (
                        <option key={city.Name} value={city.Name}>
                          {city.Name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col items-center gap-1 w-full">
                    <label className="text-lg font-semibold">Phường / Xã</label>
                    <select
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="px-3 py-1.5 bg-transparent rounded border border-gray-200 bg-white shadow-sm focus:outline-none text-sm text-center w-full"
                      disabled={!city}
                    >
                      <option value="">Chọn Phường/Xã</option>
                      {districts.map((dist) => (
                        <option key={dist.Name} value={dist.Name}>
                          {dist.Name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <DialogFooter className="">
                  <Button variant="outline" onClick={handleClear}>
                    Xóa tất cả
                  </Button>
                  <Button className=" bg-red-500 hover:bg-red-600 text-white" onClick={handleSubmitAndRole}>
                    Lưu thay đổi
                  </Button>
                </DialogFooter>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Button to get random food */}
        <div>
          <Button onClick={handleSubmitAndRole} className=" bg-red-500 hover:bg-red-600 text-white">
            Nhận Món Ăn
          </Button>
        </div>
      </div>

      {/* Card list */}
      <div className="w-full h-full mt-6">
        <Advanced foodName={randomFood} />
      </div>
    </div>
  );
}

export default InfoSection;
