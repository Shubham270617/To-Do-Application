import React from 'react';
import { useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const ThemeSwithButton = () => {
  const [darkMode, setDarkMode] = useState(false);
  const changeMode = () => {
    
    setDarkMode(!darkMode);
    !darkMode
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
  };
  return (
    <div
      className={`cursor-pointer text-2xl p-2 select-none`}
      onClick={changeMode}
    >
      {darkMode ? <MdDarkMode className="dark:text-white" /> : <MdLightMode />}
    </div>
  );
};

export default ThemeSwithButton;
