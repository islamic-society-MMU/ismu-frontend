import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

import HeaderLinks from './HeaderLinks';
import logo from './../../assets/images/ismu-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };

  const toggleMenu = () => {
    if (isMenuOpen) return 'translateX(-100vw)';
    return 'translateX(0)';
  };

  return (
    <div className='header'>
      <div className='logo'>
        <Link>
          <img src={logo} alt='Ismu Logo' />
        </Link>
      </div>
      <div className='header-links'>
        <HeaderLinks transformVal={toggleMenu()} />
      </div>
      <BiMenuAltLeft onClick={handleMenuClick} fontSize='6vmin' />
    </div>
  );
};

export default Header;
