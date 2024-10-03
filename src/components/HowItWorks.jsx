import React from "react";
import WorkStep from "./WorkStep";

function HowItWorks() {
  const steps = [
    {
      title: "GỢI Ý",
      description:
        "Bạn không biết bữa sáng / trưa / chiều / tối nên ăn gì? Hệ thống của chúng tôi sẽ gợi ý cho bạn những món ăn phù hợp!",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6a50edfc17016d553a9a6cf1e2e1bd993c2c81b5f3b4288586f160ef41433b45?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
    {
      title: "LỰA CHỌN CỬA HÀNG",
      description:
        "Nếu đã tìm được nhân vật chính cho bữa ăn, hãy 'Quẹt Thẻ' để tìm kiếm cửa hàng bạn ưng ý!",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/eb8d3d6511fa4c2f5c660e5845e90bca04b659900c951c95b218afe869fcf96c?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
    {
      title: "LIÊN HỆ ĐẶT MÓN",
      description:
        "Liên hệ với cửa hàng để đặt món và thưởng thức bữa ăn ngon miệng!",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/77ed77b45c2f532e305af3564780ba0f56ecd07a40587924d0aa2a68723a3e29?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
  ];

  return (
    <section className="mt-32 max-md:mt-10 ">
        <h2 className="flex justify-center text-lg font-medium text-red-400">Hướng Dẫn Thao Tác</h2>
        <h3 className=" flex justify-center text-4xl mt-4 font-bold text-black max-md:max-w-full">
          Hãy để chúng tôi giúp bạn chọn món.
        </h3>
      <div className="ml-6 w-full max-w-[1605px] max-md:max-w-full">
        <div className="flex justify-center items-center gap-5 max-md:flex-col">
          {steps.map((step, index) => (
            <WorkStep key={index} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
