import React from 'react';
import { FaArrowUp, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-50 via-white to-gray-50 text-sm text-gray-700 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-['Poppins']">
            Portfolio<span className="text-blue-600">.</span>
          </h2>
          <p className="mt-2 text-gray-600 text-base font-['Poppins']">
            Creating exceptional digital experiences.
          </p>
        </div>

        <div>
          <a
            href="#home"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white p-3 rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-110 transition-all duration-300 flex items-center justify-center"
            title="Back to top"
            style={{ width: '50px', height: '50px' }}
          >
            <FaArrowUp className="w-5 h-5" />
          </a>
        </div>

        <div className="pt-4 border-t border-gray-200 w-full max-w-md">
          <p className="text-sm text-gray-600 font-['Poppins']">
              © 2025 Alfredo Santos. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2 font-['Poppins']">
            Made with <FaHeart className="inline text-red-500 animate-pulse" /> in 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
