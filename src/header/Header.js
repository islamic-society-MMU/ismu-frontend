import { HiMenuAlt2 } from 'react-icons/hi';
import logo from './../assets/images/ismu-logo.png'
import Nav from './Nav';

const Header = ({ toggleMenu }) => {
  return (
    <div className='header'>
      <HiMenuAlt2 onClick={toggleMenu} className='menu-icon'/>
      {/* <img src={logo} alt="ismu-logo" className='logo' /> */}
      <h2>Ismu</h2>
      <Nav toggleMenu={toggleMenu} />
    </div>
  );
};

export default Header;
