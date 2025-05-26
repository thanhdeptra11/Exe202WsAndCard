import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/LOGOBIG.png";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { logout } from "../stores/userSlice";
import toast from "react-hot-toast";
import removeAccents from "remove-accents";

// Generate username without accents
function generateUsername(fullName) {
  const words = fullName.trim().split(" ");
  const lastTwoWords = words.slice(-2).join(" ");
  return removeAccents(lastTwoWords).replace(/\s+/g, "").toLowerCase();
}

// Function to extract time and date from a string
function getTimeAndDate(dateTimeString) {
  if (!dateTimeString) return { time: "", date: "" };
  const [time, date] = dateTimeString.split(" ");
  return { time, date };
}

function Header({ isScrolled }) {
  const navItems = ["TRANG CHỦ", "BLOG"];
  const navItemLinks = ["home", "blog"];
  const dispatch = useDispatch();

  // Access the Redux state
  const userFromRedux = useSelector((state) => state.user.user);
  const isLoggedInFromRedux = useSelector((state) => state.user.isLoggedIn);

  // Local state to store user information
  const [user, setUser] = useState(null);
  const [premiumInfo, setPremiumInfo] = useState("Miễn phí");
  const [ngayDangKy, setNgayDangKy] = useState(""); // Store registration date

  useEffect(() => {
    // Fetch user and premium information from localStorage
    const storedUser = localStorage.getItem("user");
    const isPremium = JSON.parse(localStorage.getItem("IS_PREMIUM_USER"));
    const premiumPack = JSON.parse(localStorage.getItem("PREMIUM_PACK"));
    const storedNgayDangKy = localStorage.getItem("NGAY_DANG_KY"); //data is string : "23:10 20/10/2024"
    const { time, date } = getTimeAndDate(storedNgayDangKy);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Determine the premium information based on localStorage values
    if (isPremium && premiumPack) {
      setPremiumInfo(`${premiumPack} tháng`);
    } else {
      setPremiumInfo("Miễn phí");
    }

    // Set registration date if available
    if (storedNgayDangKy) {
      // setNgayDangKy(storedNgayDangKy);
      setNgayDangKy(date);
    }
  }, [isLoggedInFromRedux, userFromRedux]);

  const handleLogout = () => {
    // Clear user data from localStorage and update Redux state
    localStorage.removeItem("user");
    localStorage.removeItem("IS_PREMIUM_USER");
    localStorage.removeItem("PREMIUM_PACK");
    localStorage.removeItem("NGAY_DANG_KY");
    localStorage.removeItem("FAVORITE_SHOPS");

    dispatch(logout());
    setUser(null);
    toast.success("Đăng xuất thành công");

    window.location.href = "/";
  };

  return (
    <>
      <div className="px-36">
        <header className="fixed top-0 left-0 right-0 z-50 flex overflow-hidden flex-col items-center pt-3 bg-white shadow-md">
          <div className="flex gap-5 justify-between items-center w-full max-w-[1560px] max-md:max-w-full px-5">
            {/* Logo */}
            <Link to="/">
              <img src={logo} alt="Company logo" className="object-contain shrink-0 self-stretch my-auto aspect-[1.68] w-[150px]" />
            </Link>

            {/* Navigation Menu */}
            <nav className="flex gap-10 self-stretch my-auto text-lg font-semibold text-black whitespace-nowrap max-md:max-w-full">
              {navItems.map((item, index) => (
                <div key={index}>
                  <Link
                    to={`/${navItemLinks[index]}`}
                    className="p-3 relative hover:text-red-400 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-red-400 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                    {item}
                  </Link>
                </div>
              ))}
            </nav>

            {/* User Menu / Login-Register */}
            <div className="flex items-center gap-3 ml-4">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="flex items-center gap-3 px-5 py-2 border border-gray-100 bg-white text-sm font-semibold rounded hover:text-red-400 hover:border-red-400 transition-colors duration-300 cursor-pointer">
                      <div className="text-base font-semibold">{`Hi, ${user.data.fullName}`}</div>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48">
                    <DropdownMenuLabel>
                      {`@${generateUsername(user.data.fullName)}`} | <span className="text-red-400 ">{premiumInfo} </span>{" "}
                    </DropdownMenuLabel>
                    {/* <DropdownMenuLabel>
                      Ngày bắt đầu:<span className="text-red-400 italic"> {ngayDangKy}</span>
                    </DropdownMenuLabel> */}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/settings">Cài đặt</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>Đăng xuất</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Link to="/login">
                    <button className="flex items-center gap-3 px-4 py-1.5 border border-gray-200 bg-white shadow-sm text-sm font-semibold rounded hover:text-red-400 hover:border-red-400 transition-colors duration-300">
                      Đăng nhập
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="px-4 py-1.5 bg-red-500 text-white font-semibold rounded hover:bg-red-700 transition-colors duration-300">Đăng ký</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </header>
      </div>
      <div style={{ paddingTop: "100px" }}></div>
    </>
  );
}

export default Header;
