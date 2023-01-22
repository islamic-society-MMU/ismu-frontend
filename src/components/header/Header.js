import React from 'react';
import { Link } from 'react-router-dom';

import HeaderLinks from './HeaderLinks';
import logo from './../../assets/images/ismu-logo.png';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <Link>
          <img src={logo} alt='Ismu Logo' />
        </Link>
      </div>
      <div className='header-links'>
        <HeaderLinks />
      </div>
    </div>
  );
};

export default Header;
