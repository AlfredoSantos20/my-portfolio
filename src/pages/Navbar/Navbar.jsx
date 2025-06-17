import React, { useEffect, useState } from 'react';
import { FaHome, FaProjectDiagram, FaServicestack, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-blue-50/30 backdrop-blur-md shadow-md z-50">
        <div
          className="h-1 bg-teal-500 transition-all duration-75"
          style={{ width: `${scrollWidth}%` }}
        ></div>

       
        <div className="container mx-auto hidden md:flex justify-center items-center px-4 py-6">
          <div className="space-x-6">
            <a href="#home" className="text-gray-600 hover:text-teal-500 font-bold">
              Home
            </a>
            <a href="#projects" className="text-gray-600 hover:text-teal-500 font-bold">
              Projects
            </a>
            <a href="#services" className="text-gray-600 hover:text-teal-500 font-bold">
              Services
            </a>
            <a href="#contact" className="text-gray-600 hover:text-teal-500 font-bold">
              Contact Me
            </a>
          </div>
        </div>
      </nav>

    
      <div className="fixed bottom-0 w-full bg-white shadow-inner flex justify-around items-center py-3 border-t border-gray-200 md:hidden z-50">
        <a href="#home" className="flex flex-col items-center text-xs text-gray-700 hover:text-teal-500">
          <FaHome size={20} />
          Home
        </a>
        <a href="#projects" className="flex flex-col items-center text-xs text-gray-700 hover:text-teal-500">
          <FaProjectDiagram size={20} />
          Projects
        </a>
        <a href="#services" className="flex flex-col items-center text-xs text-gray-700 hover:text-teal-500">
          <FaServicestack size={20} />
          Services
        </a>
        <a href="#contact" className="flex flex-col items-center text-xs text-gray-700 hover:text-teal-500">
          <FaEnvelope size={20} />
          Contact
        </a>
      </div>
    </>
  );
};

export default Navbar;
