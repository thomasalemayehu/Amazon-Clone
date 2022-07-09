import React from "react";

// Import Components
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />

      {/* Carousel */}
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        {/* Images */}
        <div>
          <img loading="lazy" src="/images/Banner/Banner-Image.jpg" alt="" />
        </div>

        <div>
          <img loading="lazy" src="/images/Banner/Banner-Image-1.jpg" alt="" />
        </div>

        <div>
          <img loading="lazy" src="/images/Banner/Banner-Image-2.jpg" alt="" />
        </div>

        <div>
          <img loading="lazy" src="/images/Banner/Banner-Image-3.jpg" alt="" />
        </div>

        <div>
          <img loading="lazy" src="/images/Banner/Banner-Image-4.jpg" alt="" />
        </div>

        <div>
          <img loading="lazy" src="/images/Banner/Banner-Image-5.jpg" alt="" />
        </div>

        <div>
          <img loading="lazy" src="/images/Banner/Banner-Image-6.jpg" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
