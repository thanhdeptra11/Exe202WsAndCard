import RatingForm from "@/components/RatingForm";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiGrab, SiShopee } from "react-icons/si";
import { useLocation } from "react-router-dom";

function ProductDetail() {
  const location = useLocation();
  const { _id, name, rating, imageUrl, address, minPrice, maxPrice, email, phone, social, menu, reviews } = location.state || {};
  const [reviewList, setReviewList] = useState(reviews.reviewDetail);
  const [hasReviewed, setHasReviewed] = useState(false);
  const addReview = (newReview) => {
    setReviewList((prevReviewList) => [...prevReviewList, newReview]);
    const reviewedShops = JSON.parse(localStorage.getItem("SHOP_REVIEWED_KEY")) || [];
    reviewedShops.push(_id);
    localStorage.setItem("SHOP_REVIEWED_KEY", JSON.stringify(reviewedShops));
    setHasReviewed(true); // Hide comment section after adding a review
  };
  if (!name) {
    return <div>Không có thông tin chi tiết</div>;
  }

  function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  const getGoogleMapsLink = (location) => {
    const query = `${location.specificAddress}, ${location.district}, ${location.province}`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  };
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("FAVORITE_SHOPS"));
    favorites.map((s) => {
      if (s._id == _id) {
        setReviewList(s.reviews.reviewDetail);
      }
    });
    const reviewedShops = JSON.parse(localStorage.getItem("SHOP_REVIEWED_KEY")) || [];
    if (reviewedShops.includes(_id)) {
      setHasReviewed(true);
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4 mt-4">
        {/* Hình ảnh cửa hàng */}
        <div className="w-full md:w-1/2 px-4 mb-8">
          {imageUrl && imageUrl.length > 0 ? (
            <img
              src={imageUrl[0]}
              alt={name}
              className="w-full h-96 object-cover rounded-lg shadow-md mb-4" // Đã tăng chiều cao lên h-96
            />
          ) : (
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center rounded-lg mb-4">
              <span className="text-gray-500">Không có hình ảnh</span>
            </div>
          )}
        </div>

        {/* Chi tiết cửa hàng */}
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-3xl font-bold mb-2">{name}</h2>
          <div className="mb-4">
            <span className="text-2xl font-bold text-red-600">
              ₫{formatPrice(minPrice)} - ₫{formatPrice(maxPrice)}
            </span>
          </div>

          {/* Địa chỉ */}
          <div className="mb-4">
            <h4 className="text-xl font-semibold">Địa chỉ:</h4>
            <p className="text-gray-600">
              <a
                href={getGoogleMapsLink(address[0])} // Ensure you pass the correct address object
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {address[0].specificAddress}, {address[0].district}, {address[0].province}
              </a>
            </p>
          </div>

          {/* Thông tin liên hệ */}
          <div className="mb-4">
            <h4 className="text-xl font-semibold">Liên hệ:</h4>
            <p className="text-gray-600">Email: {email}</p>
            <p className="text-gray-600">SĐT: {phone}</p>
          </div>

          {/* Liên kết mạng xã hội */}
          <div className="mb-4">
            <h4 className="text-xl font-semibold">Mạng xã hội:</h4>
            <div className="flex gap-4">
              {social.map((platform, index) => (
                <a key={index} href={platform.link} className="text-indigo-500 hover:text-indigo-700" target="_blank" rel="noreferrer">
                  {platform.name === "Facebook" && <FaFacebook size={24} color="#4267B2" />}
                  {platform.name === "Instagram" && <FaInstagram size={24} color="#C13584" />}
                  {platform.name === "ShopeeFood" && <SiShopee size={24} color="#FF4B4B" />}
                  {platform.name === "GrabFood" && <SiGrab size={24} color="#00A859" />}
                </a>
              ))}
            </div>
          </div>

          {/* Hiển thị đánh giá cửa hàng */}
          <div className="flex items-center mb-4">
            {[...Array(Math.floor(rating))].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
            <span className="ml-2 text-gray-600">
              {rating} ({reviewList.length} đánh giá)
            </span>
          </div>
        </div>
      </div>
      {/* Rating Form */}
      {!hasReviewed && (
        <div>
          <h3 className="flex text-4xl font-bold text-black my-4">Đánh giá quán ăn</h3>
          <RatingForm shopId={_id} addReview={addReview} />
        </div>
      )}
      {/* Flexbox cho Menu và Đánh giá */}
      <div className="flex space-x-6">
        {/* Phần Menu (Trái) */}
        <div className="container mx-auto max-w-6xl p-4 mt-24">
          <h2 className="flex justify-center text-lg font-medium text-red-400">MENU</h2>
          <h3 className="flex justify-center text-4xl font-bold text-black my-4">Khám Phá Món Ăn</h3>
          <div className="md:columns-2 lg:columns-2 gap-6 p-4 sm:p-1 mt-2">
            {menu.map((item, index) => (
              <div
                key={index}
                className="animate-in zoom-in ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-red-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative"
              >
                <h4 className="font-bold text-lg">{item.name}</h4>
                <p className="text-gray-700 font-semibold">
                  Giá: ₫{formatPrice(item.price)}/{item.type}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Phần Đánh giá (Phải) */}
        <div className="container mx-auto max-w-6xl p-4 mt-24">
          <h2 className="flex justify-center text-lg font-medium text-red-400">PHẢN HỒI</h2>
          <h3 className="flex justify-center text-4xl font-bold text-black my-4">Khách Hàng Nói Gì?</h3>
          <div className="md:columns-2 lg:columns-3 gap-6 p-4 sm:p-1 mt-2">
            {reviewList.map((review, index) => (
              <div
                key={index}
                className="animate-in zoom-in ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-red-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative"
              >
                <div className="flex flex-col break-inside-avoid-page z-0 relative">
                  <div className="flex justify-between">
                    <div className="flex space-x-6">
                      <div className="flex space-x-4 flex-shrink-0 w-52">
                        <div className="h-10 w-10 bg-indigo-500 text-white rounded-full flex items-center justify-center">{review.name.charAt(0)}</div>
                        <div>
                          <div className="font-semibold">{review.name}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                    <span className="ml-2 text-gray-600">{review.rating} sao</span>
                  </div>
                  <div className="text-gray-700">{review.comment}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
