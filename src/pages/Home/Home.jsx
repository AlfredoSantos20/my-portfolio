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
    <div className="max-w-7xl w-full px-4 sm:px-6 md:px-10 flex flex-col md:flex-row items-center gap-10">
      {/* LEFT SIDE */}
      <div className="flex-1 text-left">
        <p className="text-lg sm:text-xl font-semibold text-teal-500">
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

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mt-2 hover:text-teal-500 transition-colors duration-300">
          Back-end Developer
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-xl">
          Let's transform your ideas into a powerful digital reality. I specialize in building scalable, efficient systems that bring innovation to life and meet real-world needs.
        </p>

        <div className="mt-6 flex flex-col xs:flex-row sm:flex-row gap-4 w-full max-w-xs sm:max-w-none">
          <Button
            href="#projects"
            text="View My Work"
            variant="solid"
            className="w-full sm:w-auto"
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

      {/* RIGHT SIDE */}
      <div className="flex-1 flex justify-center">
        <div className="bg-teal-500 p-3 sm:p-4 rounded-3xl shadow-lg group cursor-pointer max-w-[300px] sm:max-w-[350px] md:max-w-[400px] w-full">
          <img
            src="/assets/images/me2.jpg"
            alt="Alfredo"
            className="rounded-3xl w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110 group-active:scale-125"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
