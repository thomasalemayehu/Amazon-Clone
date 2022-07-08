import React from "react";

// Import Components
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full  h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />

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
          {/* TODO:Make Local Image */}
          <img loading="lazy" src="https://links.papareact.com/gi1" alt="" />
        </div>
        <div>
          {/* TODO:Make Local Image */}
          <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
        </div>
        <div>
          {/* TODO:Make Local Image */}
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
        </div>

        {/* TODO:Add More Images */}
        {/* <div></div> */}
      </Carousel>
    </div>
  );
}

export default Banner;
