import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const colorClasses = [
  "bg-gray-50 text-gray-600 ring-gray-500/10",
  "bg-red-50 text-red-700 ring-red-600/10",
  "bg-yellow-50 text-yellow-800 ring-yellow-600/20",
  "bg-green-50 text-green-700 ring-green-600/20",
  "bg-blue-50 text-blue-700 ring-blue-700/10",
  "bg-indigo-50 text-indigo-700 ring-indigo-700/10",
  "bg-purple-50 text-purple-700 ring-purple-700/10",
  "bg-pink-50 text-pink-700 ring-pink-700/10",
];

const categoryColorMap = {};

// Helper function to assign consistent colors to tags
const getCategoryColor = (tag) => {
  if (!categoryColorMap[tag]) {
    const randomColor = colorClasses[Math.floor(Math.random() * colorClasses.length)];
    categoryColorMap[tag] = randomColor;
  }
  return categoryColorMap[tag];
};

const BlogSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const posts2 = [
    {
      id: 1,
      title: "Bộ Bài mất dạy",
      descriptions: "Đánh bài đê",
      pic: "https://down-vn.img.susercontent.com/file/70eaa08af96969fe834f0181f9f832de",
      publishDate: "Sep 10, 2025",
      categoryId: "SaiGon",
      categoryName: "Bộ Bài",
      tags: ["Tiến Lên", "Phỏm", "Tá lả"],
    },
    {
      id: 2,
      title: "Workshop hoạt động ngoại khóa (đã đóng)",
      descriptions: "1 workshop cho những người bị chứng lo âu ngại tiếp xúc xã hội.",
      pic: "https://bizweb.dktcdn.net/100/364/149/files/11-a1739f20-eb8f-473b-956d-d6a854c62687.png?v=1690771909747",
      publishDate: "Sep 10, 2025",
      categoryId: "Explore",
      categoryName: "Ngoại Khóa",
      tags: ["Việt Nam", "Ngoài trời", "Đường phố"],
    },
    {
      id: 3,
      title: "Workshop làm bánh",
      descriptions: "Những hạt gạo không hoàn hảo này đã bị loại bỏ theo truyền thống sau quá trình xay xát nhưng đã được nâng lên thành một nét văn hóa ẩm thực đường phố...",
      pic: "https://static.vinwonders.com/production/workshop-lam-banh-ha-noi-2.jpg",
      publishDate: "Sep 10, 2025",
      categoryId: "SaiGon",
      categoryName: "Ẩm thực",
      tags: ["Hola", "Bánh mì", "Ẩm thực "],
    },
    {
      id: 4,
      title: "Workshop tại trường",
      descriptions: "Dành cho những người có thời gian rảnh ngắn, chúng mình đã tổ chức offline tại trường để heal những người cần thiết.",
      pic: "https://daihoc.fpt.edu.vn/wp-content/uploads/2021/07/BaiPR-FPTU-2021-B1-2-e1691738817341-650x355.png",
      publishDate: "Sep 10, 2025",
      categoryId: "HaNoi",
      categoryName: "Tại Trường",
      tags: ["Hà Nội", "Offline", "Mùa Hè"],
    },
    
  ];

  return (
    <div className="p-20">
      <h2 className="flex justify-center text-lg font-medium text-red-400">CÁC BÀI VIẾT NỔI BẬT</h2>
      <h3 className="flex justify-center text-4xl mt-4 font-bold text-black max-md:max-w-full">Hãy để chúng tôi giúp bạn hiểu mình hơn.</h3>
      <div className="w-[1400px]">
        <div className="p-5">
          <Slider {...settings}>
            {posts2.map((post) => (
              <div key={post.id} className="p-3 w-[500px]">
                <Link
                  to={`/blog/${post.id}`}
                  className="group animate-in zoom-in ring-1 rounded flex flex-col justify-between p-6 bg-white hover:ring-2 ring-gray-300 hover:ring-red-400 transition duration-200 hover:shadow-md"
                  style={{ minHeight: "450px", height: "450px", cursor: "pointer" }}
                >
                  <img src={post.pic} alt={post.title} className="w-full h-56 object-cover rounded mb-4" />
                  <div className="flex flex-col justify-between flex-1">
                    <h2
                      className="text-lg font-semibold group-hover:text-red-400 transition duration-300"
                      style={{
                        height: "40px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {post.title}
                    </h2>

                    <div className="mb-5" style={{ height: "60px", overflow: "hidden" }}>
                      <p className="description-truncate">{post.descriptions}</p>
                    </div>

                    <div className="flex gap-2 flex-wrap">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${getCategoryColor(tag)}`}>
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-gray-500">...</span>}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
