import React from "react";

const Banner = () => {
  return (
    <div className='banner-area-wrapper sm-top'>
      <div className='container container-wide'>
        <div className='row'>
          <div className='col-md-6 col-lg-4'>
            <div className='banner-item'>
              <div className='banner-item__img'>
                <a href='#'>
                  <img src='img/banner/banner-1.jpg' alt='Banner' />
                </a>
              </div>
            </div>
          </div>

          <div className='col-md-6 col-lg-4'>
            <div className='banner-item'>
              <div className='banner-item__img'>
                <a href='#'>
                  <img src='img/banner/banner-2.jpg' alt='Banner' />
                </a>
              </div>
            </div>
          </div>

          <div className='col-md-6 col-lg-4'>
            <div className='banner-item'>
              <div className='banner-item__img'>
                <a href='#'>
                  <img src='img/banner/banner-3.jpg' alt='Banner' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
