import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation, Outlet } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast"; // Import toast
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
// Import các trang quản trị
import AdminDashboard from "./pages/WebsiteVersion/admin/AdminDashboard";
import AdminShop from "./pages/WebsiteVersion/admin/AdminShop";
import AdminUser from "./pages/WebsiteVersion/admin/AdminUser";
import AdminLayout from "./pages/WebsiteVersion/admin/AdminLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DrinkMenu from "./components/DrinkMenu";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [userRole, setUserRole] = useState(null);
  // const location = useLocation();

  // Lấy thông tin vai trò người dùng từ localStorage khi component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserRole(user.data.role);
    }
  }, []);

  // Xử lý thay đổi kích thước màn hình
  const handleResize = () => setIsMobile(window.innerWidth <= 640);

  // Xử lý sự kiện cuộn trang để thêm hiệu ứng và hiển thị nút cuộn lên
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
    setShowScrollButton(window.scrollY > 300);
  };

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

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

  // Kiểm tra xem đường dẫn hiện tại có phải là /login hoặc /register không
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";
  const isAdminPage = location.pathname.startsWith("/admin");

  // Nếu là trang quản trị và người dùng là admin, render AdminLayout
  if (isAdminPage && userRole === "admin") {
    return <AdminLayout />;
  }

  // Component PrivateRoute để bảo vệ các route cần đăng nhập
  const PrivateRoute = ({ element: Component }) => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      return <Component />;
    } else {
      // Hiển thị thông báo toast
      toast.error("Bạn cần đăng nhập");
      return <Navigate to="/login" />;
    }
  };

  return (
    <>
      {/* Hiển thị Header và BottomBar theo điều kiện */}
      {!isMobile && !isAuthPage && <Header isScrolled={isScrolled} />}
      {!isAuthPage && isMobile && <BottomBar />}
      {/* Phần nội dung chính với hình nền */}
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
            <Toaster /> {/* Đảm bảo Toaster được render */}
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<HomeWeb />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/detail/:name" element={<ProductDetail />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/qr" element={<QRPage />} />
              <Route path="/success-payment" element={<SuccessPayment />} />
              {/* Các route yêu cầu đăng nhập */}
              <Route path="/drinks" element={<PrivateRoute element={DrinkMenu} />} />
              <Route path="/menu" element={<PrivateRoute element={Menu} />} />
              <Route path="/favorites" element={<PrivateRoute element={Favorites} />} />
              {/* Các route xác thực */}

              <Route path="/fail-payment" element={<FailurePayment />} />

              {/* Authentication routes */}

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgetpassword" element={<ForgetPassword />} />
              {/* Route quản trị */}
              <Route element={<AdminLayout />}>
                <Route path="/admin/shop" element={<AdminShop />} />
                <Route path="/admin/users" element={<AdminUser />} />
              </Route>
              {/* Route bắt tất cả để hiển thị trang 404 */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </>
        )}
      </div>
      {/* Footer chỉ hiển thị khi không phải trên mobile và không ở trang login/register */}
      {!isMobile && !isAuthPage && <Footer />}
      {/* Nút nổi để mở Sheet */}
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
      {/* Nút cuộn lên đầu trang */}
      {showScrollButton && (
        <button onClick={scrollToTop} className="fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-4 rounded-full shadow-2xl hover:bg-blue-700 transition duration-300">
          <img src={backToTopSVG} alt="Back to Top" style={{ width: "1.5rem", height: "1.5rem" }} />
        </button>
      )}
    </>
  );
}

export default App;
