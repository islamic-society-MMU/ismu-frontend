import React, { useState } from 'react';
import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from 'react-icons/md';

const Theme = () => {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!theme);
    moveThemeSwitch();
    //TODO Change theme
  };

  const moveThemeSwitch = () => {
    if (theme) return '0';
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
