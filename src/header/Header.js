import { HiMenuAlt2 } from 'react-icons/hi';
import Nav from './Nav';

const Header = () => {
  const toggleMenu = () => {
      document.querySelector('.head-links').classList.toggle('active')
  }
  return (
    <div className='header'>
        <HiMenuAlt2 
            onClick={toggleMenu} 
            className='menu-icon'/>
        <h2>Ismu</h2>
        <Nav toggleMenu={toggleMenu} />
    </div>
  );
};

export default Header;
