import React, { useState } from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Project from './Project/Project.jsx';

import Services from './Services/Services.jsx';
import Home from './Home/Home.jsx';
import Contact from './Contact/Contact.jsx';
import Footer from './Footer/Footer.jsx';

const Front = () => {
  const [selectedTab, setSelectedTab] = useState('All');

  return (
    <div className="pt-16 font-['Roboto']">
      <Navbar />

      <section
        id="home"
        className="min-h-screen bg-blue-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 "
      >
        <Home />
      </section>

      <section
        id="projects"
        className="bg-blue-50 px-4 sm:px-6 lg:px-8 "
      >
        <div className="max-w-7xl mx-auto">

          <Project selectedTab={selectedTab} />
        </div>
      </section>

      <section
        id="services"
        className="bg-blue-50 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <Services />
        </div>
      </section>

      <section
        id="contact"
        className="bg-blue-50 px-4 sm:px-6 lg:px-8 "
      >
        <div className="max-w-4xl mx-auto">
          <Contact />
        </div>
      </section>

      <footer className="bg-blue-50 px-4 sm:px-6 lg:px-8 pt-6 pb-10">
        <Footer />
      </footer>
    </div>
  );
};

export default Front;
