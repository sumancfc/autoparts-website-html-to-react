import React from "react";

const Newsletter = () => {
  return (
    <div className='newsletter-area-wrapper'>
      <div className='container container-wide'>
        <div
          className='newsletter-area-inner bg-img'
          style={{ backgroundImage: "url(assets/img/bg/newsletter-bg.jpg)" }}
        >
          <div className='row'>
            <div className='col-lg-8 col-xl-5 m-auto'>
              <div className='newsletter-content text-center'>
                <h4>
                  SPECIAL <span>OFFER</span> FOR SUBSCRIPTION
                </h4>
                <h2>GET INSTANT DISCOUNT FOR MEMBERSHIP</h2>
                <p>
                  Subscribe our newsletter and all latest news of our
                  <br />
                  latest product, promotion and offers
                </p>

                <div className='newsletter-form-wrap'>
                  <form action='#' method='post'>
                    <div className='form-content'>
                      <input type='email' placeholder='Enter your email here' />
                      <button className='btn-newsletter'>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
