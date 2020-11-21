import React from "react";
import Layout from "../layouts/Layout";

const About = () => {
  return (
    <Layout>
      <div className='page-content-wrapper sm-top'>
        <div className='about-page-content'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-6 order-1 order-md-0'>
                <div className='about-content'>
                  <h2 className='h3 mb-sm-20'>About Lukas</h2>
                  <p>
                    This is a list of automotive parts mostly for vehicles using
                    internal combustion engines which are manufactured
                    components of automobiles.
                  </p>
                  <p>
                    This category is for components and parts that make up
                    automobile (car) bodies including accessories.
                  </p>
                  <p>
                    On motorbikes their main function is to shield the rider
                    from wind, though not as completely as in a car, whereas on
                    sports and racing motorcycles the main function is reducing
                    drag when the rider
                  </p>
                </div>
              </div>

              <div className='col-lg-6 order-0'>
                <div className='about-thumb mb-sm-30'>
                  <img src='assets/img/banner/a-1.jpg' alt='About' />
                </div>
              </div>
            </div>

            <div className='row align-items-center sm-top'>
              <div className='col-lg-6'>
                <div className='about-thumb mb-sm-30'>
                  <img src='assets/img/banner/a-2.jpg' alt='About' />
                </div>
              </div>

              <div className='col-lg-6'>
                <div className='about-content'>
                  <h2 className='h3'>Our mission</h2>
                  <p>
                    This is a list of automotive parts mostly for vehicles using
                    internal combustion engines which are manufactured
                    components of automobiles.
                  </p>
                  <p>
                    This category is for components and parts that make up
                    automobile (car) bodies including accessories.
                  </p>
                  <p>
                    On motorbikes their main function is to shield the rider
                    from wind, though not as completely as in a car, whereas on
                    sports and racing motorcycles the main function is reducing
                    drag when the rider
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='call-to-action-area sm-top'>
        <div
          className='call-to-action-content-area bg-img'
          data-bg='assets/img/bg/bg-1.jpg'
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
                <img src='assets/img/bg/bg-car.png' alt='Car' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='newsletter-area-wrapper'>
        <div className='container container-wide'>
          <div
            className='newsletter-area-inner bg-img'
            data-bg='assets/img/bg/newsletter-bg.jpg'
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
                        <input
                          type='email'
                          placeholder='Enter your email here'
                        />
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

      <div className='brand-logo-area sm-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='brand-logo-content'>
                <div className='brand-logo-item'>
                  <a href='#'>
                    <img src='assets/img/brand-logo/brand-1.png' alt='Logo' />
                  </a>
                </div>

                <div className='brand-logo-item'>
                  <a href='#'>
                    <img src='assets/img/brand-logo/brand-2.png' alt='Logo' />
                  </a>
                </div>

                <div className='brand-logo-item'>
                  <a href='#'>
                    <img src='assets/img/brand-logo/brand-3.png' alt='Logo' />
                  </a>
                </div>

                <div className='brand-logo-item'>
                  <a href='#'>
                    <img src='assets/img/brand-logo/brand-4.png' alt='Logo' />
                  </a>
                </div>

                <div className='brand-logo-item'>
                  <a href='#'>
                    <img src='assets/img/brand-logo/brand-5.png' alt='Logo' />
                  </a>
                </div>

                <div className='brand-logo-item'>
                  <a href='#'>
                    <img src='assets/img/brand-logo/brand-3.png' alt='Logo' />
                  </a>
                </div>

                <div className='brand-logo-item'>
                  <a href='#'>
                    <img src='assets/img/brand-logo/brand-1.png' alt='Logo' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className='need-help-area bg-img sm-top'
        data-bg='assets/img/bg/bg-2.jpg'
      >
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-sm-7 text-center text-sm-left'>
              <div className='need-help-content mb-sm-20'>
                <h3>Need Help ?</h3>
                <p>Call our support 24/7 at 01234-567-890</p>
              </div>
            </div>

            <div className='col-sm-5 text-center text-sm-right'>
              <a href='contact.html' className='btn btn-black'>
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
