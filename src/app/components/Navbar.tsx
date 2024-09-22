'use client';
import { FaBars } from "react-icons/fa";
import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = (): void => {
    setIsClick(!isClick);
  };

  return (
    <nav className="bg-neutral-800">
      <div className="max-w-7xl mx-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-white font-bold md:text-2xl">Portfolio</a>
            </div>
          </div>
          <div className="hidden md:flex md:flex-1 md:justify-center">
            <div className="flex space-x-4 md:text-md md:space-x-8">
              <a href="/" className="text-white hover:text-orange-700">Home</a>
              <a href="/about" className="text-white hover:text-orange-700">About</a>
              <a href="/contact" className="text-white hover:text-orange-700">Contact</a>
             
            </div>
          </div>
          <div className="hidden md:block">
             <div className="flex mt-5 space-x-6">
                        <a href="https://www.linkedin.com/in/fiza-sohail-291a342b9/" className="text-blue-500 hover:text-blue-800 text-4xl"><FaLinkedin /></a>
                        <a
                         href="https://github.com/FizaSohail1"
                         className="text-gray-300 hover:text-gray-500 text-4xl">
                        <FaGithub />
                         </a>
                        </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-inset"
              onClick={toggleNavbar}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {isClick && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-orange-700">
            Home
          </a>
          <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-orange-700">
            About
          </a>
          <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-orange-700">
            Contact
          </a>
          <a href="https://www.linkedin.com/in/fiza-sohail-291a342b9/" className="text-blue-500 hover:text-blue-800 px-3 py-2 rounded-md font-medium block text-3xl"><FaLinkedin />
          </a>
          <a
          href="https://github.com/FizaSohail1"
          className="text-gray-300 hover:text-gray-500 px-3 py-2 rounded-md  font-medium block text-3xl">
          <FaGithub />
          </a>
          
        </div>
      )}
    </nav>
  )
}

export default Navbar
