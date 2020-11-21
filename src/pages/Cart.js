import React from "react";
import Layout from "../layouts/Layout";

const Cart = () => {
  return (
    <Layout>
      <div className='page-content-wrapper sp-y'>
        <div className='cart-page-content-wrap'>
          <div className='container container-wide'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='shopping-cart-list-area'>
                  <div className='shopping-cart-table table-responsive'>
                    <table className='table table-bordered text-center mb-0'>
                      <thead>
                        <tr>
                          <th>Products</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td className='product-list'>
                            <div className='cart-product-item d-flex align-items-center'>
                              <div className='remove-icon'>
                                <button>
                                  <i className='fa fa-trash-o'></i>
                                </button>
                              </div>
                              <a
                                href='single-product.html'
                                className='product-thumb'
                              >
                                <img
                                  src='assets/img/product/product-1.png'
                                  alt='Product'
                                />
                              </a>
                              <a
                                href='single-product.html'
                                className='product-name'
                              >
                                Metallic cotton dress
                              </a>
                            </div>
                          </td>
                          <td>
                            <span className='price'>$29.99</span>
                          </td>
                          <td>
                            <div className='pro-qty'>
                              <input
                                type='text'
                                className='quantity'
                                title='Quantity'
                                value='1'
                              />
                            </div>
                          </td>
                          <td>
                            <span className='price'>$29.99</span>
                          </td>
                        </tr>

                        <tr>
                          <td className='product-list'>
                            <div className='cart-product-item d-flex align-items-center'>
                              <div className='remove-icon'>
                                <button>
                                  <i className='fa fa-trash-o'></i>
                                </button>
                              </div>
                              <a
                                href='single-product.html'
                                className='product-thumb'
                              >
                                <img
                                  src='assets/img/product/product-2.png'
                                  alt='Product'
                                />
                              </a>
                              <a
                                href='single-product.html'
                                className='product-name'
                              >
                                Open-knit sweater
                              </a>
                            </div>
                          </td>
                          <td>
                            <span className='price'>$39.99</span>
                          </td>
                          <td>
                            <div className='pro-qty'>
                              <input
                                type='text'
                                className='quantity'
                                title='Quantity'
                                value='3'
                              />
                            </div>
                          </td>
                          <td>
                            <span className='price'>$39.99</span>
                          </td>
                        </tr>

                        <tr>
                          <td className='product-list'>
                            <div className='cart-product-item d-flex align-items-center'>
                              <div className='remove-icon'>
                                <button>
                                  <i className='fa fa-trash-o'></i>
                                </button>
                              </div>
                              <a
                                href='single-product.html'
                                className='product-thumb'
                              >
                                <img
                                  src='assets/img/product/product-3.png'
                                  alt='Product'
                                />
                              </a>
                              <a
                                href='single-product.html'
                                className='product-name'
                              >
                                Metallic cotton dress
                              </a>
                            </div>
                          </td>
                          <td>
                            <span className='price'>$29.99</span>
                          </td>
                          <td>
                            <div className='pro-qty'>
                              <input
                                type='text'
                                className='quantity'
                                title='Quantity'
                                value='2'
                              />
                            </div>
                          </td>
                          <td>
                            <span className='price'>$29.99</span>
                          </td>
                        </tr>

                        <tr>
                          <td className='product-list'>
                            <div className='cart-product-item d-flex align-items-center'>
                              <div className='remove-icon'>
                                <button>
                                  <i className='fa fa-trash-o'></i>
                                </button>
                              </div>
                              <a
                                href='single-product.html'
                                className='product-thumb'
                              >
                                <img
                                  src='assets/img/product/product-4.png'
                                  alt='Product'
                                />
                              </a>
                              <a
                                href='single-product.html'
                                className='product-name'
                              >
                                Open-knit sweater
                              </a>
                            </div>
                          </td>
                          <td>
                            <span className='price'>$39.99</span>
                          </td>
                          <td>
                            <div className='pro-qty'>
                              <input
                                type='text'
                                className='quantity'
                                title='Quantity'
                                value='5'
                              />
                            </div>
                          </td>
                          <td>
                            <span className='price'>$39.99</span>
                          </td>
                        </tr>

                        <tr>
                          <td className='product-list'>
                            <div className='cart-product-item d-flex align-items-center'>
                              <div className='remove-icon'>
                                <button>
                                  <i className='fa fa-trash-o'></i>
                                </button>
                              </div>
                              <a
                                href='single-product.html'
                                className='product-thumb'
                              >
                                <img
                                  src='assets/img/product/product-5.png'
                                  alt='Product'
                                />
                              </a>
                              <a
                                href='single-product.html'
                                className='product-name'
                              >
                                Metallic cotton dress
                              </a>
                            </div>
                          </td>
                          <td>
                            <span className='price'>$29.99</span>
                          </td>
                          <td>
                            <div className='pro-qty'>
                              <input
                                type='text'
                                className='quantity'
                                title='Quantity'
                                value='3'
                              />
                            </div>
                          </td>
                          <td>
                            <span className='price'>$29.99</span>
                          </td>
                        </tr>

                        <tr>
                          <td className='product-list'>
                            <div className='cart-product-item d-flex align-items-center'>
                              <div className='remove-icon'>
                                <button>
                                  <i className='fa fa-trash-o'></i>
                                </button>
                              </div>
                              <a
                                href='single-product.html'
                                className='product-thumb'
                              >
                                <img
                                  src='assets/img/product/product-6.png'
                                  alt='Product'
                                />
                              </a>
                              <a
                                href='single-product.html'
                                className='product-name'
                              >
                                Open-knit sweater
                              </a>
                            </div>
                          </td>
                          <td>
                            <span className='price'>$39.99</span>
                          </td>
                          <td>
                            <div className='pro-qty'>
                              <input
                                type='text'
                                className='quantity'
                                title='Quantity'
                                value='1'
                              />
                            </div>
                          </td>
                          <td>
                            <span className='price'>$39.99</span>
                          </td>
                        </tr>

                        <tr>
                          <td className='product-list'>
                            <div className='cart-product-item d-flex align-items-center'>
                              <div className='remove-icon'>
                                <button>
                                  <i className='fa fa-trash-o'></i>
                                </button>
                              </div>
                              <a
                                href='single-product.html'
                                className='product-thumb'
                              >
                                <img
                                  src='assets/img/product/product-7.png'
                                  alt='Product'
                                />
                              </a>
                              <a
                                href='single-product.html'
                                className='product-name'
                              >
                                Open-knit sweater
                              </a>
                            </div>
                          </td>
                          <td>
                            <span className='price'>$39.99</span>
                          </td>
                          <td>
                            <div className='pro-qty'>
                              <input
                                type='text'
                                className='quantity'
                                title='Quantity'
                                value='1'
                              />
                            </div>
                          </td>
                          <td>
                            <span className='price'>$39.99</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className='cart-coupon-update-area d-sm-flex justify-content-between align-items-center'>
                    <div className='coupon-form-wrap'>
                      <form action='#' method='post'>
                        <label for='coupon' className='sr-only'>
                          Coupon Code
                        </label>
                        <input
                          type='text'
                          id='coupon'
                          placeholder='Coupon Code'
                        />
                        <button className='btn-apply'>Apply Button</button>
                      </form>
                    </div>

                    <div className='cart-update-buttons mt-15 mt-sm-0'>
                      <button className='btn-clear-cart'>Clear Cart</button>
                      <button className='btn-update-cart'>Update Cart</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4'>
                <div className='cart-calculate-area mt-sm-40 mt-md-60'>
                  <h5 className='cal-title'>Cart Totals</h5>

                  <div className='cart-cal-table table-responsive'>
                    <table className='table table-borderless'>
                      <tr className='cart-sub-total'>
                        <th>Subtotal</th>
                        <td>$289.89</td>
                      </tr>
                      <tr className='shipping'>
                        <th>Shipping</th>
                        <td>
                          <ul className='shipping-method'>
                            <li>
                              <div className='custom-control custom-radio'>
                                <input
                                  type='radio'
                                  id='flat_shipping'
                                  name='shipping_method'
                                  className='custom-control-input'
                                  checked
                                />
                                <label
                                  className='custom-control-label'
                                  for='flat_shipping'
                                >
                                  Flat Rate : $10
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className='custom-control custom-radio'>
                                <input
                                  type='radio'
                                  id='free_shipping'
                                  name='shipping_method'
                                  className='custom-control-input'
                                />
                                <label
                                  className='custom-control-label'
                                  for='free_shipping'
                                >
                                  Free Shipping
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className='custom-control custom-radio'>
                                <input
                                  type='radio'
                                  id='cod_shipping'
                                  name='shipping_method'
                                  className='custom-control-input'
                                />
                                <label
                                  className='custom-control-label'
                                  for='cod_shipping'
                                >
                                  Cash on Delivery
                                </label>
                              </div>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr className='order-total'>
                        <th>Total</th>
                        <td>
                          <b>$299.93</b>
                        </td>
                      </tr>
                    </table>
                  </div>

                  <div className='proceed-checkout-btn'>
                    <a href='checkout.html' className='btn btn-brand d-block'>
                      Proceed to Checkout
                    </a>
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

export default Cart;
