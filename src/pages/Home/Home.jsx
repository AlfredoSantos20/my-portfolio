import React, { useState } from 'react';
import Button from '../../components/Button.jsx';
import { FaDownload } from 'react-icons/fa6';
import { Typewriter } from 'react-simple-typewriter';
import ProfileCard from '../../components/ProfileCard/ProfileCard.jsx';

const Home = () => {
  const [hasDownloaded, setHasDownloaded] = useState(false);

  const handleDownload = () => {
    if (!hasDownloaded) {
      const link = document.createElement('a');
      link.href = '/assets/files/Alfredo.pdf';
      link.download = 'Alfredo.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setHasDownloaded(true);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col-reverse md:flex-row items-center justify-center gap-10 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="flex-1 text-center md:text-left relative z-10">
        <p data-aos="slide-right" className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 font-['Poppins']">
          <Typewriter
            words={["Hey, I'm Alfredo B. Santos Jr."]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={5000}
          />
        </p>

        <h1 data-aos="slide-right" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 hover:bg-gradient-to-r from-cyan-400 to-blue-500 hover:bg-clip-text hover:text-transparent transition-all duration-500 font-['Poppins']">
          Full Stack Developer
        </h1>

        <p data-aos="slide-right" className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-xl mx-auto md:mx-0 leading-relaxed font-['Poppins']">
          Let's transform your ideas into a powerful digital reality. I specialize in building scalable, efficient systems that bring innovation to life and meet real-world needs.
        </p>

        <div data-aos="slide-right" className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full sm:w-auto">
          <Button
            href="#projects"
            text="View My Work"
            variant="solid"
            className="w-full sm:w-auto bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600 shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 font-['Poppins']"
          />
          <Button
            href="#"
            text={hasDownloaded ? 'Downloaded' : 'Download CV'}
            icon={<FaDownload />}
            variant="outline"
            disabled={hasDownloaded}
            onClick={handleDownload}
            className="w-full sm:w-auto border-2 border-cyan-400 text-cyan-600 hover:bg-cyan-50 hover:border-cyan-500 transition-all duration-300 font-['Poppins']"
          />
        </div>
      </div>

      <div className="flex-1 flex justify-center relative z-10">
        <div data-aos="slide-left" className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px]">
          <ProfileCard
            name="Alfredo B. Santos Jr."
            title="Full Stack Developer"
            handle="tazki.santosjr"
            status="Facebook"
            contactText="Contact Me"
            avatarUrl="/me2.jpg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => window.open('https://web.facebook.com/tazki.santosjr','_blank','noopener,noreferrer')}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
