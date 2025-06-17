import React from 'react';
import { FaArrowUp, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-sm text-gray-700 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        <div>
          <h2 className="text-xl font-bold text-teal-600">
            Portfolio<span className="text-teal-800">.</span>
          </h2>
          <p className="mt-1 text-gray-600 text-sm">
            Creating exceptional digital experiences.
          </p>
        </div>

        <div>
          <a
            href="#home"
            className="bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full shadow-md transition flex items-center justify-center"
            title="Back to top"
            style={{ width: '44px', height: '44px' }}
          >
            <FaArrowUp className="w-4 h-4" />
          </a>
        </div>

        <div>
          <p className="text-sm text-gray-600">
            Made with <FaHeart className="inline text-red-500" /> in 2025
          </p>
          <p className="text-xs text-gray-500 mt-1">
            © 2025 Alfredo Santos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
