import React from "react";
import Hero from "../../components/Hero.jsx";
import InfoSection from "../../components/InfoSection.jsx";
import HowItWorks from "../../components/HowItWorks.jsx";
import Services from "../../components/Services.jsx";
import Testimonials from "../../components/Testimonials.jsx";

function Home() {
  return (
    <>
      {/* Layout for web or larger screens */}
      <main className="px-32 overflow-visible">
        <div className="flex justify-center">
          <Hero />
        </div>
        <div className="flex justify-center">
          <InfoSection />
        </div>
        <div className="flex justify-center">
          <div>
            <HowItWorks />
          </div>
        </div>
        <Services />
        <div className="flex justify-center">
          <Testimonials />
        </div>
      </main>
    </>
  );
}

export default Home;