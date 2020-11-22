import React from "react";
import Logo from "../Logo";
import AsideMenu from "./sub-components/AsideMenu";
import IconGroup from "./sub-components/IconGroup";
import MainMenu from "./sub-components/MainMenu";

const Header = () => {
  return (
    <>
      <header className='header-area'>
        <div className='container container-wide'>
          <div className='row align-items-center'>
            <div className='col-sm-4  col-lg-2'>
              {/* Logo  */}
              <Logo imageName='logo' />
            </div>

            <div className='col-lg-7  d-none d-lg-block'>
              {/* Main Menu */}
              <MainMenu />
            </div>

            <div className='col-sm-8  col-lg-3'>
              <div className='site-action d-flex justify-content-center justify-content-sm-end align-items-center'>
                {/* Icon groups header */}
                <IconGroup />
              </div>
            </div>
          </div>
        </div>
      </header>
      <AsideMenu />
    </>
  );
};

export default Header;
