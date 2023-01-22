import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineContacts,
} from 'react-icons/ai';
// import { BiDonateHeart } from 'react-icons/bi';
import { FiActivity } from 'react-icons/fi';
// import { MdOutlineAppRegistration } from 'react-icons/md';

const HeaderLinks = () => {
  return (
    <ul>
      <li>
        <Link to='/'>
          <AiOutlineHome className='link-icon' />
          <span>home</span>
        </Link>
      </li>
      <li>
        <Link to='/'>
          <AiOutlineInfoCircle className='link-icon'/>
          <span>about</span>
        </Link>
      </li>
      <li>
        <Link to='/'>
          <AiOutlineContacts className='link-icon'/>
          <span>contact</span>
        </Link>
      </li>
      {/* <li>
        <Link to='/'>
          <BiDonateHeart className='link-icon'/>
          <span>donate</span>
        </Link>
      </li> */}
      <li>
        <Link to='/'>
          <FiActivity className='link-icon'/>
          <span>activities</span>
        </Link>
      </li>
      {/* <li>
        <Link to='/'>
          <MdOutlineAppRegistration className='link-icon'/>
          <span>join ismu</span>
        </Link>
      </li> */}
    </ul>
  );
};

export default HeaderLinks;
