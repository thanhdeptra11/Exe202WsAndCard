import React, { useState } from "react";
import { Link } from "react-router-dom";
const posts = [
  {
    id: 1,
    title: "Cơm Tấm Sài Gòn",
    descriptions: "Những hạt gạo không hoàn hảo này đã bị loại bỏ theo truyền thống sau quá trình xay xát nhưng đã được nâng lên thành một nét văn hóa ẩm thực đường phố...",
    pic: "https://static.vinwonders.com/production/com-tam-sai-gon-thumb.jpg",
    publishDate: "Sep 10, 2025",
    categoryId: "SaiGon",
    categoryName: "Ẩm thực Sài Gòn",
  },
  {
    id: 2,
    title: "Thức ăn đường phố Việt Nam",
    descriptions: "Những hạt gạo không hoàn hảo này đã bị loại bỏ theo truyền thống sau quá trình xay xát nhưng đã được nâng lên thành một nét văn hóa ẩm thực đường phố...",
    pic: "https://danviet.mediacdn.vn/296231569849192448/2022/2/6/am-thuc-sai-gon-164415516861455273850.jpg",
    publishDate: "Sep 10, 2025",
    categoryId: "Explore",
    categoryName: "Khám phá",
  },
  {
    id: 3,
    title: "Bánh mì thịt nướng Sài Gòn",
    descriptions: "Những hạt gạo không hoàn hảo này đã bị loại bỏ theo truyền thống sau quá trình xay xát nhưng đã được nâng lên thành một nét văn hóa ẩm thực đường phố...",
    pic: "https://cdn.tgdd.vn/2021/05/CookRecipe/Avatar/banh-mi-thit-bo-nuong-thumbnail-1.jpg",
    publishDate: "Sep 10, 2025",
    categoryId: "SaiGon",
    categoryName: "Ẩm thực Sài Gòn",
  },
  {
    id: 4,
    title: "Phở Bò",
    descriptions: "Những hạt gạo không hoàn hảo này đã bị loại bỏ theo truyền thống sau quá trình xay xát nhưng đã được nâng lên thành một nét văn hóa ẩm thực đường phố...",
    pic: "https://mia.vn/media/uploads/blog-du-lich/top-19-quan-pho-ha-noi-ngon-nuc-tieng-an-la-ghien-phan-1--1639124992.jpg",
    publishDate: "Sep 10, 2025",
    categoryId: "HaNoi",
    categoryName: "Ẩm thực Hà Nội",
  },
  {
    id: 5,
    title: "Bún chả",
    descriptions: "Những hạt gạo không hoàn hảo này đã bị loại bỏ theo truyền thống sau quá trình xay xát nhưng đã được nâng lên thành một nét văn hóa ẩm thực đường phố...",
    pic: "https://cdn.buffetposeidon.com/app/media/uploaded-files/090724-bun-cha-ha-noi-buffet-poseidon-1.jpeg",
    publishDate: "Sep 10, 2025",
    categoryId: "HaNoi",
    categoryName: "Ẩm thực Hà Nội",
  },
  {
    id: 6,
    title: "Phố ẩm thực người Hoa",
    descriptions: "Những hạt gạo không hoàn hảo này đã bị loại bỏ theo truyền thống sau quá trình xay xát nhưng đã được nâng lên thành một nét văn hóa ẩm thực đường phố...",
    pic: "https://media.cooky.vn/images/blog-2016/chinatown-sai-gon-thien-duong-am-thuc-nguoi-hoa-giua-long-thanh-pho%2015.jpg",
    publishDate: "Sep 10, 2025",
    categoryId: "Explore",
    categoryName: "Khám phá",
  },
];
const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const handleFilter = (cate) => {
    setSelectedCategory(cate);
  };
  const activeClass = "bg-red-400 border-dark text-white";
  const inactiveClass = "bg-gray border-gray-3 text-dark";
  return (
    <>
      <section id="home" className="rounded-b-[50px] relative overflow-hidden z-2 pb-15 pt-34">
        <div>
          <div className="absolute bottom-0 left-0 rounded-b-[50px] w-full h-full bg-gray"></div>
          <div className="hidden lg:block absolute bottom-0 left-0 rounded-b-[50px] w-full h-full">{/* <img src="images/hero-bg.svg" alt="hero" /> */}</div>
        </div>

        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0 relative z-1">
          <div className="flex flex-wrap gap-x-7.5 gap-y-9">
            <div className="max-w-[1170px] w-full flex flex-col lg:flex-row lg:items-center gap-7.5 lg:gap-11 bg-white shadow-1 rounded-xl p-4 lg:p-2.5">
              <div className="lg:max-w-[536px] w-full">
                <Link to={`/blog/1`}>
                  <img className="w-full rounded-xl" src="https://static.vinwonders.com/production/com-tam-sai-gon-thumb.jpg" alt="hero" />
                </Link>
              </div>
              <div className="lg:max-w-[540px] w-full">
                <span className="inline-flex text-red-400 bg-red-100 font-medium text-sm py-1 px-3 rounded-full mb-4">Ẩm thực Sài Gòn</span>
                <h1 className="flex font-bold text-custom-4 xl:text-heading-4 text-dark mb-4">
                  <Link to={`/blog/1`}>Cơm Tấm Sài Gòn</Link>
                </h1>
                <p className="max-w-[524px] text-gray-500 ">
                  Những hạt gạo không hoàn hảo này đã bị loại bỏ theo truyền thống sau quá trình xay xát nhưng đã được nâng lên thành một nét văn hóa ẩm thực đường phố...
                </p>
                <div className="flex items-center mt-5">
                  {/* <a href="author.html" className="flex items-center gap-3">
                  <div className="flex w-6 h-6 rounded-full overflow-hidden">
                    <img src="images/user-01.png" alt="user" />
                  </div>
                  
                </a> */}

                  <p className="text-sm">Sep 10, 2025</p>
                </div>
              </div>
            </div>

            <div className="lg:max-w-[570px] w-full flex flex-col sm:flex-row sm:items-center gap-6 bg-white shadow-1 rounded-xl p-2.5">
              <div className="lg:max-w-[238px] lg:h-[150px] w-full">
                <Link to={`/blog/2`}>
                  <img className="w-full h-full rounded-xl " src="https://danviet.mediacdn.vn/296231569849192448/2022/2/6/am-thuc-sai-gon-164415516861455273850.jpg" alt="hero" />
                </Link>
              </div>
              <div className="lg:max-w-[272px] w-full">
                <span className="inline-flex text-red-400 bg-red-100 font-medium text-sm py-1 px-3 rounded-full mb-4">Khám phá</span>
                <h2 className="font-semibold text-custom-lg text-dark mb-3">
                  <Link to={`/blog/2`}>Thức ăn đường phố Việt Nam</Link>
                </h2>
                <div className="flex items-center">
                  {/* <p className="text-sm">
                  <Link to="author.html">By Adrio Devid</Link>
                </p> */}

                  <p className="text-sm">Sep 10, 2025</p>
                </div>
              </div>
            </div>

            <div className="lg:max-w-[570px] w-full flex flex-col sm:flex-row sm:items-center gap-6 bg-white shadow-1 rounded-xl p-2.5">
              <div className="lg:max-w-[238px] lg:h-[150px] w-full">
                <Link to={`/blog/3`}>
                  <img className="w-full h-full rounded-xl " src="https://cdn.tgdd.vn/2021/05/CookRecipe/Avatar/banh-mi-thit-bo-nuong-thumbnail-1.jpg" alt="hero" />
                </Link>
              </div>
              <div className="lg:max-w-[272px] w-full">
                <span className="inline-flex text-red-400 bg-red-100 font-medium text-sm py-1 px-3 rounded-full mb-4">Ẩm thực Sài Gòn</span>
                <h2 className="font-semibold text-custom-lg text-dark mb-3">
                  <Link to={`/blog/3`}>Bánh mì thịt nướng Sài Gòn</Link>
                </h2>
                <div className="flex items-center">
                  {/* <p className="text-sm">
                  <Link to="author.html">By Adrio Devid</Link>
                </p> */}

                  <p className="text-sm">Sep 10, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20 lg:pt-25 pb-15">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="mb-[3.125rem] text-center">
            <h2 className="text-dark mb-3.5 text-2xl font-bold sm:text-4xl xl:text-heading-3">Danh sách bài viết</h2>
            <p>Chọn thể loại để xem các bài viết liên quan</p>
          </div>
          <div x-data="{ selectedCategory: 'All', activeClass: '', inactiveClass: '',}">
            <div className="flex flex-wrap justify-center gap-4 items-center mb-[3.75rem]">
              <button
                onClick={() => handleFilter("All")}
                className={`rounded-full border py-[0.625rem] px-[1.125rem] font-medium hover:bg-red-400 hover:border-dark hover:text-white ease-in duration-200 ${
                  selectedCategory === "All" ? activeClass : inactiveClass
                } `}
              >
                Tất cả (6)
              </button>
              <button
                onClick={() => handleFilter("Explore")}
                className={`rounded-full border py-[0.625rem] px-[1.125rem] font-medium hover:bg-red-400 hover:border-dark hover:text-white ease-in duration-200 ${
                  selectedCategory === "Explore" ? activeClass : inactiveClass
                } `}
              >
                Khám phá (2)
              </button>
              <button
                onClick={() => handleFilter("SaiGon")}
                className={`rounded-full border py-[0.625rem] px-[1.125rem] font-medium hover:bg-red-400 hover:border-dark hover:text-white ease-in duration-200 ${
                  selectedCategory === "SaiGon" ? activeClass : inactiveClass
                } `}
              >
                Ẩm thực Sài Gòn (2)
              </button>
              <button
                onClick={() => handleFilter("HaNoi")}
                className={`rounded-full border py-[0.625rem] px-[1.125rem] font-medium hover:bg-red-400 hover:border-dark hover:text-white ease-in duration-200 ${
                  selectedCategory === "HaNoi" ? activeClass : inactiveClass
                } `}
              >
                Ẩm thực Hà Nội (2)
              </button>
            </div>

            <div>
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-7">
                  {posts.map((p) => (
                    <div key={p.id} className={`group ${p.categoryId === selectedCategory || selectedCategory === "All" ? "" : "hidden"}`}>
                      <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                        <Link to={`/blog/${p.id}`}>
                          <img src={p.pic} alt="image" className="w-full h-[220px]" />
                        </Link>
                      </div>
                      <h3>
                        <Link to={`/blog/${p.id}`} className="block text-dark font-bold text-xl mb-3.5">
                          <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                            {p.title}
                          </span>
                        </Link>
                      </h3>
                      <p>{p.descriptions}</p>
                      <div className="flex flex-wrap gap-3 items-center justify-between mt-4.5">
                        <div className="flex items-center gap-2.5">
                          {/* <a href="author.html" className="flex items-center gap-3">
                            <div className="flex w-6 h-6 rounded-full overflow-hidden">
                              <img src="images/user-01.png" alt="user" />
                            </div>
                          </a> */}

                          <p className="text-sm">Sep 10, 2025</p>
                        </div>
                        <a className="inline-flex text-blue bg-blue/[0.08] font-medium text-sm py-1 px-3 rounded-full">{p.categoryName}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* <button className="flex justify-center font-medium text-dark border border-dark rounded-md py-3 px-7.5 hover:bg-black hover:text-white ease-in duration-200 mx-auto mt-12.5 lg:mt-17.5">
              Browse all Posts
            </button> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
