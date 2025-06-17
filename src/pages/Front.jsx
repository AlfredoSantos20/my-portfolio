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

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen bg-blue-50 flex items-center justify-center px-4 sm:px-6 md:px-10"
      >
        <div className="w-full max-w-7xl mx-auto">
          <Home />
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="bg-blue-50 px-4 sm:px-6 md:px-10"
      >
        <div className="max-w-7xl mx-auto">
          <Project selectedTab={selectedTab} />
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="bg-blue-50 px-4 sm:px-6 md:px-10"
      >
        <div className="max-w-7xl mx-auto">
          <Services />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-blue-50 px-4 sm:px-6 md:px-10"
      >
        <div className="max-w-4xl mx-auto">
          <Contact />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-50 px-4 sm:px-6 md:px-10 pt-6 pb-10">
        <Footer />
      </footer>
    </div>
  );
};

export default Front;
