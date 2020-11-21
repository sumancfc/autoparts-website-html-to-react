import React from "react";
import Layout from "../layouts/Layout";

const singleProduct = () => {
  return (
    <Layout>
      <div className='page-content-wrapper sp-y'>
        <div className='product-details-page-content'>
          <div className='container container-wide'>
            <div className='row'>
              <div className='col-12'>
                <div className='row'>
                  <div className='col-md-5'>
                    <div className='product-thumb-area'>
                      <div className='product-details-thumbnail'>
                        <div
                          className='product-thumbnail-slider'
                          id='thumb-gallery'
                        >
                          <figure
                            className='pro-thumb-item'
                            data-mfp-src='assets/img/product/product-details-1.png'
                          >
                            <img
                              src='assets/img/product/product-details-1.png'
                              alt='Product Details'
                            />
                          </figure>
                          <figure
                            className='pro-thumb-item'
                            data-mfp-src='assets/img/product/product-details-2.png'
                          >
                            <img
                              src='assets/img/product/product-details-2.png'
                              alt='Product Details'
                            />
                          </figure>
                          <figure
                            className='pro-thumb-item'
                            data-mfp-src='assets/img/product/product-details-3.png'
                          >
                            <img
                              src='assets/img/product/product-details-3.png'
                              alt='Product Details'
                            />
                          </figure>
                          <figure
                            className='pro-thumb-item'
                            data-mfp-src='assets/img/product/product-details-4.png'
                          >
                            <img
                              src='assets/img/product/product-details-4.png'
                              alt='Product Details'
                            />
                          </figure>
                          <figure
                            className='pro-thumb-item'
                            data-mfp-src='assets/img/product/product-details-5.png'
                          >
                            <img
                              src='assets/img/product/product-details-5.png'
                              alt='Product Details'
                            />
                          </figure>
                        </div>

                        <a
                          href='#thumb-gallery'
                          className='btn-large-view btn-gallery-popup'
                        >
                          View Larger <i className='fa fa-search-plus'></i>
                        </a>
                      </div>

                      <div className='product-details-thumbnail-nav'>
                        <figure className='pro-thumb-item'>
                          <img
                            src='assets/img/product/product-1.png'
                            alt='Product Details'
                          />
                        </figure>
                        <figure className='pro-thumb-item'>
                          <img
                            src='assets/img/product/product-2.png'
                            alt='Product Details'
                          />
                        </figure>
                        <figure className='pro-thumb-item'>
                          <img
                            src='assets/img/product/product-3.png'
                            alt='Product Details'
                          />
                        </figure>
                        <figure className='pro-thumb-item'>
                          <img
                            src='assets/img/product/product-4.png'
                            alt='Product Details'
                          />
                        </figure>
                        <figure className='pro-thumb-item'>
                          <img
                            src='assets/img/product/product-5.png'
                            alt='Product Details'
                          />
                        </figure>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-7'>
                    <div className='product-details-info-content-wrap'>
                      <div className='prod-details-info-content'>
                        <h2>Hanging 4K Camera</h2>
                        <h5 className='price'>
                          <strong>Price:</strong>{" "}
                          <span className='price-amount'>$325.00</span>
                        </h5>
                        <p>
                          Pursue pleasure rationally encounter consequences that
                          are extremely painful. Nor again is there anyone who
                          loves or pursues or desires to obtain pain of itself,
                          because it is pain, but because occasionally circles
                        </p>
                        <p>
                          Pursue pleasure rationally encounter consequences that
                          are extremely painful. Nor again is there anyone who
                          loves or pursues or desires to obtain pain of itself,
                          because it is pain, but because occasionally circles
                          occur in and pain can procure him some great ple cum
                          solute nobie est eligendi option
                        </p>

                        <div className='product-config'>
                          <div className='table-responsive'>
                            <table className='table table-bordered'>
                              <tr>
                                <th className='config-label'>Color</th>
                                <td className='config-option'>
                                  <div className='config-color'>
                                    <a href='#'>Black</a>
                                    <a href='#'>Blue</a>
                                    <a href='#'>Green</a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th className='config-label'>Size</th>
                                <td className='config-option'>
                                  <div className='config-color'>
                                    <a href='#'>Large</a>
                                    <a href='#'>Medium</a>
                                    <a href='#'>Small</a>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </div>
                        </div>

                        <div className='product-action'>
                          <div className='action-top d-sm-flex'>
                            <div className='pro-qty mr-3 mb-4 mb-sm-0'>
                              <label for='quantity' className='sr-only'>
                                Quantity
                              </label>
                              <input
                                type='text'
                                id='quantity'
                                title='Quantity'
                                value='1'
                              />
                            </div>
                            <button className='btn btn-bordered'>
                              Add to Cart
                            </button>
                          </div>
                        </div>

                        <div className='product-meta'>
                          <span className='sku_wrapper'>
                            SKU: <span className='sku'>N/A</span>
                          </span>

                          <span className='posted_in'>
                            Categories:
                            <a href='#'>Best Seller,</a>
                            <a href='#'>Parts,</a>
                            <a href='#'>Shop</a>
                          </span>

                          <span className='tagged_as'>
                            Tags:
                            <a href='#'>Seller,</a>
                            <a href='#'>Modern,</a>
                            <a href='#'>Parts</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-12'>
                    <div className='product-description-review'>
                      <ul
                        className='nav nav-tabs desc-review-tab-menu'
                        id='desc-review-tab'
                        role='tablist'
                      >
                        <li>
                          <a
                            className='active'
                            id='desc-tab'
                            data-toggle='tab'
                            href='#descriptionContent'
                            role='tab'
                          >
                            Description
                          </a>
                        </li>
                        <li>
                          <a
                            id='profile-tab'
                            data-toggle='tab'
                            href='#reviewContent'
                          >
                            Review (3)
                          </a>
                        </li>
                      </ul>

                      <div className='tab-content' id='myTabContent'>
                        <div
                          className='tab-pane fade show active'
                          id='descriptionContent'
                        >
                          <div className='description-content'>
                            <p>
                              Created from either wood or recycled materials, it
                              can be moulded into just about any shape and
                              hardens to provide a hard shell. Additives can
                              make it water resistant and it can be produced in
                              a rainbow of colours. Other materials being looked
                              at include paper clay, paper glue, paper cotton
                              and even washable paper.
                            </p>

                            <p>
                              Additives can make it water resistant and it can
                              be produced in a rainbow of colours. Other
                              materials being looked at include paper clay Lorem
                              ipsum dolor sit amet, consectetur adipisicing
                              elit. Eaque, facere!
                            </p>
                            <p>
                              Pursue pleasure rationally encounter consequences
                              that are extremely painful. Nor again is there
                              anyone who loves or pursues or desires to obtain
                              pain of itself, because it is pain, but because
                              occasionally circes occur in and pain can procure
                              him some great ple cum soluta nobis est eligendi
                              optio cumque nihil impedit quo minus id qu maxime
                              placeat facere possimus, omnis voluptas assumenda
                              est, omnis dolor repellendus
                            </p>
                          </div>
                        </div>

                        <div className='tab-pane fade' id='reviewContent'>
                          <div className='product-rating-wrap'>
                            <div className='average-rating'>
                              <h4>
                                4.8 <span>(Overall)</span>
                              </h4>
                              <span>Based on 2 Comments</span>
                            </div>

                            <div className='display-ratings'>
                              <div className='rating-item'>
                                <div className='rating-author-pic'>
                                  <img
                                    src='assets/img/extra/author-1.jpg'
                                    alt='author'
                                  />
                                </div>

                                <div className='rating-author-txt'>
                                  <div className='rating-star'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                  </div>

                                  <div className='rating-meta'>
                                    <h3>Cristopher Lee</h3>
                                    <span className='time'>- 07, Jun</span>
                                  </div>

                                  <p>
                                    Wonderful collection of WooThemes
                                    classNameics! A must buy for all Woo fans.
                                  </p>
                                </div>
                              </div>

                              <div className='rating-item'>
                                <div className='rating-author-pic'>
                                  <img
                                    src='assets/img/extra/author-2.jpg'
                                    alt='author'
                                  />
                                </div>

                                <div className='rating-author-txt'>
                                  <div className='rating-star'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star-half-empty'></i>
                                  </div>

                                  <div className='rating-meta'>
                                    <h3>Raju Ahammad</h3>
                                    <span className='time'>- 02, Jun</span>
                                  </div>

                                  <p>
                                    Voluptatem quia voluptas sit aspernat
                                    uptatem sequi Neque porro.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className='rating-form-wrapper'>
                              <h3>Add your Reviews</h3>
                              <form action='#' method='post'>
                                <div className='rating-form row'>
                                  <div className='col-12'>
                                    <h5>Your Rating:</h5>
                                    <div className='rating-star fix mb-20'>
                                      <i className='fa fa-star'></i>
                                      <i className='fa fa-star'></i>
                                      <i className='fa fa-star'></i>
                                      <i className='fa fa-star'></i>
                                      <i className='fa fa-star'></i>
                                    </div>
                                  </div>
                                  <div className='col-md-6'>
                                    <div className='form-input-item mt-30 mt-md-0'>
                                      <label for='name' className='sr-only'>
                                        Name
                                      </label>
                                      <input
                                        type='text'
                                        id='name'
                                        placeholder='Name'
                                      />
                                    </div>
                                  </div>
                                  <div className='col-md-6'>
                                    <div className='form-input-item mt-30 mt-md-0'>
                                      <label for='email' className='sr-only'>
                                        Email
                                      </label>
                                      <input
                                        type='email'
                                        id='email'
                                        placeholder='Email'
                                      />
                                    </div>
                                  </div>
                                  <div className='col-12'>
                                    <div className='form-input-item mt-30 mb-40'>
                                      <label
                                        for='your-review'
                                        className='sr-only'
                                      >
                                        review
                                      </label>
                                      <textarea
                                        rows='4'
                                        name='review'
                                        id='your-review'
                                        placeholder='Write a review'
                                      ></textarea>
                                    </div>
                                  </div>
                                  <div className='col-12 mt-22'>
                                    <button className='btn btn-brand'>
                                      Submit
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default singleProduct;
