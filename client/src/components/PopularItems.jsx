import React from 'react'
import ProductCard from './ProductCard'

function PopularItems() {
  const products = [
    {
      name: 'Gyro Sandwhic',
      price: '$15.00',
      rating: '4.9',
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/e323753ed4ee638813c8c9354f0b3e3324a1e07daa7495d880397f3528c3925a?apiKey=ff22ebd9af3b40868bf46ef63076972a&',
    },
    {
      name: 'Enchilade',
      price: '$25.50',
      rating: '5.0',
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/70aac73f7020ca446d118fef0eb7a642ba741bd59e5f93a027e7d6366934e1a4?apiKey=ff22ebd9af3b40868bf46ef63076972a&',
    },
    {
      name: 'Green Beans',
      price: '$12.00',
      rating: '4.9',
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/5f192e246195049212e868c2a0bf82685e85352ae0f90c75603af7316560099e?apiKey=ff22ebd9af3b40868bf46ef63076972a&',
    },
    {
      name: 'Pizza',
      price: '$18.50',
      rating: '5.0',
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/ddc179f653dffa6fea80526b012a661d78c43a6b06cc6df9010eb70de48ea220?apiKey=ff22ebd9af3b40868bf46ef63076972a&',
    },
    {
      name: 'Chicken Pot Pie',
      price: '$25.00',
      rating: '4.9',
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/250e28ab4c601083409b7989c2a29ee9cf7a881777bb641b17e083ebfaf10db8?apiKey=ff22ebd9af3b40868bf46ef63076972a&',
    },
    {
      name: 'Green Salad',
      price: '$15.00',
      rating: '4.9',
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/31fcfb115378ac66b4decc3414ef8b861d07be2b7c426baeba33ac91d899794d?apiKey=ff22ebd9af3b40868bf46ef63076972a&',
    },
  ]

  return (
    <section className="mt-32 max-md:mt-10">
      <h2 className="text-lg font-medium text-orange-400">Product</h2>
      <h3 className="text-4xl font-bold text-black">Most Popular Items</h3>
      <div className="mt-14 w-full max-w-[1560px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-center">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
      <button className="flex gap-7 justify-center items-center px-3 py-2 mt-14 text-lg font-medium text-center text-white bg-orange-400 rounded-[37px] hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 max-md:mt-10">
        <span className="self-stretch my-auto">See More Product</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b4d118f21cf5f405b1973c22c882e27836787e837cc715d7ee1f18dafeeba51?apiKey=ff22ebd9af3b40868bf46ef63076972a&"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[58px]"
        />
      </button>
    </section>
  )
}

export default PopularItems
