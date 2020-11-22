import React from "react";
import Logo from "../../Logo";
import MobileMenu from "./MobileMenu";

const AsideMenu = () => {
  const closeSideMenu = () => {
    const offcanvasMenu = document.querySelector(".off-canvas-wrapper");
    offcanvasMenu.classList.remove("active");
  };
  return (
    <aside className='off-canvas-wrapper off-canvas-menu'>
      <div className='off-canvas-overlay'></div>
      <div className='off-canvas-inner'>
        <div className='off-canvas-content'>
          <div className='off-canvas-header'>
            <Logo imageName='logo' />
            <div className='close-btn'>
              <button className='btn-close' onClick={closeSideMenu}>
                <i className='fa fa-times'></i>
              </button>
            </div>
          </div>

          <div className='res-mobile-menu mobile-menu'>
            <MobileMenu />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AsideMenu;
