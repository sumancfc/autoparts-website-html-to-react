import React from "react";
import Layout from "../layouts/Layout";

const Wishlist = () => {
  return (
    <Layout>
      <div className='page-content-wrapper sp-y'>
        <div className='wishlist-page-content-wrap'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='shopping-cart-list-area'>
                  <div className='shopping-cart-table table-responsive'>
                    <table className='table table-bordered text-center mb-0'>
                      <thead>
                        <tr>
                          <th>Products</th>
                          <th>Price</th>
                          <th>Status</th>
                          <th>Cart</th>
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
                            <div className='stock-status'>
                              <p>In Stock</p>
                            </div>
                          </td>
                          <td className='add-cart'>
                            <a href='cart.html' className='btn btn-brand'>
                              Add to Cart
                            </a>
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
                            <div className='stock-status'>
                              <p>In Stock</p>
                            </div>
                          </td>
                          <td className='add-cart'>
                            <a href='cart.html' className='btn btn-brand'>
                              Add to Cart
                            </a>
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
                            <div className='stock-status'>
                              <p className='text-danger'>Stock Out</p>
                            </div>
                          </td>
                          <td className='add-cart'>
                            <a
                              href='cart.html'
                              className='btn btn-brand disabled'
                            >
                              Add to Cart
                            </a>
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
                            <div className='stock-status'>
                              <p>In Stock</p>
                            </div>
                          </td>
                          <td className='add-cart'>
                            <a href='cart.html' className='btn btn-brand'>
                              Add to Cart
                            </a>
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
                            <div className='stock-status'>
                              <p>In Stock</p>
                            </div>
                          </td>
                          <td className='add-cart'>
                            <a href='cart.html' className='btn btn-brand'>
                              Add to Cart
                            </a>
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
                            <div className='stock-status'>
                              <p>In Stock</p>
                            </div>
                          </td>
                          <td className='add-cart'>
                            <a href='cart.html' className='btn btn-brand'>
                              Add to Cart
                            </a>
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
                            <div className='stock-status'>
                              <p>In Stock</p>
                            </div>
                          </td>
                          <td className='add-cart'>
                            <a href='cart.html' className='btn btn-brand'>
                              Add to Cart
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default Wishlist;
