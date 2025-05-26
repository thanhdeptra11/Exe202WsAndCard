import { useState } from "react";
import { Link } from "react-router-dom";
const posts = [
  {
    id: 1,
    title: "Sản Phẩm Của Chúng Mình",
    descriptions: "đây là nội dung của nhóm exe201 Healing.",
    pic: "https://down-vn.img.susercontent.com/file/70eaa08af96969fe834f0181f9f832de",
    publishDate: "Sep 10, 2025",
    categoryId: "SaiGon",
    categoryName: "Bộ Bài",
  },
  {
    id: 3,
    title: "Workshop Healing",
    descriptions: "đây là nội dung của nhóm exe201 Healing.",
    pic: "https://inedip.com/images/workshops.png",
    publishDate: "Sep 10, 2025",
    categoryId: "SaiGon",
    categoryName: "Workshop",
  },
  
];
const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const handleFilter = (cate) => {
    setSelectedCategory(cate);
  };
  const activeClass = "bg-red-400 border-dark text-white";
  const inactiveClass = "bg-white border-gray-3 text-dark ring-1 ring-gray-300";
  return (
    <div className="py-10 mb-5">
      <section id="home" className="rounded-b-[50px] relative overflow-hidden z-2 pb-15 pt-34">
        <div>
          <div className="absolute bottom-0 left-0 rounded-b-[50px] w-full h-full bg-gray"></div>
          <div className="hidden lg:block absolute bottom-0 left-0 rounded-b-[50px] w-full h-full">{/* <img src="images/hero-bg.svg" alt="hero" /> */}</div>
        </div>

        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0 relative z-1">
          <div className="flex flex-wrap gap-x-7 gap-y-9">
            <div className="max-w-[1170px] my-1 w-full flex flex-col lg:flex-row lg:items-center gap-7.5 lg:gap-11 bg-white shadow-1 rounded-xl p-4 lg:p-2.5 ring-1 ring-gray-300">
              <div className="lg:max-w-[536px] w-full">
                <Link to={`/blog/1`}>
                  <img className="w-full rounded-xl" src="https://down-vn.img.susercontent.com/file/70eaa08af96969fe834f0181f9f832de" alt="hero" />
                </Link>
              </div>
              <div className="lg:max-w-[540px] w-full">
                <span className="inline-flex text-red-400 bg-red-100 font-medium text-sm py-1 px-3 rounded-full mb-4">Sản Phẩm chính</span>
                <h1 className="flex font-bold text-custom-4 xl:text-heading-4 text-dark mb-4">
                  <Link to={`/blog/1`}>Bộ Bài Healing</Link>
                </h1>
                <p className="max-w-[524px] text-gray-500 ">
                  Đây là sản phẩm tâm huyết của chúng mình, bộ bài có thể giúp mọi người cảm thấy healing
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

            <div className="lg:max-w-[570px] my-1 w-full flex flex-col sm:flex-row sm:items-center gap-6 bg-white shadow-1 rounded-xl p-2.5 ring-1 ring-gray-300">
              <div className="lg:max-w-[238px] lg:h-[150px] w-full">
                <Link to={`/blog/3`}>
                  <img className="w-full h-full rounded-xl " src="https://inedip.com/images/workshops.png" alt="hero" />
                </Link>
              </div>
              <div className="lg:max-w-[272px] w-full">
                <span className="inline-flex text-red-400 bg-red-100 font-medium text-sm py-1 px-3 rounded-full mb-4">Workshop đang triển khai</span>
                <h2 className="font-semibold text-custom-lg text-dark mb-3">
                  <Link to={`/blog/3`}>Workshop</Link>
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
            <h2 className="text-dark mb-3.5 text-2xl font-bold sm:text-4xl xl:text-heading-3">Danh sách những workshops của chúng mình</h2>
            <p>Chọn work shop để xem chi tiết</p>
          </div>
          <div x-data="{ selectedCategory: 'All', activeClass: '', inactiveClass: '',}">
            <div className="flex flex-wrap justify-center gap-4 items-center mb-[3.75rem]">
              <button
                onClick={() => handleFilter("All")}
                className={`rounded-full border py-[0.625rem] px-[1.125rem] font-medium hover:bg-red-400 hover:ring-0 hover:border-dark hover:text-white ease-in duration-200 ${
                  selectedCategory === "All" ? activeClass : inactiveClass
                } `}
              >
                Tất cả (2)
              </button>
             
              <button
                onClick={() => handleFilter("SaiGon")}
                className={`rounded-full border py-[0.625rem] px-[1.125rem] font-medium hover:bg-red-400 hover:ring-0 hover:border-dark hover:text-white ease-in duration-200 ${
                  selectedCategory === "SaiGon" ? activeClass : inactiveClass
                } `}
              >
                workshop đã triển khai (2)
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
    </div>
  );
};

export default Blog;
