import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
import { IconStar, IconStarFilled, IconX, IconCheck } from "@tabler/icons-react";
import toast from 'react-hot-toast';
// Updated db with property information
const db = [
  {
    name: "Bánh Mỳ Tèo Em",
    img: "https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
    price: "10.000đ / suất",
    reviews: 34,
    rating: 4,
  },
  {
    name: "Cozy Apartment in the City",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    price: "10.000đ / suất",
    reviews: 50,
    rating: 5,
  },
  {
    name: "Cơm Mai Linh",
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    price: "10.000đ / suất",
    reviews: 40,
    rating: 4,
  },
  {
    name: "Bún Chả Nhất",
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    price: "35.000đ / suất",
    reviews: 20,
    rating: 5,
  },
  {
    name: "Phở cuốn Hương Mai",
    img: "https://media.vnptit3.vn/resources/portal//Images/HNI/Import/636500768915392371_restaurant_nh%C3%A0h%C3%A0ng_12182017142855596.jpg",
    price: "45.000đ / suất",
    reviews: 80,
    rating: 5,
  },
  {
    name: "Quán phở Bát Đàn",
    img: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/09/quan-pho.jpg",
    price: "30.000đ / suất",
    reviews: 60,
    rating: 4,
  },
  {
    name: "Lão ngư chả cá",
    img: "https://cdn.tgdd.vn/Files/2022/01/26/1413028/10-quan-cha-ca-la-vong-ngon-nhat-o-ha-noi-202201260425305330.jpg",
    price: "340.000đ / suất",
    reviews: 45,
    rating: 4,
  },
  {
    name: "Bánh cuốn Bà Hoành",
    img: "https://kenh14cdn.com/203336854389633024/2022/10/6/1-16650422618631573557895-16650526774351211179033.jpg",
    price: "40.000đ / suất",
    reviews: 38,
    rating: 4,
  },
  {
    name: "Bún chả Hàng Quạt",
    img: "https://mia.vn/media/uploads/blog-du-lich/bun-cha-hang-quat-1-1700977616.jpg",
    price: "35.000đ / suất",
    reviews: 70,
    rating: 5,
  },
  {
    name: "Mỳ Hưng Phát",
    img: "https://cdn.tgdd.vn/Files/2021/06/24/1363040/cac-mon-ngon-ha-noi-phai-thu-cac-quan-an-ha-noi-phai-ghe-202209271052501255.jpg",
    price: "10.000đ / suất",
    reviews: 85,
    rating: 5,
  },
  {
    name: "Phở Thìn Lò Đúc",
    img: "https://kenh14cdn.com/2019/5/29/1-1559135786465984590883.jpg",
    price: "60.000đ / suất",
    reviews: 90,
    rating: 5,
  },
  {
    name: "Phở gà Châm",
    img: "https://manhhoach.com/wp-content/uploads/2021/09/pho-ga-cham.jpg",
    price: "40.000đ / suất",
    reviews: 110,
    rating: 4,
  },
  {
    name: "Bún ốc cô Huệ",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5hCfCj-JrYPA6KjmozFZV-jRBcxFuJ_7OUg&s",
    price: "40.000đ / suất",
    reviews: 95,
    rating: 5,
  },
  {
    name: "Bò Tơ Quán Mộc",
    img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1620811309/blog/f0d3dhgdoevuqel9gs1v.webp",
    price: "25.000đ / suất",
    reviews: 40,
    rating: 4,
  },
  {
    name: "Quán Chả Cá Anh Vũ",
    img: "https://dacsanbakien.com/wp-content/uploads/2021/03/cha-ca-anh-vu.jpg",
    price: "60.000đ / suất",
    reviews: 55,
    rating: 5,
  },
  {
    name: "Quán Ốc Dì Tú - Hà Nội",
    img: "https://cdn.tgdd.vn/Files/2024/02/22/1561533/pha-dao-quan-oc-binh-dan-tai-ba-dinh-ha-noi-duoc-michelin-goi-y-202402221432412165.jpg",
    price: "100.000đ / suất",
    reviews: 60,
    rating: 4,
  },
  {
    name: "Cà phê Giảng",
    img: "https://media.mia.vn/uploads/blog-du-lich/ca-phe-giang-va-cau-chuyen-thuong-hieu-vuot-qua-bao-thang-tram-5-1640745982.jpg",
    price: "30.000đ / suất",
    reviews: 65,
    rating: 5,
  },
  {
    name: "Ngan cháy tỏi Hàng Lược",
    img: "https://hotel84.com/userfiles/image/nhahang/hanoi/ThuyBunNGan/ngan-chay-toi-thuy-luong.jpg",
    price: "130.000đ / suất",
    reviews: 50,
    rating: 4,
  },
  {
    name: "Quán Bà Đức - Bánh cuốn nóng & Bún thang",
    img: "https://cdn.tgdd.vn/Files/2023/08/08/1541580/ghe-an-bun-thang-trong-khu-pho-co-ha-noi-chi-ban-chieu-toi-500-bat-moi-ngay-202308081004040486.jpg",
    price: "40.000đ / suất",
    reviews: 45,
    rating: 4,
  }
];

function Advanced({ foodName, listShop }) {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);
  const childRefs = useMemo(() => Array(db.length).fill(0).map(() => React.createRef()), []);

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
      if (dir === "left") {
        toast.success(`Đã thêm ${db[currentIndex].name} vào danh sách yêu thích!`, {
          position: 'bottom-left',
        });
      }
      if (dir === "right") {
        toast.error(`Đã bỏ qua ${db[currentIndex].name}`, {
          position: 'bottom-left',
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
  const sortedDb = useMemo(() => {
    if (foodName) {
      return db.slice().sort((a, b) => (a.name === foodName ? -1 : b.name === foodName ? 1 : 0));
    }
    return db;
  }, [foodName]);

  return (
    <div style={{ minHeight: "100vh", overflow: "hidden" }}>
      <div className="flex flex-col items-center justify-center h-screen from-pink-500 to-blue-500 text-center">
        {!foodName ? (
          <h1 className="text-5xl font-bold text-black mb-8">Bún bò Huế</h1>
        ) : (
          <h1 className="text-5xl font-bold text-black mb-8">{foodName}</h1>
        )}

        {/* Card stack */}
        <div className="relative w-[95vw] max-w-lg h-[450px]">
          {sortedDb.map((property, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="absolute w-full h-full"
              key={property.name}
              onSwipe={(dir) => swiped(dir, property.name, index)}
              onCardLeftScreen={() => outOfFrame(property.name, index)}
            >
              {/* Property Card */}
              <div className="bg-white rounded-lg overflow-hidden border-2 h-full">
                <img
                  className="h-60 w-full object-cover"
                  src={property.img}
                  alt={property.name}
                  draggable={false}
                  onMouseDown={(e) => e.stopPropagation()}
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
        {lastDirection && (
          <h2 className="mt-4 text-black font-semibold animate-pulse">
            You swiped {lastDirection}
          </h2>
        )}
      </div>
    </div>
  );
}

export default Advanced;

