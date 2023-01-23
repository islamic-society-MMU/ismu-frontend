import React from 'react';
import { FaTiktok } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsWhatsapp, BsFacebook } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className='footer-links'>
        <ul className='links'>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/'>about</Link>
          </li>
          <li>
            <Link to='/'>contact</Link>
          </li>
          <li>
            <Link to='/'>activities</Link>
          </li>
        </ul>
      </div>
      <div className='footer-icons'>
        <a href='/#'>
          <BsFacebook />
        </a>
        <a href='/#'>
          <BsWhatsapp />
        </a>
        <a href='/#'>
          <FaTiktok />
        </a>
        <a href='/#'>
          <HiOutlineMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
