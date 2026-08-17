import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/Button.jsx';
import { FaDownload } from 'react-icons/fa6';
import { Typewriter } from 'react-simple-typewriter';
import ProfileCard from '../../components/ProfileCard/ProfileCard.jsx';

const Home = () => {
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 639px)');

    const handleMediaChange = (event) => {
      setIsMobile(event.matches);
    };

    // Set initial value
    setIsMobile(mediaQuery.matches);

    // Listen for screen size changes
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

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

        {/* Cyan blob */}
        <div
          className="
            absolute
            top-10
            left-10
            w-96
            h-96
            bg-cyan-200
            dark:bg-[#06B6D4]
            rounded-full
            mix-blend-multiply
            dark:mix-blend-screen
            filter
            blur-xl
            opacity-10
            animate-blob
          "
        />

        {/* Blue blob */}
        <div
          className="
            absolute
            bottom-10
            right-10
            w-96
            h-96
            bg-blue-200
            dark:bg-[#3B82F6]
            rounded-full
            mix-blend-multiply
            dark:mix-blend-screen
            filter
            blur-xl
            opacity-10
            animate-blob
            animation-delay-2000
          "
        />

      </div>

      {/* ========================================
          LEFT CONTENT
      ======================================== */}

      <div className="flex-1 text-center md:text-left relative z-10">

        {/* Introduction */}
        <p
          data-aos="slide-right"
          className="
            text-lg
            sm:text-xl
            font-semibold
            bg-gradient-to-r
            from-cyan-400
            to-blue-500
            dark:from-[#06B6D4]
            dark:to-[#3B82F6]
            bg-clip-text
            text-transparent
            mb-2
            font-['Poppins']
          "
        >
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

        {/* Main Heading */}
        <h1
          data-aos="slide-right"
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-extrabold
            text-gray-900
            dark:text-[#F8FAFC]
            hover:bg-gradient-to-r
            hover:from-cyan-400
            hover:to-blue-500
            dark:hover:from-[#06B6D4]
            dark:hover:to-[#3B82F6]
            hover:bg-clip-text
            hover:text-transparent
            transition-all
            duration-500
            font-['Poppins']
          "
        >
          Full Stack Developer
        </h1>

        {/* Description */}
        <p
          data-aos="slide-right"
          className="
            mt-4
            sm:mt-6
            text-base
            sm:text-lg
            text-gray-700
            dark:text-[#A8B5C7]
            max-w-xl
            mx-auto
            md:mx-0
            leading-relaxed
            font-['Poppins']
          "
        >
          Let's transform your ideas into a powerful digital reality. I
          specialize in building scalable, efficient systems that bring
          innovation to life and meet real-world needs.
        </p>

        {/* ========================================
            BUTTONS
            Desktop: From Left
            Mobile: From Bottom
        ======================================== */}

        <motion.div
          className="
            mt-8
            flex
            flex-col
            sm:flex-row
            gap-4
            justify-center
            md:justify-start
            w-full
            sm:w-auto
          "
          initial={{
            opacity: 0,

            // Desktop / tablet
            x: isMobile ? 0 : -60,

            // Mobile
            y: isMobile ? 60 : 0,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* View My Work */}
          <Button
            href="#projects"
            text="View My Work"
            variant="solid"
            className="
              w-full
              sm:w-auto
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              dark:from-[#06B6D4]
              dark:to-[#3B82F6]
              text-white
              hover:from-cyan-500
              hover:to-blue-600
              dark:hover:from-[#22D3EE]
              dark:hover:to-[#3B82F6]
              shadow-lg
              shadow-cyan-500/30
              hover:shadow-xl
              hover:shadow-cyan-500/40
              transition-all
              duration-300
              font-['Poppins']
            "
          />

          {/* Download CV */}
          <Button
            href="#"
            text={hasDownloaded ? 'Downloaded' : 'Download CV'}
            icon={<FaDownload />}
            variant="outline"
            disabled={hasDownloaded}
            onClick={handleDownload}
            className="
              w-full
              sm:w-auto
              border-2
              border-cyan-400
              dark:border-[#06B6D4]
              text-cyan-600
              dark:text-[#06B6D4]
              hover:bg-cyan-50
              dark:hover:bg-[#0A1728]
              hover:border-cyan-500
              dark:hover:border-[#22D3EE]
              transition-all
              duration-300
              font-['Poppins']
            "
          />

        </motion.div>
      </div>

      {/* ========================================
          PROFILE CARD
      ======================================== */}

      <div className="flex-1 flex justify-center relative z-10">

        <div
          data-aos="slide-left"
          className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px]"
        >
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
            onContactClick={() =>
              window.open(
                'https://web.facebook.com/tazki.santosjr',
                '_blank',
                'noopener,noreferrer'
              )
            }
          />
        </div>

      </div>

    </div>
  );
};

export default Home;