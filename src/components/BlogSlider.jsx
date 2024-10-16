import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const posts2 = [
    {
      id: 1,
      title: "Cơm Tấm Sài Gòn",
      descriptions: "Những hạt gạo không hoàn hảo này đã bị loại bỏ theo truyền thống sau quá trình xay xát nhưng đã được nâng lên thành một nét văn hóa ẩm thực đường phố...",
      pic: "https://static.vinwonders.com/production/com-tam-sai-gon-thumb.jpg",
      publishDate: "Sep 10, 2025",
      categoryId: "SaiGon",
      categoryName: "Ẩm thực Sài Gòn",
      tags: ["Sài Gòn", "Cơm Tấm", "Ẩm thực Sài Gòn"],
    },
    {
      id: 2,
      title: "Thức ăn đường phố Việt Nam",
      descriptions: "Những hạt gạo không hoàn hảo này đã bị loại bỏ theo truyền thống sau quá trình xay xát nhưng đã được nâng lên thành một nét văn hóa ẩm thực đường phố...",
      pic: "https://danviet.mediacdn.vn/296231569849192448/2022/2/6/am-thuc-sai-gon-164415516861455273850.jpg",
      publishDate: "Sep 10, 2025",
      categoryId: "Explore",
      categoryName: "Khám phá",
      tags: ["Việt Nam", "Ẩm thực", "Đường phố"],
    },
    {
      id: 3,
      title: "Bánh mì thịt nướng Sài Gòn",
      descriptions: "Những hạt gạo không hoàn hảo này đã bị loại bỏ theo truyền thống sau quá trình xay xát nhưng đã được nâng lên thành một nét văn hóa ẩm thực đường phố...",
      pic: "https://cdn.tgdd.vn/2021/05/CookRecipe/Avatar/banh-mi-thit-bo-nuong-thumbnail-1.jpg",
      publishDate: "Sep 10, 2025",
      categoryId: "SaiGon",
      categoryName: "Ẩm thực Sài Gòn",
      tags: ["Sài Gòn", "Bánh mì", "Ẩm thực Sài Gòn"],
    },
    {
      id: 4,
      title: "Phở Bò",
      descriptions: "Những hạt gạo không hoàn hảo này đã bị loại bỏ theo truyền thống sau quá trình xay xát nhưng đã được nâng lên thành một nét văn hóa ẩm thực đường phố...",
      pic: "https://mia.vn/media/uploads/blog-du-lich/top-19-quan-pho-ha-noi-ngon-nuc-tieng-an-la-ghien-phan-1--1639124992.jpg",
      publishDate: "Sep 10, 2025",
      categoryId: "HaNoi",
      categoryName: "Ẩm thực Hà Nội",
      tags: ["Hà Nội", "Phở", "Ẩm thực Hà Nội", "Mùa thu"],
    },
    {
      id: 5,
      title: "Bún chả",
      descriptions: "Những hạt gạo không hoàn hảo này đã bị loại bỏ theo truyền...",
      pic: "https://cdn.buffetposeidon.com/app/media/uploaded-files/090724-bun-cha-ha-noi-buffet-poseidon-1.jpeg",
      publishDate: "Sep 10, 2025",
      categoryId: "HaNoi",
      categoryName: "Ẩm thực Hà Nội",
      tags: ["Hà Nội", "Bún chả", "Ẩm thực Hà Nội", "Mùa xuân"],
    },
    {
      id: 6,
      title: "Phố ẩm thực người Hoa",
      descriptions: "Những hạt gạo không hoàn hảo này đã bị loại bỏ then thành một nét văn hóa ẩm thực đường phố...",
      pic: "https://media.cooky.vn/images/blog-2016/chinatown-sai-gon-thien-duong-am-thuc-nguoi-hoa-giua-long-thanh-pho%2015.jpg",
      publishDate: "Sep 10, 2025",
      categoryId: "Explore",
      categoryName: "Khám phá",
      tags: ["Ẩm thực", "Người Hoa", "Phố ẩm thực"],
    },
  ];

  return (
    <div className="p-20">
      <h2 className="flex justify-center text-lg font-medium text-red-400">CÁC BÀI VIẾT NỔI BẬT</h2>
      <h3 className="flex justify-center text-4xl mt-4 font-bold text-black max-md:max-w-full">Hãy để chúng tôi giúp bạn chọn món.</h3>
      <div className="w-[1500px]">
        <div className="p-5">
          <Slider {...settings}>
            {posts2.map((post) => (
              <div key={post.id} className="p-3 w-[500px]">
                <div
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
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
