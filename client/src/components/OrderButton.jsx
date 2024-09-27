import React from 'react'

function OrderButton() {
  return (
    <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
      <button className="gap-2.5 self-stretch px-12 py-7 my-auto text-2xl font-bold text-white rounded-2xl min-h-[86px] bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 max-md:px-5 max-md:mt-10">
        Order Now
      </button>
    </div>
  )
}

export default OrderButton
