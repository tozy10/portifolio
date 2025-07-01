// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaInstagram,FaGithub } from 'react-icons/fa'; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <div className="hidden md:flex space-x-6"> {/* Space for social media icons on larger screens */}
          <a href="https://www.facebook.com/ernest.tozy/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.linkedin.com/in/ernest-tsvangirai" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaLinkedin size={24} />
          </a>
          <a href="https://instagram.com/ernest_tadiwa" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://github.com/tozy10" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaGithub size={24} />
          </a>
          <div className="text-lg font-semibold hidden md:block">
          <a href="tel:+263784525565" className="hover:text-yellow-400">
            📞 +263784525565
          </a>
        </div>
        </div>

        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <ul className={`flex space-x-6 md:flex ${isOpen ? 'flex' : 'hidden'} md:block`}>
          <li><a href="#home" className="hover:text-yellow-400 transition-all">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400 transition-all">About</a></li>
          <li><a href="#skills" className="hover:text-yellow-400 transition-all">Skills</a></li>
          <li><a href="#education" className="hover:text-yellow-400 transition-all">Education</a></li>
          <li><a href="#projects" className="hover:text-yellow-400 transition-all">Projects</a></li>
          <li><a href="#contact" className="hover:text-yellow-400 transition-all">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
