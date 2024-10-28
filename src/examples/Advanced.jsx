// import React, { useState, useMemo, useRef, useEffect } from "react";
// import TinderCard from "react-tinder-card";
// import { IconStar, IconStarFilled, IconStarHalfFilled, IconX, IconCheck } from "@tabler/icons-react";
// import toast from "react-hot-toast";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";

// function AdvancedShopCard({ foodName, shops = [], onReset }) {
//   const [currentIndex, setCurrentIndex] = useState(shops.length > 0 ? shops.length - 1 : 0);
//   const [lastDirection, setLastDirection] = useState();
//   const currentIndexRef = useRef(currentIndex);
//   const [showDialog, setShowDialog] = useState(false);

//   const childRefs = useMemo(() => {
//     const refs = Array(shops.length > 0 ? shops.length : 0)
//       .fill(0)
//       .map(() => React.createRef());
//     return refs;
//   }, [shops]);

//   const updateCurrentIndex = (val) => {
//     setCurrentIndex(val);
//     currentIndexRef.current = val;
//   };

//   const canGoBack = currentIndex < (shops.length > 0 ? shops.length - 1 : 0);
//   const canSwipe = currentIndex >= 0 && shops.length > 0;

//   const swiped = (direction, nameToDelete, index) => {
//     setLastDirection(direction);

//     if (direction === "left") {
//       // Save shop to favorites when swiped left
//       const currentShop = shops[index];

//       // Get favorite shops from localStorage
//       const favoriteShops = JSON.parse(localStorage.getItem("FAVORITE_SHOPS")) || [];

//       // Check if the shop is already in favorites
//       const isAlreadyFavorite = favoriteShops.some((shop) => shop._id === currentShop._id);

//       if (!isAlreadyFavorite) {
//         favoriteShops.push(currentShop);
//         localStorage.setItem("FAVORITE_SHOPS", JSON.stringify(favoriteShops));
//       }
//     }

//     updateCurrentIndex(index - 1);
//   };

//   const outOfFrame = (name, idx) => {
//     if (currentIndexRef.current >= idx) {
//       childRefs[idx] && childRefs[idx].current.restoreCard();
//     }
//   };

//   const swipe = async (dir) => {
//     if (canSwipe && currentIndex < shops.length) {
//       await childRefs[currentIndex].current.swipe(dir);

//       if (dir === "left") {
//         toast.success(`Đã thêm ${shops[currentIndex].name} vào danh sách yêu thích!`, {
//           position: "bottom-left",
//         });
//       }
//       if (dir === "right") {
//         toast.error(`Đã bỏ qua ${shops[currentIndex].name}`, {
//           position: "bottom-left",
//         });
//       }
//     }
//   };

//   const goBack = async () => {
//     if (!canGoBack) return;
//     const newIndex = currentIndex + 1;
//     updateCurrentIndex(newIndex);
//     await childRefs[newIndex].current.restoreCard();
//   };

//   // Show dialog when all shops have been swiped
//   useEffect(() => {
//     if (currentIndex < 0 && shops.length > 0) {
//       setShowDialog(true);
//     }
//   }, [currentIndex, shops.length]);

//   // Function to render stars based on rating
//   const renderStars = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating - fullStars >= 0.5;
//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<IconStarFilled key={`full-${i}`} size={20} />);
//     }
//     if (hasHalfStar) {
//       stars.push(<IconStarHalfFilled key={`half`} size={20} />);
//     }
//     const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
//     for (let i = 0; i < emptyStars; i++) {
//       stars.push(<IconStar key={`empty-${i}`} size={20} />);
//     }
//     return stars;
//   };

//   const handleDialogConfirm = () => {
//     setShowDialog(false);
//     onReset(); // Call the reset function passed from the parent component
//   };

//   return (
//     <div style={{ minHeight: "100vh", overflow: "hidden" }}>
//       <div className="flex flex-col items-center justify-center h-screen from-pink-500 to-blue-500 text-center">
//         {foodName ? <h1 className="text-5xl font-bold text-black mb-8">{foodName}</h1> : <h1 className="text-5xl font-bold text-black mb-8">Món Ăn</h1>}
//         {/* Card stack */}
//         <div className="relative w-[95vw] max-w-lg h-[450px]">
//           {shops.map((property, index) => (
//             <TinderCard
//               ref={childRefs[index]}
//               className="absolute w-full h-full"
//               key={property._id}
//               onSwipe={(dir) => swiped(dir, property.name, index)}
//               onCardLeftScreen={() => outOfFrame(property.name, index)}
//             >
//               {/* Property Card */}
//               <div className="bg-white rounded-lg overflow-hidden border-2 h-full">
//                 <img
//                   className="h-60 w-full object-cover"
//                   src={property.imageUrl[Math.floor(Math.random() * property.imageUrl.length)] || "default_image_url.jpg"}
//                   alt={property.name}
//                   draggable={false}
//                   onMouseDown={(e) => e.stopPropagation()}
//                 />
//                 <div className="p-6">
//                   <div className="flex items-baseline">
//                     <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">Online</span>
//                     <div className="ml-2 mr-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">•</div>
//                     <span className="inline-block bg-red-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">Offline</span>
//                   </div>
//                   {/* shop name */}
//                   <h4 className="flex mt-2 font-semibold text-lg leading-tight truncate">Quán {property.name}</h4>
//                   {/* price */}
//                   <div className="mt-1 flex ">
//                     <span>
//                       {property.minPrice}đ - {property.maxPrice}đ
//                     </span>
//                   </div>
//                   {/* rating and reviews */}
//                   <div className="mt-2 flex items-center">
//                     {/* Star Rating using Tabler icons */}
//                     <span className="text-teal-600 font-semibold flex">{renderStars(property.rating)}</span>
//                     <span className="ml-2 text-gray-600 text-sm">{property.reviews.reviewCount} reviews</span>
//                   </div>
//                 </div>
//               </div>
//             </TinderCard>
//           ))}
//         </div>
//         <div className="mt-8 flex space-x-4">
//           {/* Nút với icon Check */}
//           <button
//             onClick={() => swipe("left")}
//             className={`w-16 h-16 flex justify-center items-center rounded-full bg-blue-500 text-white shadow-md transition-transform transform hover:scale-110 ${
//               !canSwipe && "bg-gray-400 cursor-not-allowed"
//             }`}
//             disabled={!canSwipe}
//           >
//             <IconCheck size={24} className="transition-transform transform hover:scale-125" />
//           </button>
//           {/* Nút với icon X */}
//           <button
//             onClick={() => swipe("right")}
//             className={`w-16 h-16 flex justify-center items-center rounded-full bg-red-500 text-white shadow-md transition-transform transform hover:scale-110 ${
//               !canSwipe && "bg-gray-400 cursor-not-allowed"
//             }`}
//             disabled={!canSwipe}
//           >
//             <IconX size={24} className="transition-transform transform hover:rotate-90" />
//           </button>
//         </div>
//         {lastDirection && <h2 className="mt-4 text-black font-semibold animate-pulse">Bạn đã {lastDirection === "left" ? "Yêu thích" : "Bỏ qua"}</h2>}
//       </div>

