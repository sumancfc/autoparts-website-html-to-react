import React from "react";
import { Link } from "react-router-dom";

function IconGroup() {
  const openSideMenu = () => {
    const offcanvasMenu = document.querySelector(".off-canvas-wrapper");
    offcanvasMenu.classList.add("active");
  };
  return (
    <>
      {/* Signin icon */}
      <ul className='login-reg-nav nav'>
        <li>
          <a href='/login'>Login</a>
        </li>
        <li>
          <Link to='/wishlist' className='btn-mini-wishlist'>
            <i className='fa fa-heart'></i>
            <span className='wishlist-total'>3</span>
          </Link>
        </li>
      </ul>

      {/* Cart icon */}
      <div className='mini-cart-wrap'>
        <Link to='/cart' className='btn-mini-cart'>
          <i className='fa fa-shopping-basket'></i>
          <span className='cart-total'>3</span>
        </Link>

        <div className='mini-cart-content'>
          <div className='mini-cart-product'>
            <div className='mini-product'>
              <div className='mini-product__thumb'>
                <Link to='/'>
                  <img src='img/product/product-1.png' alt='product' />
                </Link>
              </div>
              <div className='mini-product__info'>
                <h2 className='title'>
                  <Link to='/'>Auto Clutch & Brake</Link>
                </h2>

                <div className='mini-calculation'>
                  <p className='price'>
                    5 x <span>$20.33</span>
                  </p>
                  <button className='remove-pro'>
                    <i className='fa fa-times'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='responsive-menu d-lg-none'>
        <button className='btn-menu' onClick={openSideMenu}>
          <i className='fa fa-bars'></i>
        </button>
      </div>
    </>
  );
}

export default IconGroup;
