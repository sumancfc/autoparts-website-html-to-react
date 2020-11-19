import React from "react";

const Header = () => {
  return (
    <header className='header-area'>
      <div className='container container-wide'>
        <div className='row align-items-center'>
          <div className='col-sm-4 col-lg-2'>
            <div className='site-logo text-center text-sm-left'>
              <a href='/'>
                <img src='img/logo.png' alt='Logo' />
              </a>
            </div>
          </div>

          <div className='col-lg-7 d-none d-lg-block'>
            <div className='site-navigation'>
              <ul className='main-menu nav'>
                <li className='has-submenu'>
                  <a href='/'>Home</a>
                </li>
                <li>
                  <a href='about.html'>About</a>
                </li>
                <li className='has-submenu'>
                  <a href='shop.html'>Shop</a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='shop-left-sidebar.html'>Shop Left Sidebar</a>
                    </li>
                    <li>
                      <a href='shop-right-sidebar.html'>Shop Right Sidebar</a>
                    </li>
                    <li>
                      <a href='single-product.html'>Single Product</a>
                    </li>
                  </ul>
                </li>
                <li className='has-submenu'>
                  <a href='blog.html'>blog</a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='blog-left-sidebar.html'>Blog Left Sidebar</a>
                    </li>
                    <li>
                      <a href='blog.html'>Blog Right Sidebar</a>
                    </li>
                    <li>
                      <a href='blog-details.html'>Single Blog</a>
                    </li>
                    <li>
                      <a href='blog-details-sidebar.html'>
                        Single Blog Sidebar
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='gallery.html'>Gallery</a>
                </li>
                <li className='has-submenu'>
                  <a href='/'>Pages</a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='cart.html'>Cart</a>
                    </li>
                    <li>
                      <a href='checkout.html'>Checkout</a>
                    </li>
                    <li>
                      <a href='wishlist.html'>Wishlist</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='contact.html'>Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-sm-8 col-lg-3'>
            <div className='site-action d-flex justify-content-center justify-content-sm-end align-items-center'>
              <ul className='login-reg-nav nav'>
                <li>
                  <a href='#'>Login</a>
                </li>
                <li>
                  <a href='#'>Register</a>
                </li>
              </ul>

              <div className='mini-cart-wrap'>
                <a href='cart.html' className='btn-mini-cart'>
                  <i className='ion-bag'></i>
                  <span className='cart-total'>3</span>
                </a>

                <div className='mini-cart-content'>
                  <div className='mini-cart-product'>
                    <div className='mini-product'>
                      <div className='mini-product__thumb'>
                        <a href='single-product.html'>
                          <img
                            src='assets/img/product/product-1.png'
                            alt='product'
                          />
                        </a>
                      </div>
                      <div className='mini-product__info'>
                        <h2 className='title'>
                          <a href='single-product.html'>Auto Clutch & Brake</a>
                        </h2>

                        <div className='mini-calculation'>
                          <p className='price'>
                            5 x <span>$20.33</span>
                          </p>
                          <button className='remove-pro'>
                            <i className='ion-trash-b'></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className='mini-product'>
                      <div className='mini-product__thumb'>
                        <a href='single-product.html'>
                          <img
                            src='assets/img/product/product-2.png'
                            alt='product'
                          />
                        </a>
                      </div>
                      <div className='mini-product__info'>
                        <h2 className='title'>
                          <a href='single-product.html'>
                            Leather Steering Wheel
                          </a>
                        </h2>

                        <div className='mini-calculation'>
                          <p className='price'>
                            5 x <span>$20.33</span>
                          </p>
                          <button className='remove-pro'>
                            <i className='ion-trash-b'></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className='mini-product'>
                      <div className='mini-product__thumb'>
                        <a href='single-product.html'>
                          <img
                            src='assets/img/product/product-3.png'
                            alt='product'
                          />
                        </a>
                      </div>
                      <div className='mini-product__info'>
                        <h2 className='title'>
                          <a href='single-product.html'>
                            Leather Steering Wheel
                          </a>
                        </h2>

                        <div className='mini-calculation'>
                          <p className='price'>
                            5 x <span>$20.33</span>
                          </p>
                          <button className='remove-pro'>
                            <i className='ion-trash-b'></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='responsive-menu d-lg-none'>
                <button className='btn-menu'>
                  <i className='fa fa-bars'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
