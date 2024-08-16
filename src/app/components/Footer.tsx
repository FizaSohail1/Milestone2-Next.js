import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className=" text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="font-bold text-lg">Fiza Sohail</h3>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/fiza-sohail-291a342b9/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/FizaSohail1" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
