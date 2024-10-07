import React from "react";
import { IconEye } from "@tabler/icons-react";

function Services() {
  const plans = [
    {
      title: "Free Plan",
      price: "0đ",
      benefits: ["Access to basic features", "Limited support", "Limited storage"],
    },
    {
      title: "1 Month Plan",
      price: "20.000đ/tháng",
      benefits: ["Access to all features", "Priority support", "10GB storage"],
    },
    {
      title: "3 Month Plan",
      price: "15.000đ/tháng",
      benefits: ["Access to all features", "Priority support", "30GB storage", "Discounted price"],
    },
  ];

  const handleChoosePlan = (planTitle) => {
    alert(`You chose the ${planTitle}`);
  };

  return (
    <section className="mt-28 max-md:mt-10">
      <div className="mt-16">
        <h2 className="flex justify-center text-lg font-medium text-red-400">CÁC GÓI NÂNG CẤP</h2>
        <h3 className="flex justify-center mt-4 ml-12 text-4xl font-bold text-black max-md:max-w-full">
          Nâng cao trải nghiệm của bạn chỉ từ <span className="text-red-400 ml-2 italic">15.000đ/tháng</span>
        </h3>
        <div className="flex justify-center gap-5 mt-8 max-md:flex-col">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="animate-in zoom-in ring-1 rounded-lg flex flex-col justify-between space-y-2 p-6 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-red-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 "
              style={{ height: "400px" }}
            >
              <div>
                <h3 className="text-xl font-bold mb-3">{plan.title}</h3>
                <p className="text-red-400 text-lg font-semibold mb-4">{plan.price}</p>
                <ul className="text-gray-700 mb-4">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className="mb-2">
                      - {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <button onClick={() => handleChoosePlan(plan.title)} className="bg-red-400 text-white py-2 px-4 rounded-lg hover:bg-red-500 transition-colors w-full">
                  Đăng ký
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
