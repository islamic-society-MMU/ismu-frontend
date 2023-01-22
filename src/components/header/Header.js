import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

import HeaderLinks from './HeaderLinks';
import logo from './../../assets/images/ismu-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 750) setIsMenuOpen(true);
  }, []);

  const handleMenuClick = (menuState) => {
    menuState === 'open' ? setIsMenuOpen(true) : setIsMenuOpen(false);
  };

  return (
    <div className='header'>
      <div className='logo'>
        <Link>
          <img src={logo} alt='Ismu Logo' />
        </Link>
      </div>
      <div className='header-links'>
        <HeaderLinks
          isMenuOpen={isMenuOpen}
          handleMenuClick={handleMenuClick}
        />
      </div>
      <BiMenuAltLeft
        onClick={() => handleMenuClick('open')}
        fontSize='6vmin'
        className='menu-icon'
      />
    </div>
  );
};

export default Header;
