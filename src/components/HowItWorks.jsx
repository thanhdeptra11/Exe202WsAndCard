import React from "react";
import WorkStep from "./WorkStep";
import step1Image from "../assets/1.png";
import step2Image from "../assets/2.png";
import step3Image from "../assets/3.png";
function HowItWorks() {
  const steps = [
    {
      title: "GỢI Ý",
      description: "Không biết nên ăn gì cho bữa sáng, trưa, chiều hay tối? Chọn giá và khoảng cách, hệ thống sẽ gợi ý món ngon. Không thích? Quẹt tiếp để tìm món khác!",
      image: step1Image, // Local image for step 1
    },
    {
      title: "LỰA CHỌN CỬA HÀNG",
      description: "Tìm được món ăn yêu thích? Nhập tên món, chọn cửa hàng gần nhất và đến ngay để thưởng thức!",
      image: step2Image, // Local image for step 2
    },
    {
      title: "ĐÁNH GIÁ NHÀ HÀNG",
      description: "Sau khi trải nghiệm xong, hãy để lại đánh giá cho cửa hàng để giúp những người khác dễ dàng tìm được món ngon & cửa hàng tốt như bạn!",
      image: step3Image, // Local image for step 3
    },
  ];

  return (
    <div className="mt-10">
      <h2 className="flex justify-center text-lg font-medium text-red-400">HƯỚNG DẪN THAO TÁC</h2>
      <h3 className="flex justify-center text-4xl mt-4 font-bold text-black max-md:max-w-full">Hãy để chúng tôi giúp bạn chọn món.</h3>

      <ol className="grid gap-8 md:grid-cols-3 p-6 mt-10">
        {steps.map((step, index) => (
          <li
            key={index}
            className="relative rounded-xl animate-in zoom-in ring-1 break-inside-avoid bg-white hover:ring-2 ring-gray-300 hover:ring-red-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 flex flex-col"
          >
            <div className="p-6 flex flex-col flex-grow">
              {/* Step number */}
              <div className="block w-10 h-10 mx-auto -mt-12 rounded-full ring-8 ring-gray-50">
                <div className="flex items-center justify-center w-10 h-10 text-lg font-bold bg-white rounded-full shadow-lg text-primary-600 tabular-nums">{index + 1}</div>
              </div>

              {/* Step content */}
              <div className="space-y-1 flex-grow">
                <div className="flex justify-center my-5">
                  <h3 className="text-xl text-red-400 font-bold tracking-tight md:text-2xl">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>

              {/* Bottom content */}
              <div className="mt-5">
                <hr className="border-gray-200 border-dashed mb-5" />
                <img src={step.image} alt={step.title} className="w-full h-52 object-cover rounded-lg shadow-sm" />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default HowItWorks;
