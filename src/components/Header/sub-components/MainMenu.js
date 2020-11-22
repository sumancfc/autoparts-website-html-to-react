import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
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
          <Link to='#'>Shop</Link>
          <ul className='sub-menu'>
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

export default MainMenu;
