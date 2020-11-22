import React from "react";

const CallToAction = () => {
  return (
    <div className='call-to-action-area sm-top'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 col-lg-4'>
            <div className='call-to-action-item mt-0'>
              <div className='call-to-action-item__icon'>
                <img src='img/icons/icon-1.png' alt='fast delivery' />
              </div>
              <div className='call-to-action-item__info'>
                <h3>Free Home Delivery</h3>
                <p>Provide free home delivery for all product over $100</p>
              </div>
            </div>
          </div>

          <div className='col-md-4 col-lg-4'>
            <div className='call-to-action-item'>
              <div className='call-to-action-item__icon'>
                <img src='img/icons/icon-2.png' alt='quality' />
              </div>
              <div className='call-to-action-item__info'>
                <h3>Quality Products</h3>
                <p>We ensure our product quality all times</p>
              </div>
            </div>
          </div>

          <div className='col-md-4 col-lg-4'>
            <div className='call-to-action-item'>
              <div className='call-to-action-item__icon'>
                <img src='img/icons/icon-3.png' alt='return' />
              </div>
              <div className='call-to-action-item__info'>
                <h3>Online Support</h3>
                <p>To satisfy our customer we try to give support online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
