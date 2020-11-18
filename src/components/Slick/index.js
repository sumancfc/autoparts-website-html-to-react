import React from "react";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";

const SlickSlider = ({ children, settings, className }) => {
  return (
    <Slick {...settings} className={className}>
      {children}
    </Slick>
  );
};

export default SlickSlider;
