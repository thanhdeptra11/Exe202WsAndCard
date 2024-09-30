import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
import { IconStar, IconStarFilled } from "@tabler/icons-react";

// Updated db with property information
const db = [
  {
    name: "Bánh Mỳ Tèo Em",
    img: "https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
    beds: 3,
    baths: 2,
    price: "10.000đ / suất",
    reviews: 34,
    rating: 4,
  },
  {
    name: "Cozy Apartment in the City",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    beds: 2,
    baths: 1,
    price: "10.000đ / suất",
    reviews: 50,
    rating: 5,
  },
  {
    name: "Cơm Mai Linh",
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    beds: 1,
    baths: 1,
    price: "10.000đ / suất",
    reviews: 40,
    rating: 4,
  },
  {
    name: "Bún Chả Nhất",
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    beds: 5,
    baths: 4,
    price: "35.000đ / suất",
    reviews: 20,
    rating: 5,
  },
];

function Advanced() {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);
  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map(() => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < db.length - 1;
  const canSwipe = currentIndex >= 0;

  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    if (currentIndexRef.current >= idx) {
      childRefs[idx].current.restoreCard();
    }
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div style={{ minHeight: "100vh", overflow: "hidden" }}>
      <div className="flex flex-col items-center justify-center h-screen from-pink-500 to-blue-500 text-center">
        <h1 className="text-5xl font-bold text-black mb-8">Bún bò Huế</h1>
        <div className="relative w-[95vw] max-w-lg h-[450px]">
          {db.map((property, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="absolute w-full h-full"
              key={property.name}
              onSwipe={(dir) => swiped(dir, property.name, index)}
              onCardLeftScreen={() => outOfFrame(property.name, index)}
            >
              {/* Property Card */}
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl h-full">
                <img
                  className="h-60 w-full object-cover"
                  src={property.img}
                  alt={property.name}
                />
                <div className="p-6">
                  <div className="flex items-baseline">
                    <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                      Online
                    </span>
                    <div className="ml-2 mr-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                      &bull;
                    </div>
                    <span className="inline-block bg-red-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                      Offline
                    </span>
                  </div>
                  {/* shop name */}
                  <h4 className=" flex mt-2 font-semibold text-lg leading-tight truncate">
                    Quán {property.name}
                  </h4>
                  {/* price */}
                  <div className="mt-1 flex ">
                    <span>{property.price}</span>
                  </div>
                  {/* rating and reviews */}
                  <div className="mt-2 flex items-center">
                    {/* Star Rating using Tabler icons */}
                    <span className="text-teal-600 font-semibold flex">
                      {[...Array(property.rating)].map((_, i) => (
                        <IconStarFilled key={i} size={20} />
                      ))}
                      {[...Array(5 - property.rating)].map((_, i) => (
                        <IconStar key={i} size={20} />
                      ))}
                    </span>
                    <span className="ml-2 text-gray-600 text-sm">
                      {property.reviews} reviews
                    </span>
                  </div>
                </div>
              </div>
            </TinderCard>
          ))}
        </div>

        <div className="mt-8 flex space-x-4">
          <button
            onClick={() => swipe("left")}
            className={`px-4 py-2 text-lg font-semibold rounded-lg bg-blue-500 text-white shadow-md transition-transform transform hover:scale-105 ${
              !canSwipe && "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Swipe left!
          </button>
          <button
            onClick={goBack}
            className={`px-4 py-2 text-lg font-semibold rounded-lg bg-green-500 text-white shadow-md transition-transform transform hover:scale-105 ${
              !canGoBack && "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Undo swipe!
          </button>
          <button
            onClick={() => swipe("right")}
            className={`px-4 py-2 text-lg font-semibold rounded-lg bg-red-500 text-white shadow-md transition-transform transform hover:scale-105 ${
              !canSwipe && "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Swipe right!
          </button>
        </div>
        {lastDirection && (
          <h2 className="mt-4 text-white font-semibold animate-pulse">
            You swiped {lastDirection}
          </h2>
        )}
      </div>
    </div>
  );
}

export default Advanced;
