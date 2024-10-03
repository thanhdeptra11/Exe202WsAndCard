import React from 'react';

function OrderButton() {
  return (
    <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
      <button className="gap-2.5 self-stretch px-10 py-7 my-auto text-2xl font-bold text-white rounded-2xl min-h-[86px] bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-300 active:scale-95 active:bg-red-600 transition-transform duration-100 max-md:px-5 max-md:mt-10">
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Rightwards%20Pushing%20Hand%20Light%20Skin%20Tone.png"
          alt="Rightwards Pushing Hand Light Skin Tone"
          width="40"
          height="40"
          className="inline-block align-middle mr-2 pb-2"
        />
        Tìm Món Ngay
      </button>
    </div>
  );
}

export default OrderButton;
