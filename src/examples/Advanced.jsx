import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
import { IconStar, IconStarFilled, IconStarHalfFilled, IconX, IconCheck } from "@tabler/icons-react";
import toast from "react-hot-toast";

function AdvancedShopCard({ foodName, shops = [] }) {
  const [currentIndex, setCurrentIndex] = useState(shops.length > 0 ? shops.length - 1 : 0);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(() => {
    const refs = Array(shops.length > 0 ? shops.length : 0)
      .fill(0)
      .map(() => React.createRef());
    return refs;
  }, [shops]);

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < (shops.length > 0 ? shops.length - 1 : 0);
  const canSwipe = currentIndex >= 0 && shops.length > 0;

  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    if (currentIndexRef.current >= idx) {
      childRefs[idx] && childRefs[idx].current.restoreCard();
    }
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < shops.length) {
      await childRefs[currentIndex].current.swipe(dir);
      if (dir === "left") {
        toast.success(`Đã thêm ${shops[currentIndex].name} vào danh sách yêu thích!`, {
          position: "bottom-left",
        });
      }
      if (dir === "right") {
        toast.error(`Đã bỏ qua ${shops[currentIndex].name}`, {
          position: "bottom-left",
        });
      }
    }
  };

  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  // Sắp xếp các thẻ dựa trên foodName
  const sortedShops = useMemo(() => {
    if (foodName) {
      return shops.slice().sort((a, b) => (a.name === foodName.toLowerCase().trim() ? -1 : b.name === foodName.toLowerCase().trim() ? 1 : 0));
    }
    return shops;
  }, [foodName, shops]);

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<IconStarFilled key={`full-${i}`} size={20} />);
    }

    if (hasHalfStar) {
      stars.push(<IconStarHalfFilled key={`half`} size={20} />);
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<IconStar key={`empty-${i}`} size={20} />);
    }

    return stars;
  };

  return (
    <div style={{ minHeight: "100vh", overflow: "hidden" }}>
      <div className="flex flex-col items-center justify-center h-screen from-pink-500 to-blue-500 text-center">
        {foodName ? <h1 className="text-5xl font-bold text-black mb-8">{foodName}</h1> : <h1 className="text-5xl font-bold text-black mb-8">Món Ăn</h1>}
        {/* Card stack */}
        <div className="relative w-[95vw] max-w-lg h-[450px]">
          {sortedShops.map((property, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="absolute w-full h-full"
              key={property._id}
              onSwipe={(dir) => swiped(dir, property.name, index)}
              onCardLeftScreen={() => outOfFrame(property.name, index)}
            >
              {/* Property Card */}
              <div className="bg-white rounded-lg overflow-hidden border-2 h-full">
                <img
                  className="h-60 w-full object-cover"
                  src={property.imageUrl[Math.floor(Math.random() * property.imageUrl.length)] || "default_image_url.jpg"}
                  alt={property.name}
                  draggable={false}
                  onMouseDown={(e) => e.stopPropagation()}
                />
                <div className="p-6">
                  <div className="flex items-baseline">
                    <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">Online</span>
                    <div className="ml-2 mr-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">•</div>
                    <span className="inline-block bg-red-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">Offline</span>
                  </div>
                  {/* shop name */}
                  <h4 className="flex mt-2 font-semibold text-lg leading-tight truncate">Quán {property.name}</h4>
                  {/* price */}
                  <div className="mt-1 flex ">
                    <span>
                      {property.minPrice}đ - {property.maxPrice}đ
                    </span>
                  </div>
                  {/* rating and reviews */}
                  <div className="mt-2 flex items-center">
                    {/* Star Rating using Tabler icons */}
                    <span className="text-teal-600 font-semibold flex">{renderStars(property.rating)}</span>
                    <span className="ml-2 text-gray-600 text-sm">{property.reviews.reviewCount} reviews</span>
                  </div>
                </div>
              </div>
            </TinderCard>
          ))}
        </div>
        <div className="mt-8 flex space-x-4">
          {/* Nút với icon Check */}
          <button
            onClick={() => swipe("left")}
            className={`w-16 h-16 flex justify-center items-center rounded-full bg-blue-500 text-white shadow-md transition-transform transform hover:scale-110 ${
              !canSwipe && "bg-gray-400 cursor-not-allowed"
            }`}
          >
            <IconCheck size={24} className="transition-transform transform hover:scale-125" />
          </button>
          {/* Nút với icon Star */}
          <button
            onClick={goBack}
            className={`w-16 h-16 flex justify-center items-center rounded-full bg-green-500 text-white shadow-md transition-transform transform hover:scale-110 ${
              !canGoBack && "bg-gray-400 cursor-not-allowed"
            }`}
          >
            <IconStar size={24} className="transition-transform transform hover:rotate-180" />
          </button>
          {/* Nút với icon X */}
          <button
            onClick={() => swipe("right")}
            className={`w-16 h-16 flex justify-center items-center rounded-full bg-red-500 text-white shadow-md transition-transform transform hover:scale-110 ${
              !canSwipe && "bg-gray-400 cursor-not-allowed"
            }`}
          >
            <IconX size={24} className="transition-transform transform hover:rotate-90" />
          </button>
        </div>
        {lastDirection && <h2 className="mt-4 text-black font-semibold animate-pulse">You swiped {lastDirection}</h2>}
      </div>
    </div>
  );
}

export default AdvancedShopCard;
