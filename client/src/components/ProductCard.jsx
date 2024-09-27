import React from 'react'

function ProductCard({ name, price, rating, image }) {
  return (
    <div className="flex flex-col w-[33%] max-md:w-full max-md:mt-10">
      <div className="flex flex-col pb-11 mx-auto w-full bg-white shadow-lg rounded-[35px] max-md:max-w-full">
        <img
          loading="lazy"
          src={image}
          alt={name}
          className="object-contain w-full rounded-none aspect-[1.46] max-md:max-w-full"
        />
        <div className="flex gap-5 justify-between mx-8 mt-4 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex flex-col">
            <h4 className="text-2xl font-bold text-black">{name}</h4>
            <button className="gap-2.5 self-start px-7 py-3.5 mt-4 text-sm text-white bg-orange-400 rounded-[35px] hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 max-md:px-5">
              Add To Cart
            </button>
          </div>
          <div className="flex flex-col self-start mt-2.5 text-black whitespace-nowrap">
            <div className="flex gap-2.5 self-start ml-3.5 text-sm max-md:ml-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/102d9b5163202fc240acd485cbbcbac46e521a417d0be037dd990d546d7cec18?apiKey=ff22ebd9af3b40868bf46ef63076972a&"
                alt=""
                className="object-contain shrink-0 my-auto w-3.5 aspect-[1.08]"
              />
              <div>{rating}</div>
            </div>
            <div className="mt-6 text-lg font-medium">{price}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
