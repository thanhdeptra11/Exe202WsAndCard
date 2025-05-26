import React from "react";
import Hero from "../../components/Hero";
import HowItWorks from "../../components/HowItWorks";
import Services from "../../components/Services";
import Testimonials from "../../components/Testimonials";
import BlogSlider from "../../components/BlogSlider";

function Home() {
  return (
    <>
      {/* Layout for web or larger screens */}
      <main className="px-32 overflow-visible pb-32 ">
        <div className="flex justify-center">
          <Hero />
        </div>
        {/* blog slider */}
        <div className="flex justify-center">
          <BlogSlider />
        </div>

        <div className="flex justify-center">
          <div>
            <HowItWorks />
          </div>
        </div>
        {/* <Services /> */}
        <div className="flex justify-center">
          <Testimonials />
        </div>
      </main>
    </>
  );
}

export default Home;
