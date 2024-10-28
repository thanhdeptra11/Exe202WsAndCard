import api from "@/api";
import axios from "axios";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

function RatingForm({ shopId, addReview }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [comment, setComment] = useState("");
  const [review, setReview] = useState({
    name: user.data.fullName,
    email: user.data.email,
    rating: 0,
    comment: "",
  });
  const handleRating = (newRating) => {
    setRating(newRating);
    setReview((prevReview) => ({ ...prevReview, rating: newRating }));
  };
  const handleCommentChange = (e) => {
    const newComment = e.target.value;
    setComment(newComment);
    setReview((prevReview) => ({ ...prevReview, comment: newComment }));
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error("Please select a star rating.");
      return;
    }

    if (!comment.trim()) {
      toast.error("Please write a comment.");
      return;
    }
    // Combine rating and comment in the review state
    const res = await axios.post(api.SHOP_GETALL + `/${shopId}/review`, review);
    if (res.status == 201) {
      const favorites = JSON.parse(localStorage.getItem("FAVORITE_SHOPS"));
      const updatedFavorites = favorites.map((shop) => {
        if (shop._id === shopId) {
          // Add the new review to the shop's reviewDetail array
          shop.reviews.reviewDetail.push(review);
          shop.reviews.reviewCount = shop.reviews.reviewCount + 1;
        }
        return shop; // Return the shop, modified or not
      });
      localStorage.setItem("FAVORITE_SHOPS", JSON.stringify(updatedFavorites));
      addReview(review);
    }
  };
  return (
    <div>
      {/* Star Rating */}
      <div className="star-rating">
        <div class="flex items-center">
          {Array.from({ length: 5 }, (_, index) => {
            const starValue = index + 1;
            return (
              <svg
                key={index}
                className={`w-4 h-4 ms-1 cursor-pointer transition-colors duration-200 ${starValue <= (hover || rating) ? "text-yellow-300" : "text-gray-300"}`}
                onClick={() => handleRating(starValue)} // Set rating when clicked
                onMouseEnter={() => setHover(starValue)} // Set hover value on mouse enter
                onMouseLeave={() => setHover(null)} // Reset hover value on mouse leave
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            );
          })}
        </div>
      </div>
      {/* Comment Form */}
      <form className="comment-form" onSubmit={handleSubmit}>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows="4"
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 focus-visible:outline-none dark:text-white dark:placeholder-gray-400"
              placeholder="Write a comment..."
              value={comment}
              onChange={handleCommentChange}
            ></textarea>
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-red-400 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Post comment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RatingForm;
