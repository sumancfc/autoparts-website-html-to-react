import React from "react";

const Deals = () => {
  return (
    <div className='flash-deals-area bg-img' data-bg='img/bg/deal-bg.jpg'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-11 m-auto'>
            <div className='row align-items-center'>
              <div className='col-md-5 col-lg-6'>
                <div className='flash-deals-thumb text-center text-md-left'>
                  <img src='img/extra/wheels.png' alt='Deals' />
                </div>
              </div>

              <div className='col-md-7 col-lg-6 text-center'>
                <div className='flash-deals-content'>
                  <h2>FLASH DEALS</h2>
                  <h3>HURRY UP AND GET 25% DISCOUNT</h3>
                  <a href='cart.html' className='btn btn-brand'>
                    Add to cart
                  </a>

                  <div className='deals-countdown-area'>
                    <div className='ht-countdown' data-date='9/20/2019'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
