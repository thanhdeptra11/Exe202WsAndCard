// export default App;
import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import BottomBar from "./components/BottomBar";
import Footer from "./components/Footer";
// layout for mobile devices
import HomeMobile from "./pages/MobileVersion/Home";
// layout for web or larger screens
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
import BlogDetail from "./pages/WebsiteVersion/BlogDetail";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Get the current location to determine if we are on login or register pages
  const location = useLocation();

  // Handle screen size change
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 640);
  };

  // Handle scroll event to add shadow on scroll
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
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

      {/* Main content section */}
      <div className={`mb-5 p-4 bg-gray-50 ${isMobile ? "mobile-layout" : "web-layout"}`}>
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
              {/* auth */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgetpassword" element={<ForgetPassword />} />
            </Routes>
          </>
        )}
      </div>

      {/* Footer should only be rendered if not on mobile and not on login/register pages */}
      {!isMobile && !isAuthPage && <Footer />}

      {/* Floating Button to Open Sheet */}
      {/* <button className="px-6 py-2 text-white bg-red-400 rounded-lg hover:bg-red-600 transition-colors">Open</button> */}

      <div className="fixed top-1/2 right-5 transform -translate-y-1/2">
        <Sheet>
          <SheetTrigger asChild>
            <SheetButton />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

export default App;
