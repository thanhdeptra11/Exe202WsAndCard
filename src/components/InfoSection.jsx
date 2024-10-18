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
  const [district, setDistrict] = useState("");
  const [districts, setDistricts] = useState([]);
  const [randomFood, setRandomFood] = useState("");

  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setProvince(selectedProvince);
    setDistrict("");
    const provinceData = address.find((prov) => prov.Name === selectedProvince);
    if (provinceData) {
      setDistricts(provinceData.Districts);
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
    setDistrict("");
    setDistricts([]);
  };

  const handleSubmitAndRole = () => {
    const randomFoodIndex = Math.floor(Math.random() * food.length);
    const selectedFood = food[randomFoodIndex];
    setRandomFood(selectedFood);

    console.log({
      minPrice,
      maxPrice,
      province,
      district,
      selectedFood,
    });
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
            <DialogContent className="sm:max-w-[700px] sm:h-[500px]">
              <DialogHeader>
                <DialogTitle>Tùy chỉnh Bộ lọc</DialogTitle>
                <DialogDescription>Điều chỉnh các bộ lọc theo ý muốn. Nhấn lưu để áp dụng các thay đổi.</DialogDescription>
              </DialogHeader>

              <div className="flex flex-col gap-6 p-6">
                {/* Row for "Khoảng giá" and "Vị trí" */}
                <div className="flex gap-10">
                  {/* Left Column (Labels) */}
                  <div className="flex flex-col gap-6 items-start w-1/4">
                    <label className="text-lg font-semibold">Khoảng giá</label>
                    <label className="text-lg font-semibold">Vị trí</label>
                  </div>

                  {/* Right Column (Inputs) */}
                  <div className="flex flex-col gap-6 w-3/4">
                    {/* Input fields for Khoảng giá */}
                    <div className="flex gap-6">
                      <div className="flex items-center px-3 py-1.5 rounded border border-gray-200 bg-white shadow-sm">
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
                      <div className="flex items-center px-3 py-1.5 rounded border border-gray-200 bg-white shadow-sm">
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

                    {/* Input fields for Vị trí */}
                    <div className="flex flex-col gap-4">
                      <select
                        value={province}
                        onChange={handleProvinceChange}
                        className="px-3 py-1.5 bg-transparent rounded border border-gray-200 bg-white shadow-sm focus:outline-none text-sm text-center"
                      >
                        <option value="">Chọn Tỉnh/Thành phố</option>
                        {address.map((prov) => (
                          <option key={prov.Name} value={prov.Name}>
                            {prov.Name}
                          </option>
                        ))}
                      </select>

                      <select
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        className="px-3 py-1.5 bg-transparent rounded border border-gray-200 bg-white shadow-sm focus:outline-none text-sm text-center"
                        disabled={!province}
                      >
                        <option value="">Chọn Quận/Huyện</option>
                        {districts.map((dist) => (
                          <option key={dist.Name} value={dist.Name}>
                            {dist.Name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <hr className="my-10" />

                <DialogFooter>
                  <Button variant="outline" onClick={handleClear}>
                    Xóa tất cả
                  </Button>
                  <Button className="bg-red-500 hover:bg-red-600 text-white" onClick={handleSubmitAndRole}>
                    Lưu lựa chọn
                  </Button>
                </DialogFooter>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Button to get random food */}
        <div>
          <Button onClick={handleSubmitAndRole} className="bg-red-500 hover:bg-red-600 text-white">
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
