import React from "react";
import WorkStep from "./WorkStep";

function HowItWorks() {
  const steps = [
    {
      title: "GỢI Ý",
      description: "Không biết nên ăn gì cho bữa sáng, trưa, chiều hay tối? Chọn giá và khoảng cách, hệ thống sẽ gợi ý món ngon. Không thích? Quẹt tiếp để tìm món khác!",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6a50edfc17016d553a9a6cf1e2e1bd993c2c81b5f3b4288586f160ef41433b45?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
    {
      title: "LỰA CHỌN CỬA HÀNG",
      description: "Tìm được món ăn yêu thích? Nhập tên món, chọn cửa hàng gần nhất và đến ngay để thưởng thức!",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/eb8d3d6511fa4c2f5c660e5845e90bca04b659900c951c95b218afe869fcf96c?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
    {
      title: "ĐÁNH GIÁ NHÀ HÀNG",
      description: "Sau khi trải nghiệm xong, hãy để lại đánh giá cho cửa hàng để giúp những người khác dễ dàng tìm được món ngon & cửa hàng tốt như bạn!",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/77ed77b45c2f532e305af3564780ba0f56ecd07a40587924d0aa2a68723a3e29?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
  ];

  return (
    <div className="mt-28">
      <h2 className="flex justify-center text-lg font-medium text-red-400">HƯỚNG DẪN THAO TÁC</h2>
      <h3 className="flex justify-center text-4xl mt-4 font-bold text-black max-md:max-w-full">Hãy để chúng tôi giúp bạn chọn món.</h3>

      <ol className="grid gap-8 md:grid-cols-3 p-6 mt-10">
        {steps.map((step, index) => (
          <li
            key={index}
            className="relative rounded-xl animate-in zoom-in ring-1  break-inside-avoid bg-white hover:ring-2 ring-gray-300 hover:ring-red-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0"
          >
            {/* // flex flex-col justify-between  */}
            <div className="p-6 space-y-4 ">
              {/* step number */}
              <div className="block w-10 h-10 mx-auto -mt-12 rounded-full ring-8 ring-gray-50">
                <div className="flex items-center justify-center w-10 h-10 text-lg font-bold bg-white rounded-full shadow-lg text-primary-600 tabular-nums">{index + 1}</div>
              </div>
              {/* step content */}
              <div className="space-y-1">
                <div className="flex justify-center my-5">
                  <h3 className="text-xl text-red-400 font-bold tracking-tight md:text-2xl">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
              <hr className="border-gray-200 border-dashed" />
              <img src={step.image} alt={step.title} className="w-full h-52 object-cover rounded-lg shadow-sm" />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default HowItWorks;
