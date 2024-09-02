import React from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    delay: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,
  };
  return (
    <Slider {...settings} className="rounded-lg">
      <div className="h-[30vh] md:h-[60vh] relative flex-1">
        <Image fill alt="img" src={"/slider/slider1.webp"} />
      </div>
      <div className="h-[30vh] md:h-[60vh]  relative">
        <Image fill alt="img" src={"/slider/slider2.webp"} />
      </div>
    </Slider>
  );
}
