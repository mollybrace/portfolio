"use client"
import React, { useState } from 'react';

const NavbarAI = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">Brand</div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="p-2 rounded-md focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
        <a href="#home" className="block mt-4 lg:mt-0 lg:inline-block lg:ml-6">Home</a>
        <a href="#about" className="block mt-4 lg:mt-0 lg:inline-block lg:ml-6">About</a>
        <a href="#services" className="block mt-4 lg:mt-0 lg:inline-block lg:ml-6">Services</a>
        <a href="#contact" className="block mt-4 lg:mt-0 lg:inline-block lg:ml-6">Contact</a>
      </div>
    </nav>
  );
};

export default NavbarAI;
