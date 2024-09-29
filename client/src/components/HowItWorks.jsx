import React from "react";
import WorkStep from "./WorkStep";

function HowItWorks() {
  const steps = [
    {
      title: "CHOOSE",
      description:
        "Do you want to lose weight, exercise, adhere to a therapeutic diet? Our dietitian will help you with choosing the right program!",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6a50edfc17016d553a9a6cf1e2e1bd993c2c81b5f3b4288586f160ef41433b45?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
    {
      title: "PREPARE FOOD",
      description:
        "Do you want to lose weight, exercise, adhere to a therapeutic diet? Our dietitian will help you with choosing the right program!",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/eb8d3d6511fa4c2f5c660e5845e90bca04b659900c951c95b218afe869fcf96c?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
    {
      title: "DELIVER",
      description:
        "Do you want to lose weight, exercise, adhere to a therapeutic diet? Our dietitian will help you with choosing the right program!",
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
        <div className="flex gap-5 max-md:flex-col">
          {steps.map((step, index) => (
            <WorkStep key={index} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
