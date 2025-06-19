import React, { useState } from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Project from './Project/Project.jsx';
import Services from './Services/Services.jsx';
import Home from './Home/Home.jsx';
import Contact from './Contact/Contact.jsx';
import Footer from './Footer/Footer.jsx';
import '../../public/assets/styles/global.css';
import { useAOS } from '../hooks/useAOS.js';

const Front = () => {
  const [selectedTab, setSelectedTab] = useState('All');
 useAOS({ duration: 1500 });
  return (
    <div className="pt-10 sm:pt-16 font-['Roboto'] overflow-hidden bg-grid-light">
      <Navbar />

      {/* Home Section */}
      <section id="home" className="min-h-[calc(100vh-2.5rem)] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10">
        <div className="w-full max-w-7xl mx-auto ">
          <Home />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-4 sm:px-6 md:px-10">
        <div data-aos="fade-up" className="max-w-7xl mx-auto">
          <Project selectedTab={selectedTab} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 sm:px-6 md:px-10">
        <div data-aos="fade-up" className="max-w-7xl mx-auto">
          <Services />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 sm:px-6 md:px-10">
        <div data-aos="fade-up" className="max-w-4xl mx-auto">
          <Contact />
        </div>
      </section>

      {/* Footer */}
      <footer data-aos="fade-up" className="px-4 sm:px-6 md:px-10 pt-6 pb-10">
        <Footer />
      </footer>
    </div>
  );
};

export default Front;
