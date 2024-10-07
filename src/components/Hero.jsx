import React from "react";
import SearchBar from "./SearchBar";
import OrderButton from "./OrderButton";

function Hero() {
  return (
    <section className="mt-6 w-full max-w-[1200px] max-md:max-w-full">
      <div className="flex gap-4 max-md:flex-col">
        {/* Left Section */}
        <div className="flex flex-col w-[60%] max-md:w-full">
          <div className="flex z-10 flex-col items-start mt-6 w-full">
            <SearchBar />
            {/*Title*/}

            <h1 className="self-stretch mt-16 text-6xl font-bold max-md:text-3xl">
              <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20activities/Man%20Facepalming%20Light%20Skin%20Tone.png"
                alt="Man Facepalming Light Skin Tone"
                width="100"
                height="100"
                className="inline-block align-middle mr-2 "
              />
              <br />
              <span className="text-black">Bạn</span>
              <br />
              <span className="text-black"> Không Biết </span>
              <br />
              <span className="text-red-400">Hôm Nay Ăn Gì?</span>
            </h1>

            {/* Description */}
            <p className="flex flex-col mt-8 w-[500px] text-base font-medium text-black max-md:w-full">
              Bạn không biết hôm nay ăn gì? FoodTrip sẽ giúp bạn! Với tính năng lọc thông minh, chúng tôi mang đến những gợi ý món ăn ngon, phù hợp với nhu cầu của bạn. Dù bạn muốn tìm kiếm nhanh
              chóng hay chỉ cần vài thao tác quẹt vuốt để tìm ra món ăn hoàn hảo, Foodrip sẽ giúp bạn dễ dàng khám phá những địa điểm ăn uống lý tưởng.{" "}
            </p>
            {/* Order Button Section */}
            <div className="mt-16 w-full max-md:mt-8">
              <div className="flex gap-4 max-md:flex-col">
                <OrderButton />
                <div className="flex flex-col ml-4 w-[50%] max-md:ml-0 max-md:w-full">
                  <div className="flex grow text-xl font-bold text-black max-md:mt-6">
                    {/*<img*/}
                    {/*  loading="lazy"*/}
                    {/*  src="https://cdn.builder.io/api/v1/image/assets/TEMP/61a1eeafef124ddb28bdc03243aa8672b62bad445221b1e2d3c3d9ff5f4658a2?apiKey=ff22ebd9af3b40868bf46ef63076972a&"*/}
                    {/*  alt="Order process"*/}
                    {/*  className="object-contain shrink-0 aspect-square w-[120px]"*/}
                    {/*/>*/}
                    {/*<div className="grow shrink my-auto w-[140px]">Order Process</div>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex flex-col ml-4 w-[40%] max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bdb50436f1193c621fbb00622347ef5595d80161f37ed2e02f4d48da8d867ed?placeholderIfAbsent=true&apiKey=ff22ebd9af3b40868bf46ef63076972a"
            alt="Food delivery illustration"
            className="object-contain grow w-full rounded-none aspect-[0.8] max-md:w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
