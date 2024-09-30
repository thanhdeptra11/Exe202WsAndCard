import React, { useState } from "react";
import address from "../database/address.js";
import Advanced from "../examples/Advanced";

const food = [
  "Phở",
  "Bánh mì",
  "Bún chả",
  "Gỏi cuốn",
  "Bánh xèo",
  "Cơm tấm",
  "Chả giò",
  "Bún bò Huế",
  "Hủ tiếu",
  "Cao lầu",
];

function InfoSection() {

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);

  // Location selection states
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");

  // Derived data based on current selections
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);

  // Handle province change, and reset city and district selections
  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setProvince(selectedProvince);
    setCity(""); // Reset city when province changes
    setDistrict(""); // Reset district when province changes

    // Find and set cities based on the selected province
    const provinceData = address.find((prov) => prov.Name === selectedProvince);
    if (provinceData) {
      setCities(provinceData.Districts);
    } else {
      setCities([]);
    }
    setDistricts([]); // Reset districts when province changes
  };

  // Handle city change, and reset district selection
  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setCity(selectedCity);
    setDistrict(""); // Reset district when city changes

    // Find and set districts based on the selected city
    const cityData = cities.find((dist) => dist.Name === selectedCity);
    if (cityData) {
      setDistricts(cityData.Wards);
    } else {
      setDistricts([]);
    }
  };

  // Handle min and max price changes
  const handleMinPriceChange = (e) => setMinPrice(e.target.value);
  const handleMaxPriceChange = (e) => setMaxPrice(e.target.value);


  // Handle clearing all fields
  const handleClear = () => {
    setMinPrice(0);
    setMaxPrice(1000000);
    setProvince("");
    setCity("");
    setDistrict("");
    setCities([]);
    setDistricts([]);
  };

  // Thêm useState để lưu tên món ăn ngẫu nhiên đã chọn
  const [randomFood, setRandomFood] = useState("");

  // Hàm chọn món ăn ngẫu nhiên
  const handleSubmitAndRole = () => {
    // Chọn món ăn ngẫu nhiên từ mảng food
    const randomFoodIndex = Math.floor(Math.random() * food.length);
    const selectedFood = food[randomFoodIndex];
    setRandomFood(selectedFood);
    // Tạo địa chỉ đầy đủ dựa trên các lựa chọn
    const fullAddress = `${district} - ${city} - ${province}`;
    console.log({ minPrice, maxPrice, fullAddress, selectedFood });
  };

  return (
    <>
      <div className="flex flex-col">
        <section
          className="flex flex-col justify-center items-center px-16 mt-10 max-w-full text-black bg-white  rounded-[15px] w-[1560px] max-md:px-5 max-md:mt-10">
          <div className="flex flex-wrap gap-5 justify-between items-center max-w-full w-[1228px]">
            {/* Minimum and Maximum Price Inputs */}
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

            {/* Divider */}
            <div className="shrink-0 self-stretch w-px border border-solid bg-zinc-400 border-zinc-400 h-[164px]" />

            {/* Province Selector */}
            <div className="flex flex-col items-center gap-1">
              <label className="text-lg font-semibold">Tỉnh/Thành phố</label>
              <div className="flex gap-3 items-center px-3 py-1.5 rounded border border-gray-200 bg-white shadow-sm">
                <select value={province} onChange={handleProvinceChange}
                        className="bg-transparent border-none focus:outline-none text-sm text-center w-full">
                  <option value="">Chọn Tỉnh/Thành phố</option>
                  {address.map((prov) => (
                    <option key={prov.Name} value={prov.Name}>
                      {prov.Name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* City Selector (dependent on province) */}
            <div className="flex flex-col items-center gap-1">
              <label className="text-lg font-semibold">Quận/Huyện/Thành phố</label>
              <div className="flex gap-3 items-center px-3 py-1.5 rounded border border-gray-200 bg-white shadow-sm">
                <select value={city} onChange={handleCityChange}
                        className="bg-transparent border-none focus:outline-none text-sm text-center w-full"
                        disabled={!province}>
                  <option value="">Chọn Quận/Huyện/Thành phố</option>
                  {cities.map((city) => (
                    <option key={city.Name} value={city.Name}>
                      {city.Name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* District Selector (dependent on city) */}
            <div className="flex flex-col items-center gap-1">
              <label className="text-lg font-semibold">Phường/Xã</label>
              <div className="flex gap-3 items-center px-3 py-1.5 rounded border border-gray-200 bg-white shadow-sm">
                <select value={district} onChange={(e) => setDistrict(e.target.value)}
                        className="bg-transparent border-none focus:outline-none text-sm text-center w-full"
                        disabled={!city}>
                  <option value="">Chọn Phường/Xã</option>
                  {districts.map((dist) => (
                    <option key={dist.Name} value={dist.Name}>
                      {dist.Name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Submit and Clear Buttons */}
          <div className="mt-8 flex gap-4">
            <button
              onClick={handleSubmitAndRole}
              className="px-6 py-2 text-white bg-red-400 rounded-lg hover:bg-red-600 transition-colors"
            >
              Nhận Món Ăn
            </button>

            <button onClick={handleClear}
                    className="px-6 py-2 text-white bg-gray-400 rounded-lg hover:bg-gray-500 transition-colors">
            Xóa tất cả
            </button>
          </div>
        </section>
        <div className="w-full h-full">
          <Advanced foodName={randomFood} />
        </div>
      </div>
    </>
  );
}

export default InfoSection;