//       {/* Dialog when all shops are swiped */}
//       {showDialog && (
//         <Dialog open={showDialog}>
//           <DialogContent>
//             <DialogHeader>
//               <DialogTitle>Thông báo</DialogTitle>
//             </DialogHeader>
//             <DialogDescription>Bạn đã xem hết các quán ăn cho món "{foodName}"</DialogDescription>
//             <DialogFooter>
//               <Button onClick={handleDialogConfirm}>Xác nhận</Button>
//             </DialogFooter>
//           </DialogContent>
//         </Dialog>
//       )}
//     </div>
//   );
// }

// export default AdvancedShopCard;

import React, { useState, useMemo, useRef, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { IconStar, IconStarFilled, IconStarHalfFilled, IconX, IconCheck } from "@tabler/icons-react";
import toast from "react-hot-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function AdvancedShopCard({ foodName, shops = [], onReset }) {
  const [currentIndex, setCurrentIndex] = useState(shops.length > 0 ? shops.length - 1 : 0);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);
  const [showDialog, setShowDialog] = useState(false);

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
    if (direction === "left") {
      const currentShop = shops[index];
      const favoriteShops = JSON.parse(localStorage.getItem("FAVORITE_SHOPS")) || [];
      const isAlreadyFavorite = favoriteShops.some((shop) => shop._id === currentShop._id);
      if (!isAlreadyFavorite) {
        favoriteShops.push(currentShop);
        localStorage.setItem("FAVORITE_SHOPS", JSON.stringify(favoriteShops));
      }
    }
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
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

  // Show dialog when all shops have been swiped
  useEffect(() => {
    if (currentIndex < 0 && shops.length > 0) {
      setShowDialog(true);
    }
  }, [currentIndex, shops.length]);

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

  const handleDialogConfirm = () => {
    setShowDialog(false);
    if (onReset && typeof onReset === "function") {
      onReset();
    } else {
      console.error("onReset is not a function:", onReset);
    }
  };

  return (
    <div style={{ minHeight: "100vh", overflow: "hidden" }}>
      <div className="flex flex-col items-center justify-center h-screen from-pink-500 to-blue-500 text-center">
        {foodName ? <h1 className="text-5xl font-bold text-black mb-8">{foodName}</h1> : <h1 className="text-5xl font-bold text-black mb-8">Món Ăn</h1>}
        {/* Card stack */}
        <div className="relative w-[95vw] max-w-lg h-[450px]">
          {shops.map((property, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="absolute w-full h-full"
              key={property._id}
              onSwipe={(dir) => swiped(dir, property.name, index)}
              onCardLeftScreen={() => outOfFrame(property.name, index)}
            >
              {/* Property Card */}
              <div className="bg-white rounded-lg overflow-hidden border-2 h-full">
                <img className="h-60 w-full object-cover" src={property.imageUrl[0] || "default_image_url.jpg"} alt={property.name} draggable={false} onMouseDown={(e) => e.stopPropagation()} />
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
            disabled={!canSwipe}
          >
            <IconCheck size={24} className="transition-transform transform hover:scale-125" />
          </button>
          {/* Nút với icon X */}
          <button
            onClick={() => swipe("right")}
            className={`w-16 h-16 flex justify-center items-center rounded-full bg-red-500 text-white shadow-md transition-transform transform hover:scale-110 ${
              !canSwipe && "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!canSwipe}
          >
            <IconX size={24} className="transition-transform transform hover:rotate-90" />
          </button>
        </div>
        {lastDirection && <h2 className="mt-4 text-black font-semibold animate-pulse">Bạn đã {lastDirection === "left" ? "Yêu thích" : "Bỏ qua"}</h2>}
      </div>

      {/* Dialog when all shops are swiped */}
      {showDialog && (
        <Dialog open={showDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Thông báo</DialogTitle>
            </DialogHeader>
            <DialogDescription>Bạn đã xem hết các quán ăn cho món "{foodName}"</DialogDescription>
            <DialogFooter>
              <Button onClick={handleDialogConfirm}>Xác nhận</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default AdvancedShopCard;
