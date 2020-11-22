import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <!--== Start Footer Area Wrapper ==-->
    <footer className='footer-area'>
      <div className='footer-widget-area'>
        <div className='container container-wide'>
          <div className='row mtn-40'>
            <div className='col-lg-3'>
              <div className='widget-item'>
                <div className='about-widget'>
                  <Link to='/'>
                    <img src='img/logo-light.png' alt='Logo' />
                  </Link>
                  <p>
                    Lukas is the best parts shop for your car accessories. What
                    kind of parts do you need you can get here soluta nobis
                  </p>
                </div>
              </div>
            </div>

            <div className='col-sm-6 col-lg-2'>
              <div className='widget-item'>
                <h4 className='widget-title'>Information</h4>
                <div className='widget-body'>
                  <ul className='widget-list'>
                    <li>
                      <Link to='#'>Our company</Link>
                    </li>
                    <li>
                      <Link to='/contact-us'>Contact us</Link>
                    </li>
                    <li>
                      <Link to='#'>Our services</Link>
                    </li>
                    <li>
                      <Link to='#'>Why We?</Link>
                    </li>
                    <li>
                      <Link to='#'>Careers</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-sm-6 col-lg-2'>
              <div className='widget-item'>
                <h4 className='widget-title'>Quicklink</h4>
                <div className='widget-body'>
                  <ul className='widget-list'>
                    <li>
                      <Link to='/about-us'>About</Link>
                    </li>
                    <li>
                      <Link to='/blog'>Blog</Link>
                    </li>
                    <li>
                      <Link to='/shop'>Shop</Link>
                    </li>
                    <li>
                      <Link to='/cart'>Cart</Link>
                    </li>
                    <li>
                      <Link to='/contact-us'>Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-sm-6 col-lg-2'>
              <div className='widget-item'>
                <h4 className='widget-title'>Support</h4>
                <div className='widget-body'>
                  <ul className='widget-list'>
                    <li>
                      <Link to='#'>Blog</Link>
                    </li>
                    <li>
                      <Link to='/contact-us'>Contact</Link>
                    </li>
                    <li>
                      <Link to='#'>Return Policy</Link>
                    </li>
                    <li>
                      <Link to='#'>Online Support</Link>
                    </li>
                    <li>
                      <Link to='#'>Money Back</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-sm-6 col-lg-3'>
              <div className='widget-item'>
                <h4 className='widget-title'>Store Information</h4>
                <div className='widget-body'>
                  <address>
                    2005 Stokes Isle Apartment. 896, Washington 10010, USA
                    <br />
                    https://example.com <br />
                    (+68) 120034509
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='footer-copyright-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <div className='copyright-content'>
                <p>
                  &copy; {new Date().getFullYear()} Lukas. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    // <!--== End Footer Area Wrapper ==-->
  );
};

export default Footer;
