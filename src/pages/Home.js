import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import HeroSlider from "../components/Slider";
import Layout from "../layouts/Layout";

const Home = () => {
  return (
    <Layout>
      <HeroSlider />

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

      <div className='best-seller-products-area sm-top'>
        <div className='container container-wide'>
          <div className='row'>
            <div className='col-lg-5 m-auto text-center'>
              <div className='section-title'>
                <h2 className='h3'>Best Seller</h2>
                <p>
                  All best seller product are now available for you and your can
                  buy this product from here any time any where so sop now
                </p>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-12'>
              <div className='product-wrapper'>
                <div className='product-carousel'>
                  <div className='product-item'>
                    <div className='product-item__thumb'>
                      <a href='single-product.html'>
                        <img
                          className='thumb-primary'
                          src='img/product/product-1.png'
                          alt='Product'
                        />
                        <img
                          className='thumb-secondary'
                          src='img/product/product-2.png'
                          alt='Product'
                        />
                      </a>
                    </div>

                    <div className='product-item__content'>
                      <div className='ratting'>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star-half'></i>
                        </span>
                      </div>
                      <h4 className='title'>
                        <a href='single-product.html'>Auto Clutch & Brake</a>
                      </h4>
                      <span className='price'>
                        <strong>Price:</strong> $165.00
                      </span>
                    </div>

                    <div className='product-item__action'>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-shopping-cart'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-refresh'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-heart-o'></i>
                      </button>
                    </div>

                    <div className='product-item__sale'>
                      <span className='sale-txt'>25%</span>
                    </div>
                  </div>
                  {/* <!-- End Product Item -->

                <!-- Start Product Item --> */}
                  <div className='product-item'>
                    <div className='product-item__thumb'>
                      <a href='single-product.html'>
                        <img
                          className='thumb-primary'
                          src='img/product/product-3.png'
                          alt='Product'
                        />
                        <img
                          className='thumb-secondary'
                          src='img/product/product-4.png'
                          alt='Product'
                        />
                      </a>
                    </div>

                    <div className='product-item__content'>
                      <div className='ratting'>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star-half'></i>
                        </span>
                        <span>
                          <i className='ion-android-star-half'></i>
                        </span>
                      </div>
                      <h4 className='title'>
                        <a href='single-product.html'>Leather Steering Wheel</a>
                      </h4>
                      <span className='price'>
                        <strong>Price:</strong> $615.00
                      </span>
                    </div>

                    <div className='product-item__action'>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-shopping-cart'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-refresh'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-heart-o'></i>
                      </button>
                    </div>
                  </div>
                  {/* <!-- End Product Item -->

                <!-- Start Product Item --> */}
                  <div className='product-item'>
                    <div className='product-item__thumb'>
                      <a href='single-product.html'>
                        <img
                          className='thumb-primary'
                          src='img/product/product-4.png'
                          alt='Product'
                        />
                        <img
                          className='thumb-secondary'
                          src='img/product/product-5.png'
                          alt='Product'
                        />
                      </a>
                    </div>

                    <div className='product-item__content'>
                      <div className='ratting'>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                      </div>
                      <h4 className='title'>
                        <a href='single-product.html'>Hanging 4K Camera</a>
                      </h4>
                      <span className='price'>
                        <strong>Price:</strong> $65.00
                      </span>
                    </div>

                    <div className='product-item__action'>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-shopping-cart'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-refresh'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-heart-o'></i>
                      </button>
                    </div>

                    <div className='product-item__sale'>
                      <span className='sale-txt'>35%</span>
                    </div>
                  </div>
                  {/* <!-- End Product Item -->

                <!-- Start Product Item --> */}
                  <div className='product-item'>
                    <div className='product-item__thumb'>
                      <a href='single-product.html'>
                        <img
                          className='thumb-primary'
                          src='img/product/product-2.png'
                          alt='Product'
                        />
                        <img
                          className='thumb-secondary'
                          src='img/product/product-1.png'
                          alt='Product'
                        />
                      </a>
                    </div>

                    <div className='product-item__content'>
                      <div className='ratting'>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star-half'></i>
                        </span>
                      </div>
                      <h4 className='title'>
                        <a href='single-product.html'>17 inch Rims 8 Lug</a>
                      </h4>
                      <span className='price'>
                        <strong>Price:</strong> $165.00
                      </span>
                    </div>

                    <div className='product-item__action'>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-shopping-cart'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-refresh'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-heart-o'></i>
                      </button>
                    </div>
                  </div>
                  {/* <!-- End Product Item -->

                <!-- Start Product Item --> */}
                  <div className='product-item'>
                    <div className='product-item__thumb'>
                      <a href='single-product.html'>
                        <img
                          className='thumb-primary'
                          src='img/product/product-5.png'
                          alt='Product'
                        />
                        <img
                          className='thumb-secondary'
                          src='img/product/product-4.png'
                          alt='Product'
                        />
                      </a>
                    </div>

                    <div className='product-item__content'>
                      <div className='ratting'>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star-half'></i>
                        </span>
                      </div>
                      <h4 className='title'>
                        <a href='single-product.html'>Locking Hub Diagram</a>
                      </h4>
                      <span className='price'>
                        <strong>Price:</strong> $165.00
                      </span>
                    </div>

                    <div className='product-item__action'>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-shopping-cart'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-refresh'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-heart-o'></i>
                      </button>
                    </div>

                    <div className='product-item__sale'>
                      <span className='sale-txt'>21%</span>
                    </div>
                  </div>
                  {/* <!-- End Product Item --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      <div className='promotion-code-area-wrapper sm-top'>
        <div className='container container-wide'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='promotion-code-banner-item mb-sm-30'>
                <img src='img/banner/banner-4.jpg' alt='Banner' />
              </div>
            </div>

            <div className='col-md-6'>
              <div className='promotion-code-banner-item'>
                <img src='img/banner/banner-5.jpg' alt='Banner' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='products-area-wrapper sm-top'>
        <div className='container container-wide'>
          <div className='row'>
            <div className='col-lg-5 m-auto text-center'>
              <div className='section-title'>
                <h2 className='h3'>All Of Our Products</h2>
                <p>
                  All best seller product are now available for you and your can
                  buy this product from here any time any where so sop now
                </p>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-12'>
              <div className='product-wrapper columns-5'>
                {/* <!-- Start Product Item --> */}
                <div className='col'>
                  <div className='product-item'>
                    <div className='product-item__thumb'>
                      <a href='single-product.html'>
                        <img
                          className='thumb-primary'
                          src='img/product/product-6.png'
                          alt='Product'
                        />
                        <img
                          className='thumb-secondary'
                          src='img/product/product-7.png'
                          alt='Product'
                        />
                      </a>
                    </div>

                    <div className='product-item__content'>
                      <div className='ratting'>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star-half'></i>
                        </span>
                      </div>
                      <h4 className='title'>
                        <a href='single-product.html'>Auto Clutch & Brake</a>
                      </h4>
                      <span className='price'>
                        <strong>Price:</strong> $165.00
                      </span>
                    </div>

                    <div className='product-item__action'>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-shopping-cart'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-refresh'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-heart-o'></i>
                      </button>
                    </div>

                    <div className='product-item__sale'>
                      <span className='sale-txt'>25%</span>
                    </div>
                  </div>
                </div>
                {/* <!-- End Product Item -->

              <!-- Start Product Item --> */}
                <div className='col'>
                  <div className='product-item'>
                    <div className='product-item__thumb'>
                      <a href='single-product.html'>
                        <img
                          className='thumb-primary'
                          src='img/product/product-8.png'
                          alt='Product'
                        />
                        <img
                          className='thumb-secondary'
                          src='img/product/product-9.png'
                          alt='Product'
                        />
                      </a>
                    </div>

                    <div className='product-item__content'>
                      <div className='ratting'>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star-half'></i>
                        </span>
                        <span>
                          <i className='ion-android-star-half'></i>
                        </span>
                      </div>
                      <h4 className='title'>
                        <a href='single-product.html'>Leather Steering Wheel</a>
                      </h4>
                      <span className='price'>
                        <strong>Price:</strong> $615.00
                      </span>
                    </div>

                    <div className='product-item__action'>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-shopping-cart'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-refresh'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-heart-o'></i>
                      </button>
                    </div>
                  </div>
                </div>
                {/* <!-- End Product Item -->

              <!-- Start Product Item --> */}
                <div className='col'>
                  <div className='product-item'>
                    <div className='product-item__thumb'>
                      <a href='single-product.html'>
                        <img
                          className='thumb-primary'
                          src='img/product/product-7.png'
                          alt='Product'
                        />
                        <img
                          className='thumb-secondary'
                          src='img/product/product-14.png'
                          alt='Product'
                        />
                      </a>
                    </div>

                    <div className='product-item__content'>
                      <div className='ratting'>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                      </div>
                      <h4 className='title'>
                        <a href='single-product.html'>Hanging 4K Camera</a>
                      </h4>
                      <span className='price'>
                        <strong>Price:</strong> $65.00
                      </span>
                    </div>

                    <div className='product-item__action'>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-shopping-cart'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-refresh'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-heart-o'></i>
                      </button>
                    </div>

                    <div className='product-item__sale'>
                      <span className='sale-txt'>35%</span>
                    </div>
                  </div>
                </div>
                {/* <!-- End Product Item -->

              <!-- Start Product Item --> */}
                <div className='col'>
                  <div className='product-item'>
                    <div className='product-item__thumb'>
                      <a href='single-product.html'>
                        <img
                          className='thumb-primary'
                          src='img/product/product-10.png'
                          alt='Product'
                        />
                        <img
                          className='thumb-secondary'
                          src='img/product/product-5.png'
                          alt='Product'
                        />
                      </a>
                    </div>

                    <div className='product-item__content'>
                      <div className='ratting'>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star-half'></i>
                        </span>
                      </div>
                      <h4 className='title'>
                        <a href='single-product.html'>17 inch Rims 8 Lug</a>
                      </h4>
                      <span className='price'>
                        <strong>Price:</strong> $165.00
                      </span>
                    </div>

                    <div className='product-item__action'>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-shopping-cart'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-refresh'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-heart-o'></i>
                      </button>
                    </div>
                  </div>
                </div>
                {/* <!-- End Product Item -->

              <!-- Start Product Item --> */}
                <div className='col'>
                  <div className='product-item'>
                    <div className='product-item__thumb'>
                      <a href='single-product.html'>
                        <img
                          className='thumb-primary'
                          src='img/product/product-11.png'
                          alt='Product'
                        />
                        <img
                          className='thumb-secondary'
                          src='img/product/product-4.png'
                          alt='Product'
                        />
                      </a>
                    </div>

                    <div className='product-item__content'>
                      <div className='ratting'>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star-half'></i>
                        </span>
                      </div>
                      <h4 className='title'>
                        <a href='single-product.html'>Locking Hub Diagram</a>
                      </h4>
                      <span className='price'>
                        <strong>Price:</strong> $165.00
                      </span>
                    </div>

                    <div className='product-item__action'>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-shopping-cart'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-refresh'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-heart-o'></i>
                      </button>
                    </div>

                    <div className='product-item__sale'>
                      <span className='sale-txt'>21%</span>
                    </div>
                  </div>
                </div>
                {/* <!-- End Product Item -->

              <!-- Start Product Item --> */}
                <div className='col'>
                  <div className='product-item'>
                    <div className='product-item__thumb'>
                      <a href='single-product.html'>
                        <img
                          className='thumb-primary'
                          src='img/product/product-13.png'
                          alt='Product'
                        />
                        <img
                          className='thumb-secondary'
                          src='img/product/product-12.png'
                          alt='Product'
                        />
                      </a>
                    </div>

                    <div className='product-item__content'>
                      <div className='ratting'>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                      </div>
                      <h4 className='title'>
                        <a href='single-product.html'>Hanging 4K Camera</a>
                      </h4>
                      <span className='price'>
                        <strong>Price:</strong> $65.00
                      </span>
                    </div>

                    <div className='product-item__action'>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-shopping-cart'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-refresh'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-heart-o'></i>
                      </button>
                    </div>

                    <div className='product-item__sale'>
                      <span className='sale-txt'>35%</span>
                    </div>
                  </div>
                </div>
                {/* <!-- End Product Item -->

              <!-- Start Product Item --> */}
                <div className='col'>
                  <div className='product-item'>
                    <div className='product-item__thumb'>
                      <a href='single-product.html'>
                        <img
                          className='thumb-primary'
                          src='img/product/product-14.png'
                          alt='Product'
                        />
                        <img
                          className='thumb-secondary'
                          src='img/product/product-8.png'
                          alt='Product'
                        />
                      </a>
                    </div>

                    <div className='product-item__content'>
                      <div className='ratting'>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star-half'></i>
                        </span>
                      </div>
                      <h4 className='title'>
                        <a href='single-product.html'>17 inch Rims 8 Lug</a>
                      </h4>
                      <span className='price'>
                        <strong>Price:</strong> $165.00
                      </span>
                    </div>

                    <div className='product-item__action'>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-shopping-cart'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-refresh'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-heart-o'></i>
                      </button>
                    </div>
                  </div>
                </div>
                {/* <!-- End Product Item -->

              <!-- Start Product Item --> */}
                <div className='col'>
                  <div className='product-item'>
                    <div className='product-item__thumb'>
                      <a href='single-product.html'>
                        <img
                          className='thumb-primary'
                          src='img/product/product-15.png'
                          alt='Product'
                        />
                        <img
                          className='thumb-secondary'
                          src='img/product/product-4.png'
                          alt='Product'
                        />
                      </a>
                    </div>

                    <div className='product-item__content'>
                      <div className='ratting'>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star-half'></i>
                        </span>
                      </div>
                      <h4 className='title'>
                        <a href='single-product.html'>Locking Hub Diagram</a>
                      </h4>
                      <span className='price'>
                        <strong>Price:</strong> $165.00
                      </span>
                    </div>

                    <div className='product-item__action'>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-shopping-cart'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-refresh'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-heart-o'></i>
                      </button>
                    </div>

                    <div className='product-item__sale'>
                      <span className='sale-txt'>21%</span>
                    </div>
                  </div>
                </div>
                {/* <!-- End Product Item -->

              <!-- Start Product Item --> */}
                <div className='col'>
                  <div className='product-item'>
                    <div className='product-item__thumb'>
                      <a href='single-product.html'>
                        <img
                          className='thumb-primary'
                          src='img/product/product-12.png'
                          alt='Product'
                        />
                        <img
                          className='thumb-secondary'
                          src='img/product/product-2.png'
                          alt='Product'
                        />
                      </a>
                    </div>

                    <div className='product-item__content'>
                      <div className='ratting'>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star-half'></i>
                        </span>
                      </div>
                      <h4 className='title'>
                        <a href='single-product.html'>Auto Clutch & Brake</a>
                      </h4>
                      <span className='price'>
                        <strong>Price:</strong> $165.00
                      </span>
                    </div>

                    <div className='product-item__action'>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-shopping-cart'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-refresh'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-heart-o'></i>
                      </button>
                    </div>

                    <div className='product-item__sale'>
                      <span className='sale-txt'>25%</span>
                    </div>
                  </div>
                </div>
                {/* <!-- End Product Item -->

              <!-- Start Product Item --> */}
                <div className='col'>
                  <div className='product-item'>
                    <div className='product-item__thumb'>
                      <a href='single-product.html'>
                        <img
                          className='thumb-primary'
                          src='img/product/product-9.png'
                          alt='Product'
                        />
                        <img
                          className='thumb-secondary'
                          src='img/product/product-4.png'
                          alt='Product'
                        />
                      </a>
                    </div>

                    <div className='product-item__content'>
                      <div className='ratting'>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star'></i>
                        </span>
                        <span>
                          <i className='ion-android-star-half'></i>
                        </span>
                        <span>
                          <i className='ion-android-star-half'></i>
                        </span>
                      </div>
                      <h4 className='title'>
                        <a href='single-product.html'>Leather Steering Wheel</a>
                      </h4>
                      <span className='price'>
                        <strong>Price:</strong> $615.00
                      </span>
                    </div>

                    <div className='product-item__action'>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-shopping-cart'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-refresh'></i>
                      </button>
                      <button className='btn-add-to-cart'>
                        <i className='fa fa-heart-o'></i>
                      </button>
                    </div>
                  </div>
                </div>
                {/* <!-- End Product Item --> */}
              </div>
            </div>
          </div>
        </div>
      </div>

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

      <div className='newsletter-area-wrapper'>
        <div className='container container-wide'>
          <div
            className='newsletter-area-inner bg-img'
            style={{ backgroundImage: "url(img/bg/newsletter-bg.jpg)" }}
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
    </Layout>
  );
};

export default Home;
