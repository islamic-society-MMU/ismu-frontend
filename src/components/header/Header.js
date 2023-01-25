import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fixedNav from './fixedNav';
import { BiMenuAltLeft } from 'react-icons/bi';

import HeaderLinks from './HeaderLinks';
import logo from './../../assets/images/ismu-logo.png';

const Header = ({ toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 750) setIsMenuOpen(true);
  }, []);

  useEffect(() => {
    fixedNav();
  });

  const handleMenuClick = (menuState) => {
    menuState === 'open' ? setIsMenuOpen(true) : setIsMenuOpen(false);
  };

  const toggleOverlay = () => {
    if (isMenuOpen) return 'block';
    return 'none';
  };

  return (
    <>
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
            toggleTheme={toggleTheme}
          />
        </div>
        <BiMenuAltLeft
          onClick={() => handleMenuClick('open')}
          className='menu-icon'
        />
      </div>
      <div
        className='overlay'
        style={{ display: toggleOverlay() }}
        onClick={() => handleMenuClick('close')}
      ></div>
    </>
  );
};

export default Header;
