import React from "react";
import SlickSlider from "../Slick";
import { Link } from "react-router-dom";
import SliderData from "../../data/Slider/heroSlider.json";

const NextArrow = ({ className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <i className='fa fa-angle-right' />
    </button>
  );
};

const PrevArrow = ({ className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <i className='fa fa-angle-left' />
    </button>
  );
};

const HeroSlider = () => {
  const settings = {
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: true,
    dots: true,
    nextArrow: <NextArrow className='slick-next' />,
    prevArrow: <PrevArrow className='slick-prev' />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className='slider-area-wrapper'>
      <SlickSlider settings={settings} className='slider-content-active'>
        {SliderData.map((item) => (
          <div key={item.id}>
            <div
              className='slider-slide-item bg-img'
              style={{
                backgroundImage: `url(assets/img/${item.bg})`,
              }}
            >
              <div className='container container-wide h-100'>
                <div className='row align-items-center h-100'>
                  <div className='col-xl-7'>
                    <div className='slide-content'>
                      <div className='slide-content-inner'>
                        <h3>{item.subtitle}</h3>
                        <h2>{item.title}</h2>
                        <Link
                          to={`${process.env.PUBLIC_URL + item.btnLink}`}
                          className='btn btn-white'
                        >
                          {item.btnText}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};

export default HeroSlider;
