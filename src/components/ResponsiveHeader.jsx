"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="flex items-center justify-between h-18">
        <div className="flex items-center text-white p-4">
          <Link to={"/"}>Logo</Link>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center space-x-4 p-4 text-white">
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Services</Link>
            <Link>Contact</Link>
          </div>
        </div>
        <div className="flex md:hidden p-4">
          <button onClick={toggleMenu} className="text-white">
            <h1 className={isOpen ? "block" : "hidden"}>Menu</h1>
            <h1 className={isOpen ? "hidden" : "block"}>Menu</h1>
          </button>
        </div>
      </div>
      <div className={isOpen ? "block md:hidden" : "hidden md:hidden"}>
        <div className="p-4 space-y-1 flex flex-col text-white">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Services</Link>
          <Link>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
