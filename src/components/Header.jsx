import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/LOGOBIG.png";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { logout } from "../stores/userSlice"; // Import the logout action from your Redux slice
import toast from "react-hot-toast";

function Header({ isScrolled }) {
  const navItems = ["TRANG CHỦ", "ĂN GÌ", "YÊU THÍCH", "BLOG"];
  const navItemLinks = ["home", "menu", "favorites", "blog"];

  const dispatch = useDispatch();

  // Access the user state from the Redux store
  const userFromRedux = useSelector((state) => state.user.user);
  const isLoggedInFromRedux = useSelector((state) => state.user.isLoggedIn);

  // Local state to store user information from localStorage
  const [user, setUser] = useState(null);

  // Load user data from localStorage when the component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [isLoggedInFromRedux, userFromRedux]);

  // Function to handle logout
  const handleLogout = () => {
    // Clear the user data from localStorage
    localStorage.removeItem("user");

    // Dispatch the logout action to update Redux state
    dispatch(logout());

    // Optionally, clear the user state from local state if needed
    setUser(null);
    toast.success("Đăng xuất thành công");
  };

  return (
    <>
      <div className="px-36">
        <header className="fixed top-0 left-0 right-0 z-50 flex overflow-hidden flex-col items-center pt-3 bg-white shadow-md">
          <div className="flex gap-5 justify-between items-center w-full max-w-[1560px] max-md:max-w-full px-5">
            {/* Logo wrapped with Link component */}
            <Link to="/">
              <img src={logo} alt="Company logo" className="object-contain shrink-0 self-stretch my-auto aspect-[1.68] w-[150px]" />
            </Link>

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

            <div className="flex items-center gap-3 ml-4">
              {user ? (
                // Display dropdown menu when user clicks on their name
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="flex items-center gap-3 px-5 py-2 border border-gray-100 bg-white text-sm font-semibold rounded hover:text-red-400 hover:border-red-400 transition-colors duration-300 cursor-pointer">
                      <div className="text-base font-semibold">{`Hi, ${user.data.fullName}`}</div>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48">
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/settings">Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                // Display Login and Signup buttons if not logged in
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
