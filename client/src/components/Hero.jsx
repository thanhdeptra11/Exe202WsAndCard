import React from "react";
import OrderButton from "./OrderButton";

function Hero() {
  return (
    <section className="mt-6 w-full max-w-[1200px] max-md:max-w-full">
      <div className="flex gap-4 max-md:flex-col">
        {/* Left Section */}
        <div className="flex flex-col w-[60%] max-md:w-full">
          <div className="flex z-10 flex-col items-start mt-6 w-full">
            {/* Bike Delivery Button */}
            <div className="flex gap-4 justify-between py-1 pr-1 pl-5 max-w-full bg-red-200 rounded-[20px] w-[220px] max-md:pl-4 max-md:ml-2">
              <div className="my-auto text-base font-semibold text-orange-400">EXE201</div>
              <div className="flex flex-col items-center rounded-full bg-neutral-100 h-[45px] w-[45px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1bb245bb38ee9507a92721c425db8163976f9680a338cc72ca0b7c5c20987ab?apiKey=ff22ebd9af3b40868bf46ef63076972a&"
                  alt="Bike delivery icon"
                  className="object-contain aspect-square w-[45px]"
                />
              </div>
            </div>
             {/*Title*/}

            <h1 className="self-stretch mt-16 text-6xl font-bold max-md:text-3xl">
              <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20activities/Man%20Facepalming%20Light%20Skin%20Tone.png"
                alt="Man Facepalming Light Skin Tone" width="100" height="100"
                className="inline-block align-middle mr-2 " />
              <br/>
              <span className="text-black">
                Bạn
              </span>
              <br />
              <span className="text-black"> Không Biết </span>
              <br />
              <span className="text-red-400">Hôm Nay Ăn Gì?</span>
            </h1>

            {/* Description */}
            <p className="flex flex-col mt-8 w-[500px] text-base font-medium text-black max-md:w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, sed proin amet a vestibulum enim
              volutpat lacus. Volutpat arcu sit sed tortor etiam volutpat ipsum.
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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f464d2cd2c001eeed6c0800796a753b4740bd0aacdf22657b061d2d2163c2992?apiKey=ff22ebd9af3b40868bf46ef63076972a&"
            alt="Food delivery illustration"
            className="object-contain grow w-full rounded-none aspect-[0.8] max-md:w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
