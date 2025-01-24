import React from "react";
import Todologo from "../assets/Todologo.png";
const Navbar = () => {
  return (
    <nav className="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 justify-between text-white flex ">
      <div className="logo">
        <img className="w-12 h-12 flex mx-5" src={Todologo} alt="" />
      </div>
      <ul className="flex gap-6 mx-9 m-3">
        <li className="cursor-pointer hover:font-bold transition-all"> Home 💺 </li>
        <li className="cursor-pointer hover:font-bold transition-all"> About 😎 </li>
        <li className="cursor-pointer hover:font-bold transition-all"> Work 💼 </li>
      </ul>
    </nav>
  );
};

export default Navbar;
