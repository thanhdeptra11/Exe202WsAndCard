import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/LOGOBIG.png";

function Header({ isScrolled }) {
  const navItems = ["TRANG CHỦ", "ĂN GÌ", "YÊU THÍCH", "BLOG"];
  const navHrefs = ["home", "menu", "favorites", "blog"];

  return (
    <>
      <div className="px-36">
        <header className="fixed top-0 left-0 right-0 z-50 flex overflow-hidden flex-col items-center pt-5 bg-white shadow-md">
          <div className="flex gap-5 justify-between items-center w-full max-w-[1560px] max-md:max-w-full px-5">
            <img src={logo} alt="Company logo" className="object-contain shrink-0 self-stretch my-auto aspect-[1.68] w-[150px]" />
            <nav className="flex gap-10 self-stretch my-auto text-lg font-semibold text-black whitespace-nowrap max-md:max-w-full">
              {navItems.map((item, index) => (
                <div key={index}>
                  <Link
                    to={`/${navHrefs[index]}`}
                    className="p-3 relative hover:text-red-400 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-red-400 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                    {item}
                  </Link>
                </div>
              ))}
            </nav>
            {/*<SearchBar />*/}
            {/*login + signup*/}
            <div className="flex items-center gap-3 ml-4">
              {/* Nút Đăng nhập */}
              <Link to="/login">
                <button className="flex items-center gap-3 px-4 py-1.5 border border-gray-200 bg-white shadow-sm text-sm font-semibold rounded hover:text-red-400 hover:border-red-400 transition-colors duration-300">
                  Đăng nhập
                </button>
              </Link>

              {/* Nút Đăng ký */}
              <Link to="/register">
                <button className="px-4 py-1.5 bg-red-500 text-white font-semibold rounded hover:bg-red-700 transition-colors duration-300">Đăng ký</button>
              </Link>
            </div>
          </div>
        </header>
      </div>
      <div style={{ paddingTop: "100px" }}></div>
    </>
  );
}

export default Header;
