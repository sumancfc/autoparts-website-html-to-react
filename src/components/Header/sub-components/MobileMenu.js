import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className='site-navigation'>
      <ul className='main-menu nav'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li className='has-submenu'>
          <Link to='#' onClick={handleDropdown}>
            Shop
            <span className='plus-arrow' />
          </Link>
          <ul className={dropdown ? "sub-menu opensubmenu" : "sub-menu"}>
            <li>
              <Link to='/shop'>Shop Left Sidebar</Link>
            </li>
            <li>
              <Link to='/shop'>Shop Right Sidebar</Link>
            </li>
            <li>
              <Link to='/shop'>Single Product</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
