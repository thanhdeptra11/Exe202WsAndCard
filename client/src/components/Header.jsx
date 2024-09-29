import React from "react";
import SearchBar from "./SearchBar.jsx";
import logo from "../assets/LOGO.svg";

function Header({ isScrolled }) {
  const navItems = ["TRANG CHỦ", "ĂN GÌ", "YÊU THÍCH", "LIÊN HỆ"];

  return (
    <>
      <header className="flex overflow-hidden flex-col items-center pt-5 bg-white">
        <div className="flex gap-5 justify-between items-center w-full max-w-[1560px] max-md:max-w-full">
          {/* Increase the width of the logo */}
          <img
            src={logo}
            alt="Company logo"
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.68] w-[150px]" // Adjusted width from 100px to 150px
          />
          <nav className="flex gap-10 self-stretch my-auto text-lg font-semibold text-black whitespace-nowrap max-md:max-w-full">
            {navItems.map((item, index) => (
              <div key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="p-3 relative hover:text-red-400 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-red-400 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {item}
                </a>
              </div>
            ))}
          </nav>
          <SearchBar />
        </div>
      </header>
    </>
  );
}

export default Header;
