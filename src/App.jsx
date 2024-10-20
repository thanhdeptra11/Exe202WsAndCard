import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import BottomBar from "./components/BottomBar";
import Footer from "./components/Footer";
import HomeMobile from "./pages/MobileVersion/Home";
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
import NotFoundPage from "./pages/WebsiteVersion/NotFoundPage";
import { Sheet, SheetContent, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import QRPage from "./pages/WebsiteVersion/QRPage";
import SuccessPayment from "./components/SuccessPayment";
import FailurePayment from "./components/FailurePayment";
import BlogDetail from "./pages/WebsiteVersion/BlogDetail";
import backgroundImage from "./assets/beams.jpg";
import backToTopSVG from "./assets/arrow-up-svgrepo-com-hihi.svg";
import FavoriteSideBar from "./pages/WebsiteVersion/FavoriteSideBar";
import { DialogTitle } from "@radix-ui/react-dialog";

//import admin pages
import AdminDashboard from "./pages/WebsiteVersion/admin/AdminDashboard";
import AdminShop from "./pages/WebsiteVersion/admin/AdminShop";
import AdminUser from "./pages/WebsiteVersion/admin/AdminUser";
import AdminLayout from "./pages/WebsiteVersion/admin/AdminLayout";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const location = useLocation();

  // Fetch user role from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserRole(user.data.role);
    }
  }, []);

  // Handle screen size change
  const handleResize = () => setIsMobile(window.innerWidth <= 640);

  // Handle scroll event to add shadow on scroll and show scroll button
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
    setShowScrollButton(window.scrollY > 300);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

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
  const isAdminPage = location.pathname.startsWith("/admin");

  // Render only AdminDashboard for admin pages
  if (isAdminPage && userRole === "admin") {
    return <AdminLayout />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn); // Lấy trạng thái đăng nhập từ Redux

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
          minHeight: "100vh",
        }}
        className={`mb-5 bg-gray-50 ${isMobile ? "mobile-layout" : "web-layout"}`}
      >
        {isMobile ? (
          <HomeMobile />
        ) : (
          <>
            <Toaster />
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<HomeWeb />} />
              <Route path="/blog" element={<Blog />} />
              {/* Protected Route */}
              {/* <Route path="/menu" element={isLoggedIn ? <Menu /> : <Navigate to="/login" />} />
              <Route path="/favorites" element={isLoggedIn ? <Favorites /> : <Navigate to="/login" />} /> */}
              <Route path="/menu" element={<Menu />} />
              <Route path="/favorites" element={<Favorites />} />

              <Route path="/detail/:id" element={<ProductDetail />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/qr" element={<QRPage />} />
              <Route path="/success-payment" element={<SuccessPayment />} />
              <Route path="/fail-payment" element={<FailurePayment />} />

              {/* Authentication routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgetpassword" element={<ForgetPassword />} />
              {/* Admin route */}
              <Route element={<AdminLayout />}>
                <Route path="/admin/shop" element={<AdminShop />} />
                <Route path="/admin/users" element={<AdminUser />} />
              </Route>
              {/* Catch-all route to render the 404 NotFoundPage */}
              <Route path="*" element={<NotFoundPage />} />
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
            <div className="">
              <DialogTitle>Yêu Thích</DialogTitle>
              <SheetDescription>Danh sách các món ăn mà bạn đã thêm vào mục yêu thích.</SheetDescription>
            </div>
            <FavoriteSideBar />
          </SheetContent>
        </Sheet>
      </div>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button onClick={scrollToTop} className="fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-4 rounded-full shadow-2xl hover:bg-blue-700 transition duration-300">
          <img src={backToTopSVG} alt="Back to Top" style={{ width: "1.5rem", height: "1.5rem" }} />
        </button>
      )}
    </>
  );
}

export default App;
