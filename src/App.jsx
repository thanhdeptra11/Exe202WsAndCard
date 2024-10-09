import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import BottomBar from "./components/BottomBar";
import Footer from "./components/Footer";
// Layout for mobile devices
import HomeMobile from "./pages/MobileVersion/Home";
// Layout for web or larger screens
import HomeWeb from "./pages/WebsiteVersion/Home";
import Blog from "./pages/WebsiteVersion/Blog";
import Menu from "./pages/WebsiteVersion/Menu";
import Favorites from "./pages/WebsiteVersion/Favorites";
import Contact from "./pages/WebsiteVersion/Contact";
import Login from "./pages/WebsiteVersion/Login";
import Register from "./pages/WebsiteVersion/Register";
import ProductDetail from "./pages/WebsiteVersion/ProductDetail";
import ForgetPassword from "./pages/WebsiteVersion/ForgetPassword";
import SheetButton from "./components/sheetButton/sheetButton";
// Import the Sheet component
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import QRPage from "./pages/WebsiteVersion/QRPage";
import BlogDetail from "./pages/WebsiteVersion/BlogDetail";
// Import the background image from the assets folder
import backgroundImage from "./assets/beams.jpg";

import backToTopSVG from "./assets/arrow-up-svgrepo-com-hihi.svg";
import FavoriteSideBar from "./pages/WebsiteVersion/FavoriteSideBar";
import { DialogTitle } from "@radix-ui/react-dialog";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const location = useLocation();

  // Handle screen size change
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 640);
  };

  // Handle scroll event to add shadow on scroll and show scroll button
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
    setShowScrollButton(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleResize();
    handleScroll();
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Check if the current path is /login or /register
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {/* Conditional rendering for Header and BottomBar */}
      {!isMobile && !isAuthPage && <Header isScrolled={isScrolled} />}
      {!isAuthPage && isMobile && <BottomBar />}

      {/* Main content section with background image */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh", // Ensures the background covers the full height of the viewport
        }}
        className={`mb-5  bg-gray-50 ${isMobile ? "mobile-layout" : "web-layout"}`}
      >
        {isMobile ? (
          <>
            {/* Layout for mobile devices */}
            <HomeMobile />
          </>
        ) : (
          <>
            {/* Route Layout for web or larger screens */}
            <Toaster />
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<HomeWeb />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/detail/:id" element={<ProductDetail />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/contact" element={<Contact />} />
              {/* Authentication routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgetpassword" element={<ForgetPassword />} />
              <Route path="/qr" element={<QRPage />} />
            </Routes>
          </>
        )}
      </div>

      {/* Footer should only be rendered if not on mobile and not on login/register pages */}
      {!isMobile && !isAuthPage && <Footer />}

      {/* Floating Button to Open Sheet */}
      <div className="fixed top-1/2 right-5 transform -translate-y-1/2">
        <Sheet>
          <SheetTrigger asChild>
            <SheetButton />
          </SheetTrigger>
          <SheetContent>
            <div className=" ">
              <DialogTitle >Yêu Thích</DialogTitle>
              <SheetDescription>Danh sách các món ăn mà bạn đã thêm vào mục yêu thích.</SheetDescription>
            </div>
            <FavoriteSideBar />
          </SheetContent>
        </Sheet>
      </div>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button onClick={scrollToTop} className="fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-4 rounded-full shadow-2xl hover:bg-blue-700 transition duration-300">
          <img
            src={backToTopSVG}
            alt="tinder"
            style={{
              width: "1.5rem",
              height: "1.5rem",
              //ICON COLOR :
              textColor: "#ffffff",
            }}
          />
        </button>
      )}
    </>
  );
}

export default App;
