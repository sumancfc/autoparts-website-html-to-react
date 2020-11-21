import React from "react";
import Layout from "../layouts/Layout";

const Checkout = () => {
  return (
    <Layout>
      <div className='page-content-wrapper sp-y'>
        <div className='cart-page-content-wrap'>
          <div className='container container-wide'>
            <div className='row'>
              <div className='col-12'>
                <div className='checkout-page-coupon-area'>
                  <div className='checkoutAccordion' id='checkOutAccordion'>
                    <div className='card'>
                      <h3>
                        <i className='fa fa-info-circle'></i> Have a Coupon?{" "}
                        <span
                          data-toggle='collapse'
                          data-target='#couponaccordion'
                        >
                          Click here to Enter your Code
                        </span>
                      </h3>
                      <div
                        id='couponaccordion'
                        className='collapse'
                        data-parent='#checkOutAccordion'
                      >
                        <div className='card-body'>
                          <div className='row'>
                            <div className='col-lg-8'>
                              <div className='apply-coupon-wrapper'>
                                <p>
                                  If you have a coupon code, please apply it
                                  below.
                                </p>
                                <form action='#' method='post'>
                                  <div className='row'>
                                    <div className='col-md-8'>
                                      <div className='input-item mt-0'>
                                        <input
                                          type='text'
                                          placeholder='Enter Your Coupon Code'
                                          required
                                        />
                                      </div>
                                    </div>

                                    <div className='col-md-4 mt-20 mt-md-0'>
                                      <button className='btn btn-bordered'>
                                        Apply Coupon
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

            <div className='row'>
              <div className='col-lg-6'>
                <div className='checkout-billing-details-wrap'>
                  <h2>Billing Details</h2>
                  <div className='billing-form-wrap'>
                    <form action='#' method='post'>
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className='input-item mt-0'>
                            <label for='f_name' className='sr-only required'>
                              First Name
                            </label>
                            <input
                              type='text'
                              id='f_name'
                              placeholder='First Name'
                              required
                            />
                          </div>
                        </div>

                        <div className='col-md-6'>
                          <div className='input-item mt-md-0'>
                            <label for='l_name' className='sr-only required'>
                              Last Name
                            </label>
                            <input
                              type='text'
                              id='l_name'
                              placeholder='Last Name'
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className='input-item'>
                        <label for='email' className='sr-only required'>
                          Email Address
                        </label>
                        <input
                          type='email'
                          id='email'
                          placeholder='Email Address'
                          required
                        />
                      </div>

                      <div className='input-item'>
                        <label for='com-name' className='sr-only'>
                          Company Name
                        </label>
                        <input
                          type='text'
                          id='com-name'
                          placeholder='Company Name'
                        />
                      </div>

                      <div className='input-item'>
                        <label for='country' className='sr-only required'>
                          Country
                        </label>
                        <select name='country' id='country'>
                          <option value='Afghanistan'>Afghanistan</option>
                          <option value='Albania'>Albania</option>
                          <option value='Algeria'>Algeria</option>
                          <option value='Armenia'>Armenia</option>
                          <option value='Bangladesh'>Bangladesh</option>
                          <option value='India'>India</option>
                          <option value='Pakistan'>Pakistan</option>
                          <option value='England'>England</option>
                          <option value='London'>London</option>
                          <option value='London'>London</option>
                          <option value='Chaina'>China</option>
                        </select>
                      </div>

                      <div className='input-item'>
                        <label
                          for='street-address'
                          className='sr-only required'
                        >
                          Street address
                        </label>
                        <input
                          type='text'
                          id='street-address'
                          placeholder='Street address Line 1'
                          required
                        />
                      </div>

                      <div className='input-item'>
                        <input
                          type='text'
                          placeholder='Street address Line 2 (Optional)'
                        />
                      </div>

                      <div className='input-item'>
                        <label for='town' className='sr-only required'>
                          Town / City
                        </label>
                        <input
                          type='text'
                          id='town'
                          placeholder='Town / City'
                          required
                        />
                      </div>

                      <div className='input-item'>
                        <label for='state' className='sr-only'>
                          State / Divition
                        </label>
                        <input
                          type='text'
                          id='state'
                          placeholder='State / Divition'
                        />
                      </div>

                      <div className='input-item'>
                        <label for='postcode' className='sr-only required'>
                          Postcode / ZIP
                        </label>
                        <input
                          type='text'
                          id='postcode'
                          placeholder='Postcode / ZIP'
                          required
                        />
                      </div>

                      <div className='input-item'>
                        <label for='phone' className='sr-only'>
                          Phone
                        </label>
                        <input type='text' id='phone' placeholder='Phone' />
                      </div>

                      <div className='checkout-box-wrap'>
                        <div className='input-item'>
                          <div className='custom-control custom-checkbox'>
                            <input
                              type='checkbox'
                              className='custom-control-input'
                              id='create_pwd'
                            />
                            <label
                              className='custom-control-label'
                              for='create_pwd'
                            >
                              Create an account?
                            </label>
                          </div>
                        </div>
                        <div className='account-create single-form-row'>
                          <p>
                            Create an account by entering the information below.
                            If you are a returning customer please login at the
                            top of the page.
                          </p>
                          <div className='input-item'>
                            <label for='pwd' className='sr-only required'>
                              Account Password
                            </label>
                            <input
                              type='password'
                              id='pwd'
                              placeholder='Account Password'
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className='checkout-box-wrap'>
                        <div className='input-item'>
                          <div className='custom-control custom-checkbox'>
                            <input
                              type='checkbox'
                              className='custom-control-input'
                              id='ship_to_different'
                            />
                            <label
                              className='custom-control-label'
                              for='ship_to_different'
                            >
                              Ship to a different address?
                            </label>
                          </div>
                        </div>
                        <div className='ship-to-different single-form-row'>
                          <div className='row'>
                            <div className='col-md-6'>
                              <div className='input-item'>
                                <label
                                  for='f_name_2'
                                  className='sr-only required'
                                >
                                  First Name
                                </label>
                                <input
                                  type='text'
                                  id='f_name_2'
                                  placeholder='First Name'
                                  required
                                />
                              </div>
                            </div>

                            <div className='col-md-6'>
                              <div className='input-item'>
                                <label
                                  for='l_name_2'
                                  className='sr-only required'
                                >
                                  Last Name
                                </label>
                                <input
                                  type='text'
                                  id='l_name_2'
                                  placeholder='Last Name'
                                  required
                                />
                              </div>
                            </div>
                          </div>

                          <div className='input-item'>
                            <label for='email_2' className='sr-only required'>
                              Email Address
                            </label>
                            <input
                              type='email'
                              id='email_2'
                              placeholder='Email Address'
                              required
                            />
                          </div>

                          <div className='input-item'>
                            <label for='com-name_2' className='sr-only'>
                              Company Name
                            </label>
                            <input
                              type='text'
                              id='com-name_2'
                              placeholder='Company Name'
                            />
                          </div>

                          <div className='input-item'>
                            <label for='country_2' className='sr-only required'>
                              Country
                            </label>
                            <select name='country' id='country_2'>
                              <option value='Bangladesh'>Bangladesh</option>
                              <option value='India'>India</option>
                              <option value='Pakistan'>Pakistan</option>
                              <option value='England'>England</option>
                              <option value='London'>London</option>
                              <option value='London'>London</option>
                              <option value='Chaina'>Chaina</option>
                            </select>
                          </div>

                          <div className='input-item'>
                            <label
                              for='street-address_2'
                              className='sr-only required'
                            >
                              Street address
                            </label>
                            <input
                              type='text'
                              id='street-address_2'
                              placeholder='Street address Line 1'
                              required
                            />
                          </div>

                          <div className='input-item'>
                            <input
                              type='text'
                              placeholder='Street address Line 2 (Optional)'
                            />
                          </div>

                          <div className='input-item'>
                            <label for='town_2' className='sr-only required'>
                              Town / City
                            </label>
                            <input
                              type='text'
                              id='town_2'
                              placeholder='Town / City'
                              required
                            />
                          </div>

                          <div className='input-item'>
                            <label for='state_2' className='sr-only'>
                              State / Divition
                            </label>
                            <input
                              type='text'
                              id='state_2'
                              placeholder='State / Divition'
                            />
                          </div>

                          <div className='input-item'>
                            <label
                              for='postcode_2'
                              className='sr-only required'
                            >
                              Postcode / ZIP
                            </label>
                            <input
                              type='text'
                              id='postcode_2'
                              placeholder='Postcode / ZIP'
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className='input-item'>
                        <label for='ordernote' className='sr-only'>
                          Order Note
                        </label>
                        <textarea
                          name='ordernote'
                          id='ordernote'
                          cols='30'
                          rows='3'
                          placeholder='Notes about your order, e.g. special notes for delivery.'
                        ></textarea>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className='col-lg-6 col-xl-5 ml-auto'>
                <div className='order-details-area-wrap'>
                  <h2>Your Order</h2>

                  <div className='order-details-table table-responsive'>
                    <table className='table table-borderless'>
                      <thead>
                        <tr>
                          <th>Products</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className='cart-item'>
                          <td>
                            <span className='product-title'>
                              Ruffled cotton top
                            </span>{" "}
                            <span className='product-quantity'>&#215; 1</span>
                          </td>
                          <td>$39.99</td>
                        </tr>
                        <tr className='cart-item'>
                          <td>
                            <span className='product-title'>
                              Floral Print Voile Bodysuit
                            </span>{" "}
                            <span className='product-quantity'>&#215; 2</span>
                          </td>
                          <td>$29.99</td>
                        </tr>
                        <tr className='cart-item'>
                          <td>
                            <span className='product-title'>
                              Metallic cotton dress
                            </span>{" "}
                            <span className='product-quantity'>&#215; 1</span>
                          </td>
                          <td>$69.99</td>
                        </tr>
                        <tr className='cart-item'>
                          <td>
                            <span className='product-title'>
                              Ribbed jersey dress
                            </span>{" "}
                            <span className='product-quantity'>&#215; 1</span>
                          </td>
                          <td>$39.99</td>
                        </tr>
                        <tr className='cart-item'>
                          <td>
                            <span className='product-title'>
                              Metallic cotton dress
                            </span>{" "}
                            <span className='product-quantity'>&#215; 1</span>
                          </td>
                          <td>$69.99</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className='cart-subtotal'>
                          <th>Subtotal</th>
                          <td>$309.00</td>
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
                        <tr className='final-total'>
                          <th>Total</th>
                          <td>
                            <span className='total-amount'>$289.93</span>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  <div className='order-details-footer'>
                    <p>
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our
                      <a href='#' className='text-warning'>
                        privacy policy
                      </a>
                      .
                    </p>
                    <div className='custom-control custom-checkbox mt-10'>
                      <input
                        type='checkbox'
                        id='privacy'
                        className='custom-control-input'
                        required
                      />
                      <label for='privacy' className='custom-control-label'>
                        I have read and agree to the website terms and
                        conditions
                      </label>
                    </div>

                    <button className='btn btn-bordered mt-40'>
                      Place Order
                    </button>
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

export default Checkout;
