import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Header from "./components/Header";
import BottomBar from "./components/BottomBar";
import Footer from "./components/Footer.jsx";

import HomeWeb from "./pages/WebsiteVersion/Home.jsx";
import HomeMobile from "./pages/MobileVersion/Home.jsx";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle screen size change
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 640);
  };

  // Handle scroll event to add shadow on scroll
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    // Add resize and scroll event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Initial call to set states based on current conditions
    handleResize();
    handleScroll();

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Conditional rendering for Header and BottomBar */}
      {!isMobile ? (
        <Header isScrolled={isScrolled} />
      ) : (
        <BottomBar />
      )}

      {/* Main content section */}
      <div className={`mt-5 mb-5 p-4 ${isMobile ? 'mobile-layout' : 'web-layout'}`}>
        {isMobile ? (
          <>
            {/* Layout for mobile devices */}
            <HomeMobile />
          </>
        ) : (
          <>
            {/* Layout for web or larger screens */}
            <HomeWeb />
          </>
        )}
      </div>

      {/* Footer should only be rendered if not on mobile */}
      {!isMobile && <Footer />}
    </>
  );
}

export default App;
