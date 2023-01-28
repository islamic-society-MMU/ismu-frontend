import { AiOutlineClose } from 'react-icons/ai';

const Nav = ({ toggleMenu }) => {
  return (
    <ul className='head-links'>
      <AiOutlineClose className='close-icon' onClick={toggleMenu} />
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>
        <button>Participate</button>
      </li>
    </ul>
  );
};

export default Nav;
