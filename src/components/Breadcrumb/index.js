import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    // <!--== Start Page Header Area ==-->
    <div
      className='page-header-wrap bg-img'
      style={{ backgroundImage: `url(assets/img/bg/page-header-bg.jpg)` }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='page-header-content'>
              <div className='page-header-content-inner'>
                <h1>About</h1>

                <ul className='breadcrumb'>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className='current'>
                    <Link to='#'>About</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <!--== End Page Header Area ==-->
  );
};

export default Breadcrumb;
