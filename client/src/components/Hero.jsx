import React from "react";
import OrderButton from "./OrderButton";

function Hero() {
  return (
    <section className="mt-9 w-full max-w-[1568px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
          <div className="flex z-10 flex-col items-start mt-7 w-full max-md:mr-0 max-md:max-w-full">

            {/*button ship */}
            <div
              className="flex gap-5 justify-between py-1.5 pr-1.5 pl-6 max-w-full bg-red-200 rounded-[31.5px] w-[270px] max-md:pl-5 max-md:ml-2">
              <div className="my-auto text-lg font-semibold text-orange-400">Bike Delivery</div>
              <div className="flex flex-col items-center rounded-full bg-neutral-100 h-[54px] w-[54px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1bb245bb38ee9507a92721c425db8163976f9680a338cc72ca0b7c5c20987ab?apiKey=ff22ebd9af3b40868bf46ef63076972a&"
                  alt="Bike delivery icon"
                  className="object-contain aspect-square w-[54px]"
                />
              </div>
            </div>

            <h1 className="self-stretch mt-20 text-8xl font-bold max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              <span className="text-black">Hôm nay</span>
              <br />
              <span className="text-black">Bạn</span>
              <br />
              <span className="text-orange-400">Sẽ Ăn Gì?</span>
            </h1>
            <p className="flex flex-col mt-12 max-w-full w-[613px] text-lg font-medium text-black max-md:mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, sed proin amet a vestibulum enim
              volutpat lacus. Volutpat arcu sit sed tortor etiam volutpat ipsum.
            </p>
            <div className="mt-20 w-full max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <OrderButton />
                <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                  <div className="flex grow text-2xl font-bold text-black max-md:mt-8">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/61a1eeafef124ddb28bdc03243aa8672b62bad445221b1e2d3c3d9ff5f4658a2?apiKey=ff22ebd9af3b40868bf46ef63076972a&"
                      alt=""
                      className="object-contain shrink-0 max-w-full aspect-square w-[138px]"
                    />
                    <div className="grow shrink my-auto w-[164px]">Order Process</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f464d2cd2c001eeed6c0800796a753b4740bd0aacdf22657b061d2d2163c2992?apiKey=ff22ebd9af3b40868bf46ef63076972a&"
            alt="Food delivery illustration"
            className="object-contain grow w-full rounded-none aspect-[0.7] max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
