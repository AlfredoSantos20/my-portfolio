import React, { useEffect, useState } from 'react';
import { FaHome, FaProjectDiagram, FaServicestack, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollWidth(scrolled);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const linkClass = (id) =>
    `font-bold transition ${
      activeSection === id ? 'text-teal-600' : 'text-gray-600 hover:text-teal-500'
    }`;

  const mobileLinkClass = (id) =>
    `flex flex-col items-center text-xs transition ${
      activeSection === id ? 'text-teal-600' : 'text-gray-700 hover:text-teal-500'
    }`;

  return (
    <>
      {/* Top Nav */}
      <nav className="fixed top-0 left-0 w-full bg-blue-50/30 backdrop-blur-md shadow-md z-50">
        <div
          className="h-1 bg-teal-500 transition-all duration-75"
          style={{ width: `${scrollWidth}%` }}
        ></div>

        <div className="container mx-auto hidden md:flex justify-center items-center px-4 py-6">
          <div className="space-x-6">
            <a href="#home" className={linkClass('home')}>Home</a>
            <a href="#projects" className={linkClass('projects')}>Projects</a>
            <a href="#services" className={linkClass('services')}>Services</a>
            <a href="#contact" className={linkClass('contact')}>Contact Me</a>
          </div>
        </div>
      </nav>

      {/* Bottom Mobile Nav */}
      <div className="fixed bottom-0 w-full bg-white shadow-inner flex justify-around items-center py-3 border-t border-gray-200 md:hidden z-50">
        <a href="#home" className={mobileLinkClass('home')}>
          <FaHome size={20} />
          Home
        </a>
        <a href="#projects" className={mobileLinkClass('projects')}>
          <FaProjectDiagram size={20} />
          Projects
        </a>
        <a href="#services" className={mobileLinkClass('services')}>
          <FaServicestack size={20} />
          Services
        </a>
        <a href="#contact" className={mobileLinkClass('contact')}>
          <FaEnvelope size={20} />
          Contact
        </a>
      </div>
    </>
  );
};

export default Navbar;
