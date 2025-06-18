import React, { useState } from 'react';
import Button from '../../components/Button.jsx';
import { FaDownload } from 'react-icons/fa6';
import { Typewriter } from 'react-simple-typewriter';

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
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col-reverse md:flex-row items-center justify-center gap-10">
      <div className="flex-1 text-center md:text-left">
        <p className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
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

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 hover:bg-gradient-to-r from-cyan-400 to-blue-500 hover:bg-clip-text hover:text-transparent transition-colors duration-300">
          Back-end Developer
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-xl mx-auto md:mx-0">
          Let's transform your ideas into a powerful digital reality. I specialize in building scalable, efficient systems that bring innovation to life and meet real-world needs.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full sm:w-auto">
          <Button
            href="#projects"
            text="View My Work"
            variant="solid"
            className="w-full sm:w-auto bg-gradient-to-r from-cyan-400 to-blue-500 text-white"
          />
          <Button
            href="#"
            text={hasDownloaded ? 'Downloaded' : 'Download CV'}
            icon={<FaDownload />}
            variant="outline"
            disabled={hasDownloaded}
            onClick={handleDownload}
            className="w-full sm:w-auto"
          />
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-3 sm:p-4 rounded-3xl shadow-xl group max-w-[280px] sm:max-w-[340px] md:max-w-[400px] w-full">
          <img
            src="/assets/images/me2.jpg"
            alt="Alfredo"
            className="rounded-3xl w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
