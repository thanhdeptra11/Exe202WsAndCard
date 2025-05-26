import React from "react";
import WorkStep from "./WorkStep";
import step1Image from "../assets/1.png";
import step2Image from "../assets/2.png";
import step3Image from "../assets/3.png";
function HowItWorks() {
  const steps = [
    {
      title: "GỢI Ý",
      description: "Không biết bắt đầu từ đâu trong hành trình chữa lành? Hãy chọn vấn đề bạn đang gặp phải (stress, mất ngủ, lo âu, tổn thương tâm lý...) — chúng tôi sẽ gợi ý những workshop phù hợp với nhu cầu của bạn.",
      image: step1Image, // Local image for step 1
    },
    {
      title: "LỰA CHỌN CHUYÊN GIA & LỊCH TRÌNH",
      description: "Tìm được chủ đề phù hợp? Hãy xem các chuyên gia đồng hành, chọn thời gian & hình thức (trực tuyến hoặc trực tiếp) phù hợp để bắt đầu hành trình của bạn.",
      image: step2Image, // Local image for step 2
    },
    {
      title: "LAN TỎA",
      description: "Sau khi tham gia workshop, bạn có thể chia sẻ cảm nhận và đánh giá. Ý kiến của bạn sẽ là nguồn động lực và thông tin quý giá cho những người đang tìm kiếm sự chữa lành.",
      image: step3Image, // Local image for step 3
    },
  ];

  return (
    <div className="mt-10">
      <h2 className="flex justify-center text-lg font-medium text-red-400">MỤC TIÊU CỦA CHÚNG TÔI</h2>
      <h3 className="flex justify-center text-4xl mt-4 font-bold text-black max-md:max-w-full">Hãy để chúng tôi giúp bạn hiểu mình hơn</h3>

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
