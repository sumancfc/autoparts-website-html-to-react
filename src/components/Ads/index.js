import React from "react";

const Ads = () => {
  return (
    <div className='call-to-action-area'>
      <div
        className='call-to-action-content-area bg-img'
        data-bg='img/bg/bg-1.jpg'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <div className='call-to-action-txt'>
                <h2>
                  ALL KINDS OF PARTS THAT YOU <br />
                  NEED CAN FIND HERE
                </h2>
                <a href='shop.html' className='btn btn-brand'>
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='call-to-action-image-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <img src='img/bg/bg-car.png' alt='Car' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
