import { useState, useEffect } from "react";

import Header from "./components/Header";
import BottomBar from "./components/BottomBar";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";

import Advanced from "./examples/Advanced.jsx";
import Simple from "./examples/Simple.jsx";

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
        <div className="px-36">
          <Header isScrolled={isScrolled} />
        </div>
      ) : (
        <BottomBar />
      )}

      {/* Main content section */}
      <div className={`mt-5 p-4 ${isMobile ? 'mobile-layout' : 'web-layout'}`}>
        {isMobile ? (
          <>
            {/* Layout for mobile devices */}
            <p>Mobile Layout</p>
          </>
        ) : (
          <>
            {/* Layout for web or larger screens */}
            <main className="px-32 overflow-visible">
              <div className="flex justify-center">
                <Hero />
              </div>
              <InfoSection />
              <div>
                <Advanced />
              </div>
              <HowItWorks />
              <Services />
              <Testimonials />
              <Newsletter />
            </main>
          </>
        )}
        {/* Common layout for both web and mobile */}
        <p>Common Layout</p>
      </div>
    </>
  );
}

export default App;
