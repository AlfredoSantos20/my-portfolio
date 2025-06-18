import React, { useEffect, useState } from 'react';
import {
  FaHome,
  FaProjectDiagram,
  FaServicestack,
  FaEnvelope,
} from 'react-icons/fa';

const Navbar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
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
      activeSection === id
        ? 'text-cyan-500'
        : 'text-gray-600 hover:text-cyan-400'
    }`;

  const mobileLinkClass = (id) =>
    `flex flex-col items-center justify-center text-[11px] font-medium gap-1 px-4 py-2 rounded-xl transition duration-300 ${
      activeSection === id
        ? 'bg-cyan-100 text-cyan-500 shadow-sm'
        : 'text-gray-600 hover:text-cyan-400'
    }`;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-blue-50/30 backdrop-blur-md shadow-md z-50">
        <div
          className="h-1 bg-cyan-400 transition-all duration-75"
          style={{ width: `${scrollWidth}%` }}
        ></div>

        <div className="container mx-auto hidden md:flex justify-center items-center px-4 py-6">
          <div className="space-x-6">
            <a href="#home" className={linkClass('home')}>
              Home
            </a>
            <a href="#projects" className={linkClass('projects')}>
              Projects
            </a>
            <a href="#services" className={linkClass('services')}>
              Services
            </a>
            <a href="#contact" className={linkClass('contact')}>
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] bg-white shadow-xl border border-gray-200 rounded-2xl flex justify-around items-center py-3 px-2 md:hidden z-50">
        <a
          href="#home"
          onClick={() => setActiveSection('home')}
          className={mobileLinkClass('home')}
        >
          <FaHome size={20} />
          Home
        </a>
        <a
          href="#projects"
          onClick={() => setActiveSection('projects')}
          className={mobileLinkClass('projects')}
        >
          <FaProjectDiagram size={20} />
          Projects
        </a>
        <a
          href="#services"
          onClick={() => setActiveSection('services')}
          className={mobileLinkClass('services')}
        >
          <FaServicestack size={20} />
          Services
        </a>
        <a
          href="#contact"
          onClick={() => setActiveSection('contact')}
          className={mobileLinkClass('contact')}
        >
          <FaEnvelope size={20} />
          Contact
        </a>
      </div>
    </>
  );
};

export default Navbar;
