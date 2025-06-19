import React, { useEffect, useState } from 'react';
import {
  FaHome,
  FaProjectDiagram,
  FaServicestack,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);

      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPercent = (scrollTop / docHeight) * 100;
      setScrollWidth(scrolledPercent);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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

  const githubURL = import.meta.env.VITE_GITHUB_URL;
  const facebookURL = import.meta.env.VITE_FACEBOOK_URL;
  const instagramURL = import.meta.env.VITE_INSTAGRAM_URL;
  const linkedinURL = import.meta.env.VITE_LINKEDIN_URL;

  return (
    <>
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 w-full h-1 bg-cyan-400 transition-all duration-75 z-[60]"
        style={{ width: `${scrollWidth}%` }}
      />

      {/* Desktop Navbar */}
      <motion.div
        data-aos="fade-down"
        animate={{
          y: scrolled ? 16 : 0,
          width: scrolled ? '65%' : '100%',
          borderRadius: scrolled ? '9999px' : '0px',
          boxShadow: scrolled
            ? '0 10px 30px rgba(0,0,0,0.1)'
            : 'none',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 30 }}
        className="hidden md:flex fixed top-0 left-1/2 transform -translate-x-1/2 z-50 items-center justify-center px-8 py-4 bg-blue-50/30 backdrop-blur-md"
      >
        <div className="flex items-center justify-between w-[90%] mx-auto gap-6">
          <div className="flex-shrink-0">
            <img
              src="/assets/images/mylogs.png"
              alt="Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>

          <div className="space-x-6 text-center">
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

          <div className="flex items-center space-x-4 text-gray-600">
            <a
              href={githubURL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-500"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={facebookURL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-500"
            >
              <FaFacebookF size={18} />
            </a>
            <a href={instagramURL} target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </a>
            <a
              href={linkedinURL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-500"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Mobile Navbar */}
      <div
        data-aos="fade-down"
        className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] bg-blue-50/30 backdrop-blur-md shadow-xl border border-gray-200 rounded-2xl flex justify-around items-center py-3 px-2 md:hidden z-50"
      >
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
