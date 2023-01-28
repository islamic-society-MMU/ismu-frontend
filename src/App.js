import { useState } from 'react';
import './assets/styles/css/app.css';
import Header from './header/Header';
import Home from './home/Home';

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const body = document.body;

  const toggleMenu = () => {
    body.classList.toggle('menu-open');
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div className='app-container'>
      <Header toggleMenu={toggleMenu} />
      <Home />
      <div className='overlay' onClick={toggleMenu}></div>
    </div>
  );
}

export default App;
