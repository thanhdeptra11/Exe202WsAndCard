import React from "react";
import FavoriteCard from "../../components/FavoriteCard";

const Favorites = () => {
  const products = [
    {
      name: "Gyro Sandwhic",
      price: "$15.00",
      rating: "4.9",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e323753ed4ee638813c8c9354f0b3e3324a1e07daa7495d880397f3528c3925a?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
    {
      name: "Enchilade",
      price: "$25.50",
      rating: "5.0",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/70aac73f7020ca446d118fef0eb7a642ba741bd59e5f93a027e7d6366934e1a4?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
    {
      name: "Green Beans",
      price: "$12.00",
      rating: "4.9",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f192e246195049212e868c2a0bf82685e85352ae0f90c75603af7316560099e?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
    {
      name: "Pizza",
      price: "$18.50",
      rating: "5.0",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ddc179f653dffa6fea80526b012a661d78c43a6b06cc6df9010eb70de48ea220?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
    {
      name: "Chicken Pot Pie",
      price: "$25.00",
      rating: "4.9",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/250e28ab4c601083409b7989c2a29ee9cf7a881777bb641b17e083ebfaf10db8?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
    {
      name: "Green Salad",
      price: "$15.00",
      rating: "4.9",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/31fcfb115378ac66b4decc3414ef8b861d07be2b7c426baeba33ac91d899794d?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
  ];
  return (
    <div className="favorite-container">
      <div className="grid grid-cols-12">
        <div className="col-span-2 bg-red-400"></div>
        <div className="col-span-10 bg-slate-300">
          <div className="favorite-list grid px-4 py-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <FavoriteCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
