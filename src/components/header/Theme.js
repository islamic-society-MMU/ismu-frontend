import React, { useState } from 'react';
import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from 'react-icons/md';

const Theme = ({ toggleTheme, theme }) => {
  //   const [theme, setTheme] = useState(true);

  // const toggleTheme = () => {
  //   moveThemeSwitch();
  //   //TODO Change theme
  // };

  const moveThemeSwitch = () => {
    if (theme === 'light') return '0';
    return '50%';
  };
  return (
    <div className='theme-icons' onClick={toggleTheme}>
      <MdOutlineDarkMode className='theme-icon' />
      <MdOutlineLightMode className='theme-icon' />
      <button style={{ left: moveThemeSwitch() }}></button>
    </div>
  );
};

export default Theme;