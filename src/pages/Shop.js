import React from "react";
import Layout from "../layouts/Layout";

const Shop = () => {
  return (
    <Layout>
      <div className='page-content-wrapper sp-y'>
        <div className='container container-wide'>
          <div className='row'>
            <div className='col-lg-3 order-1 order-lg-0'>
              <div className='sidebar-area'>
                <div className='sidebar-item'>
                  <h4 className='sidebar-title'>Filter By Color</h4>
                  <div className='sidebar-body'>
                    <ul className='sidebar-list'>
                      <li>
                        <a href='#'>
                          Black <span>(2)</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          Blue <span>(3)</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          Green <span>(6)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='sidebar-item'>
                  <h4 className='sidebar-title'>Recent Products</h4>
                  <div className='sidebar-body'>
                    <div className='sidebar-product'>
                      <a href='single-product.html' className='image'>
                        <img
                          src='assets/img/product/product-1.png'
                          alt='product'
                        />
                      </a>
                      <div className='content'>
                        <a href='single-product.html' className='title'>
                          Injected humour
                        </a>
                        <span className='price'>$799.99</span>
                        <div className='ratting'>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star-half-o'></i>
                        </div>
                      </div>
                    </div>

                    <div className='sidebar-product'>
                      <a href='single-product.html' className='image'>
                        <img
                          src='assets/img/product/product-2.png'
                          alt='product'
                        />
                      </a>
                      <div className='content'>
                        <a href='single-product.html' className='title'>
                          classNameical literature
                        </a>
                        <span className='price'>
                          $599.99 <span className='old'>$799.99</span>
                        </span>
                        <div className='ratting'>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star-half-o'></i>
                        </div>
                      </div>
                    </div>

                    <div className='sidebar-product'>
                      <a href='single-product.html' className='image'>
                        <img
                          src='assets/img/product/product-3.png'
                          alt='product'
                        />
                      </a>
                      <div className='content'>
                        <a href='single-product.html' className='title'>
                          classNameical literature
                        </a>
                        <span className='price'>
                          $649.99 <span className='old'>$799.99</span>
                        </span>
                        <div className='ratting'>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star-half-o'></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='sidebar-item'>
                  <h4 className='sidebar-title'>Product categories</h4>
                  <div className='sidebar-body'>
                    <ul className='sidebar-list'>
                      <li>
                        <a href='#'>All Product</a>
                      </li>
                      <li>
                        <a href='#'>Best Seller</a>
                      </li>
                      <li>
                        <a href='#'>Car</a>
                      </li>
                      <li>
                        <a href='#'>Parts</a>
                      </li>
                      <li>
                        <a href='#'>Shop</a>
                      </li>
                      <li>
                        <a href='#'>Tayer</a>
                      </li>
                      <li>
                        <a href='#'>Uncategorized</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='sidebar-item'>
                  <h4 className='sidebar-title'>Product tags</h4>
                  <div className='sidebar-body'>
                    <ul className='tags'>
                      <li>
                        <a href='#'>Car</a>
                      </li>
                      <li>
                        <a href='#'>Parts</a>
                      </li>
                      <li>
                        <a href='#'>Shop</a>
                      </li>
                      <li>
                        <a href='#'>Tayer</a>
                      </li>
                      <li>
                        <a href='#'>Seat</a>
                      </li>
                      <li>
                        <a href='#'>Engine</a>
                      </li>
                      <li>
                        <a href='#'>Parts</a>
                      </li>
                      <li>
                        <a href='#'>Fuel</a>
                      </li>
                      <li>
                        <a href='#'>Modern</a>
                      </li>
                      <li>
                        <a href='#'>Brake</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-9 order-0 order-lg-1'>
              <div className='action-bar-inner mb-30'>
                <div className='row align-items-center'>
                  <div className='col-sm-6'>
                    <div className='shop-layout-switcher mb-15 mb-sm-0'>
                      <ul className='layout-switcher nav'>
                        <li data-layout='grid' className='active'>
                          <i className='fa fa-th'></i>
                        </li>
                        <li data-layout='list'>
                          <i className='fa fa-th-list'></i>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className='col-sm-6'>
                    <div className='sort-by-wrapper'>
                      <label for='sort' className='sr-only'>
                        Sort By
                      </label>
                      <select name='sort' id='sort'>
                        <option value='sbp'>Sort By Popularity</option>
                        <option value='sbn'>Sort By Newest</option>
                        <option value='sbt'>Sort By Trending</option>
                        <option value='sbr'>Sort By Rating</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className='product-wrapper product-layout layout-grid'>
                <div className='row mtn-30'>
                  <div className='col-sm-6 col-lg-4'>
                    <div className='product-item'>
                      <div className='product-item__thumb'>
                        <a href='single-product.html'>
                          <img
                            className='thumb-primary'
                            src='assets/img/product/product-6.png'
                            alt='Product'
                          />
                          <img
                            className='thumb-secondary'
                            src='assets/img/product/product-7.png'
                            alt='Product'
                          />
                        </a>

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
                      </div>

                      <div className='product-item__content'>
                        <div className='product-item__info'>
                          <h4 className='title'>
                            <a href='single-product.html'>
                              Auto Clutch & Brake
                            </a>
                          </h4>
                          <span className='price'>
                            <strong>Price:</strong> $165.00
                          </span>
                        </div>

                        <div className='product-item__action'>
                          <button className='btn-add-to-cart'>
                            <i className='ion-bag'></i>
                          </button>
                          <button className='btn-add-to-cart'>
                            <i className='ion-ios-loop-strong'></i>
                          </button>
                          <button className='btn-add-to-cart'>
                            <i className='ion-ios-heart-outline'></i>
                          </button>
                          <button className='btn-add-to-cart'>
                            <i className='ion-eye'></i>
                          </button>
                        </div>

                        <div className='product-item__desc'>
                          <p>
                            Pursue pleasure rationally encounter consequences
                            that are extremely painful. Nor again is there
                            anyone who loves or pursues or desires to obtain
                            pain of itself, because it is pain, but because
                            occasionally circles
                          </p>
                        </div>
                      </div>

                      <div className='product-item__sale'>
                        <span className='sale-txt'>25%</span>
                      </div>
                    </div>
                  </div>

                  <div className='col-sm-6 col-lg-4'>
                    <div className='product-item'>
                      <div className='product-item__thumb'>
                        <a href='single-product.html'>
                          <img
                            className='thumb-primary'
                            src='assets/img/product/product-2.png'
                            alt='Product'
                          />
                          <img
                            className='thumb-secondary'
                            src='assets/img/product/product-3.png'
                            alt='Product'
                          />
                        </a>

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
                      </div>

                      <div className='product-item__content'>
                        <div className='product-item__info'>
                          <h4 className='title'>
                            <a href='single-product.html'>17 INCH RIMS 8 LUG</a>
                          </h4>
                          <span className='price'>
                            <strong>Price:</strong> $235.00
                          </span>
                        </div>

                        <div className='product-item__action'>
                          <button className='btn-add-to-cart'>
                            <i className='ion-bag'></i>
                          </button>
                          <button className='btn-add-to-cart'>
                            <i className='ion-ios-loop-strong'></i>
                          </button>
                          <button className='btn-add-to-cart'>
                            <i className='ion-ios-heart-outline'></i>
                          </button>
                          <button className='btn-add-to-cart'>
                            <i className='ion-eye'></i>
                          </button>
                        </div>

                        <div className='product-item__desc'>
                          <p>
                            Pursue pleasure rationally encounter consequences
                            that are extremely painful. Nor again is there
                            anyone who loves or pursues or desires to obtain
                            pain of itself, because it is pain, but because
                            occasionally circles
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-sm-6 col-lg-4'>
                    <div className='product-item'>
                      <div className='product-item__thumb'>
                        <a href='single-product.html'>
                          <img
                            className='thumb-primary'
                            src='assets/img/product/product-4.png'
                            alt='Product'
                          />
                          <img
                            className='thumb-secondary'
                            src='assets/img/product/product-5.png'
                            alt='Product'
                          />
                        </a>

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
                      </div>

                      <div className='product-item__content'>
                        <div className='product-item__info'>
                          <h4 className='title'>
                            <a href='single-product.html'>AIR INTAKE SYSTEM</a>
                          </h4>
                          <span className='price'>
                            <strong>Price:</strong> $125.00
                          </span>
                        </div>

                        <div className='product-item__action'>
                          <button className='btn-add-to-cart'>
                            <i className='ion-bag'></i>
                          </button>
                          <button className='btn-add-to-cart'>
                            <i className='ion-ios-loop-strong'></i>
                          </button>
                          <button className='btn-add-to-cart'>
                            <i className='ion-ios-heart-outline'></i>
                          </button>
                          <button className='btn-add-to-cart'>
                            <i className='ion-eye'></i>
                          </button>
                        </div>

                        <div className='product-item__desc'>
                          <p>
                            Pursue pleasure rationally encounter consequences
                            that are extremely painful. Nor again is there
                            anyone who loves or pursues or desires to obtain
                            pain of itself, because it is pain, but because
                            occasionally circles
                          </p>
                        </div>
                      </div>

                      <div className='product-item__sale'>
                        <span className='sale-txt'>35%</span>
                      </div>
                    </div>
                  </div>

                  <div className='col-sm-6 col-lg-4'>
                    <div className='product-item'>
                      <div className='product-item__thumb'>
                        <a href='single-product.html'>
                          <img
                            className='thumb-primary'
                            src='assets/img/product/product-11.png'
                            alt='Product'
                          />
                          <img
                            className='thumb-secondary'
                            src='assets/img/product/product-10.png'
                            alt='Product'
                          />
                        </a>

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
                      </div>

                      <div className='product-item__content'>
                        <div className='product-item__info'>
                          <h4 className='title'>
                            <a href='single-product.html'>
                              LEATHER STEERING WHEEL
                            </a>
                          </h4>
                          <span className='price'>
                            <strong>Price:</strong> $25.00
                          </span>
                        </div>

                        <div className='product-item__action'>
                          <button className='btn-add-to-cart'>
                            <i className='ion-bag'></i>
                          </button>
                          <button className='btn-add-to-cart'>
                            <i className='ion-ios-loop-strong'></i>
                          </button>
                          <button className='btn-add-to-cart'>
                            <i className='ion-ios-heart-outline'></i>
                          </button>
                          <button className='btn-add-to-cart'>
                            <i className='ion-eye'></i>
                          </button>
                        </div>

                        <div className='product-item__desc'>
                          <p>
                            Pursue pleasure rationally encounter consequences
                            that are extremely painful. Nor again is there
                            anyone who loves or pursues or desires to obtain
                            pain of itself, because it is pain, but because
                            occasionally circles
                          </p>
                        </div>
                      </div>

                      <div className='product-item__sale'>
                        <span className='sale-txt'>15%</span>
                      </div>
                    </div>
                  </div>

                  <div className='col-sm-6 col-lg-4'>
                    <div className='product-item'>
                      <div className='product-item__thumb'>
                        <a href='single-product.html'>
                          <img
                            className='thumb-primary'
                            src='assets/img/product/product-13.png'
                            alt='Product'
                          />
                          <img
                            className='thumb-secondary'
                            src='assets/img/product/product-7.png'
                            alt='Product'
                          />
                        </a>

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
                      </div>

                      <div className='product-item__content'>
                        <div className='product-item__info'>
                          <h4 className='title'>
                            <a href='single-product.html'>
                              Auto Clutch & Brake
                            </a>
                          </h4>
                          <span className='price'>
                            <strong>Price:</strong> $165.00
                          </span>
                        </div>

                        <div className='product-item__action'>
                          <button className='btn-add-to-cart'>
                            <i className='ion-bag'></i>
                          </button>
                          <button className='btn-add-to-cart'>
                            <i className='ion-ios-loop-strong'></i>
                          </button>
                          <button className='btn-add-to-cart'>
                            <i className='ion-ios-heart-outline'></i>
                          </button>
                          <button className='btn-add-to-cart'>
                            <i className='ion-eye'></i>
                          </button>
                        </div>

                        <div className='product-item__desc'>
                          <p>
                            Pursue pleasure rationally encounter consequences
                            that are extremely painful. Nor again is there
                            anyone who loves or pursues or desires to obtain
                            pain of itself, because it is pain, but because
                            occasionally circles
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-sm-6 col-lg-4'>
                    <div className='product-item'>
                      <div className='product-item__thumb'>
                        <a href='single-product.html'>
                          <img
                            className='thumb-primary'
                            src='assets/img/product/product-3.png'
                            alt='Product'
                          />
                          <img
                            className='thumb-secondary'
                            src='assets/img/product/product-2.png'
                            alt='Product'
                          />
                        </a>

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
                      </div>

                      <div className='product-item__content'>
                        <div className='product-item__info'>
                          <h4 className='title'>
                            <a href='single-product.html'>17 INCH RIMS 8 LUG</a>
                          </h4>
                          <span className='price'>
                            <strong>Price:</strong> $235.00
                          </span>
                        </div>

                        <div className='product-item__action'>
                          <button className='btn-add-to-cart'>
                            <i className='ion-bag'></i>
                          </button>
                          <button className='btn-add-to-cart'>
                            <i className='ion-ios-loop-strong'></i>
                          </button>
                          <button className='btn-add-to-cart'>
                            <i className='ion-ios-heart-outline'></i>
                          </button>
                          <button className='btn-add-to-cart'>
                            <i className='ion-eye'></i>
                          </button>
                        </div>

                        <div className='product-item__desc'>
                          <p>
                            Pursue pleasure rationally encounter consequences
                            that are extremely painful. Nor again is there
                            anyone who loves or pursues or desires to obtain
                            pain of itself, because it is pain, but because
                            occasionally circles
                          </p>
                        </div>
                      </div>

                      <div className='product-item__sale'>
                        <span className='sale-txt'>25%</span>
                      </div>
                    </div>
                  </div>

                  <div className='col-sm-6 col-lg-4'>
                    <div className='product-item'>
                      <div className='product-item__thumb'>
                        <a href='single-product.html'>
                          <img
                            className='thumb-primary'
                            src='assets/img/product/product-7.png'
                            alt='Product'
                          />
                          <img
                            className='thumb-secondary'
                            src='assets/img/product/product-9.png'
                            alt='Product'
                          />
                        </a>

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
                      </div>

                      <div className='product-item__content'>
                        <div className='product-item__info'>
                          <h4 className='title'>
                            <a href='single-product.html'>AIR INTAKE SYSTEM</a>
                          </h4>
                          <span className='price'>
                            <strong>Price:</strong> $125.00
                          </span>
                        </div>

                        <div className='product-item__action'>
                          <button className='btn-add-to-cart'>
                            <i className='ion-bag'></i>
                          </button>
                          <button className='btn-add-to-cart'>
                            <i className='ion-ios-loop-strong'></i>
                          </button>
                          <button className='btn-add-to-cart'>
                            <i className='ion-ios-heart-outline'></i>
                          </button>
                          <button className='btn-add-to-cart'>
                            <i className='ion-eye'></i>
                          </button>
                        </div>

                        <div className='product-item__desc'>
                          <p>
                            Pursue pleasure rationally encounter consequences
                            that are extremely painful. Nor again is there
                            anyone who loves or pursues or desires to obtain
                            pain of itself, because it is pain, but because
                            occasionally circles
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-sm-6 col-lg-4'>
                    <div className='product-item'>
                      <div className='product-item__thumb'>
                        <a href='single-product.html'>
                          <img
                            className='thumb-primary'
                            src='assets/img/product/product-12.png'
                            alt='Product'
                          />
                          <img
                            className='thumb-secondary'
                            src='assets/img/product/product-13.png'
                            alt='Product'
                          />
                        </a>

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
                      </div>

                      <div className='product-item__content'>
                        <div className='product-item__info'>
                          <h4 className='title'>
                            <a href='single-product.html'>
                              LEATHER STEERING WHEEL
                            </a>
                          </h4>
                          <span className='price'>
                            <strong>Price:</strong> $25.00
                          </span>
                        </div>

                        <div className='product-item__action'>
                          <button className='btn-add-to-cart'>
                            <i className='ion-bag'></i>
                          </button>
                          <button className='btn-add-to-cart'>
                            <i className='ion-ios-loop-strong'></i>
                          </button>
                          <button className='btn-add-to-cart'>
                            <i className='ion-ios-heart-outline'></i>
                          </button>
                          <button className='btn-add-to-cart'>
                            <i className='ion-eye'></i>
                          </button>
                        </div>

                        <div className='product-item__desc'>
                          <p>
                            Pursue pleasure rationally encounter consequences
                            that are extremely painful. Nor again is there
                            anyone who loves or pursues or desires to obtain
                            pain of itself, because it is pain, but because
                            occasionally circles
                          </p>
                        </div>
                      </div>

                      <div className='product-item__sale'>
                        <span className='sale-txt'>11%</span>
                      </div>
                    </div>
                  </div>

                  <div className='col-sm-6 col-lg-4'>
                    <div className='product-item'>
                      <div className='product-item__thumb'>
                        <a href='single-product.html'>
                          <img
                            className='thumb-primary'
                            src='assets/img/product/product-11.png'
                            alt='Product'
                          />
                          <img
                            className='thumb-secondary'
                            src='assets/img/product/product-10.png'
                            alt='Product'
                          />
                        </a>

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
                      </div>

                      <div className='product-item__content'>
                        <div className='product-item__info'>
                          <h4 className='title'>
                            <a href='single-product.html'>
                              LEATHER STEERING WHEEL
                            </a>
                          </h4>
                          <span className='price'>
                            <strong>Price:</strong> $25.00
                          </span>
                        </div>

                        <div className='product-item__action'>
                          <button className='btn-add-to-cart'>
                            <i className='ion-bag'></i>
                          </button>
                          <button className='btn-add-to-cart'>
                            <i className='ion-ios-loop-strong'></i>
                          </button>
                          <button className='btn-add-to-cart'>
                            <i className='ion-ios-heart-outline'></i>
                          </button>
                          <button className='btn-add-to-cart'>
                            <i className='ion-eye'></i>
                          </button>
                        </div>

                        <div className='product-item__desc'>
                          <p>
                            Pursue pleasure rationally encounter consequences
                            that are extremely painful. Nor again is there
                            anyone who loves or pursues or desires to obtain
                            pain of itself, because it is pain, but because
                            occasionally circles
                          </p>
                        </div>
                      </div>

                      <div className='product-item__sale'>
                        <span className='sale-txt'>15%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='action-bar-inner mt-30'>
                <div className='row align-items-center'>
                  <div className='col-sm-6'>
                    <nav className='pagination-wrap mb-10 mb-sm-0'>
                      <ul className='pagination'>
                        <li className='active'>
                          <a href='#'>1</a>
                        </li>
                        <li>
                          <a href='#'>2</a>
                        </li>
                        <li>
                          <a href='#'>3</a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='ion-ios-arrow-thin-right'></i>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  <div className='col-sm-6 text-center text-sm-right'>
                    <p>Showing 1–12 of 26 results</p>
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

export default Shop;
