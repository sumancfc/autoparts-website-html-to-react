import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ imageName }) => {
  return (
    <div className='site-logo text-center text-sm-left'>
      <Link to='/'>
        <img src={`assets/img/${imageName}.png`} alt='Logo' />
      </Link>
    </div>
  );
};

export default Logo;
