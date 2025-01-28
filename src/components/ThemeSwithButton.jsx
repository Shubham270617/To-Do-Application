import React from 'react';
import { useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const ThemeSwithButton = ({toggleTheme, isDarkMode}) => {
  return (
    <div
      className={`cursor-pointer text-2xl p-2 select-none`}
      onClick={toggleTheme}
    >
      {isDarkMode ? <MdDarkMode className="dark:text-white" /> : <MdLightMode />}
    </div>
  );
};

export default ThemeSwithButton;
