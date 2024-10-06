// pages/Favorites.jsx
import React, { useState } from "react";
import FavoriteCard from "../../components/FavoriteCard";

const Favorites = () => {
  const products = [
    {
      name: "Gyro Sandwich",
      price: "$15.00",
      rating: "4.9",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e323753ed4ee638813c8c9354f0b3e3324a1e07daa7495d880397f3528c3925a?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
    {
      name: "Enchilada",
      price: "$25.50",
      rating: "5.0",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/70aac73f7020ca446d118fef0eb7a642ba741bd59e5f93a027e7d6366934e1a4?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
    {
      name: "Green Beans",
      price: "$12.00",
      rating: "4.9",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f192e246195049212e868c2a0bf82685e85352ae0f90c75603af7316560099e?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
    {
      name: "Pizza",
      price: "$18.50",
      rating: "5.0",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ddc179f653dffa6fea80526b012a661d78c43a6b06cc6df9010eb70de48ea220?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
    {
      name: "Chicken Pot Pie",
      price: "$25.00",
      rating: "4.9",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/250e28ab4c601083409b7989c2a29ee9cf7a881777bb641b17e083ebfaf10db8?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
    {
      name: "Green Salad",
      price: "$15.00",
      rating: "4.9",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/31fcfb115378ac66b4decc3414ef8b861d07be2b7c426baeba33ac91d899794d?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
    {
      name: "Gyro Sandwich",
      price: "$15.00",
      rating: "4.9",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e323753ed4ee638813c8c9354f0b3e3324a1e07daa7495d880397f3528c3925a?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
    {
      name: "Enchilada",
      price: "$25.50",
      rating: "5.0",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/70aac73f7020ca446d118fef0eb7a642ba741bd59e5f93a027e7d6366934e1a4?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
    {
      name: "Green Beans",
      price: "$12.00",
      rating: "4.9",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f192e246195049212e868c2a0bf82685e85352ae0f90c75603af7316560099e?apiKey=ff22ebd9af3b40868bf46ef63076972a&",
    },
    // Thêm nhiều sản phẩm hơn nếu cần
  ];

  // Trạng thái cho trang hiện tại và số sản phẩm mỗi trang
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Tính toán các trang
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Hàm chuyển trang
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Yêu Thích</h1>
        </div>
      </header>

      {/* Main Content */}
<div className="flex flex-1">
  {/* Sidebar */}
  <aside className="w-64 bg-red-500 text-white hidden md:block shadow-lg">
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-6">Menu</h2>
      <ul className="space-y-4">
        <li>
          <a href="#" className="flex items-center hover:text-gray-300 transition duration-300">
            <span className="material-icons mr-3">dashboard</span>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center hover:text-gray-300 transition duration-300">
            <span className="material-icons mr-3">shopping_cart</span>
            Orders
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center hover:text-gray-300 transition duration-300">
            <span className="material-icons mr-3">store</span>
            Products
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center hover:text-gray-300 transition duration-300">
            <span className="material-icons mr-3">people</span>
            Customers
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center hover:text-gray-300 transition duration-300">
            <span className="material-icons mr-3">bar_chart</span>
            Reports
          </a>
        </li>
      </ul>
    </div>
  </aside>


        {/* Favorite Products */}
        <main className="flex-1 bg-gray-200 p-6 flex flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product, index) => (
              <FavoriteCard key={index} {...product} />
            ))}
          </div>

          {/* Phân Trang */}
          <div className="mt-auto flex justify-center mt-8">
            <nav className="inline-flex -space-x-px">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 ${
                  currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
                }`}
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`px-3 py-2 leading-tight border border-gray-300 ${
                    currentPage === index + 1
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 ${
                  currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
                }`}
              >
                Next
              </button>
            </nav>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white shadow mt-6">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-gray-600">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </footer>
    </div>
    
  );
};

export default Favorites;
