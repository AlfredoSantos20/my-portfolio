import React from 'react';
import DomeGallery from '../../components/DomeGallery/DomeGallery.jsx';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaReact,
  FaDocker,
  FaGit,
  FaGithub,
} from 'react-icons/fa';
import {
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiNestjs,
  SiJquery,
  SiLaravel,
  SiPython,
  SiExpress,
  SiStrapi,
  SiFlutter,
  SiHostinger,
  SiMongodb,
  SiAxios,
} from 'react-icons/si';

const images = [
  { src: 'https://cdn.simpleicons.org/amazonaws', alt: 'AWS' },
  { src: 'https://cdn.simpleicons.org/react', alt: 'React' },
  { src: 'https://cdn.simpleicons.org/react', alt: 'React Native' },

  'https://cdn.simpleicons.org/html5',
  'https://cdn.simpleicons.org/css3',
  'https://cdn.simpleicons.org/javascript',
  'https://cdn.simpleicons.org/php',
  'https://cdn.simpleicons.org/mysql',
  'https://cdn.simpleicons.org/mongodb',
  'https://cdn.simpleicons.org/react',
  'https://cdn.simpleicons.org/tailwindcss',
  'https://cdn.simpleicons.org/bootstrap',
  'https://cdn.simpleicons.org/mui',
  'https://cdn.simpleicons.org/nestjs',
  'https://cdn.simpleicons.org/express',
  'https://cdn.simpleicons.org/laravel',
  'https://cdn.simpleicons.org/python',
  'https://cdn.simpleicons.org/jquery',
  'https://cdn.simpleicons.org/git',
  'https://cdn.simpleicons.org/github',
  'https://cdn.simpleicons.org/strapi',
  'https://cdn.simpleicons.org/hostinger',
  'https://cdn.simpleicons.org/docker',
  'https://cdn.simpleicons.org/flutter',
  'https://cdn.simpleicons.org/awsamplify',
  'https://cdn.simpleicons.org/amazonaws',
  '/assets/images/as.png',
  'https://cdn.simpleicons.org/axios',
];

// Original mobile tech stack (scrolling columns)
const techStack = [
  <FaHtml5 size={40} color="#E34F26" aria-label="HTML5" />,
  <FaCss3Alt size={40} color="#1572B6" aria-label="CSS3" />,
  <FaJs size={40} color="#F7DF1E" aria-label="JavaScript" />,
  <FaPhp size={40} color="#8892BF" aria-label="PHP" />,
  <SiMysql size={40} color="#4479A1" aria-label="MySQL" />,
  <SiMongodb size={40} color="#47A248" aria-label="MongoDB" />,
  <FaReact size={40} color="#61DAFB" aria-label="React" />,
  <SiTailwindcss size={40} color="#06B6D4" aria-label="Tailwind CSS" />,
  <SiBootstrap size={40} color="#7952B3" aria-label="Bootstrap" />,
  <SiMui size={40} color="#007FFF" aria-label="Material UI" />,
  <SiNestjs size={40} color="#E0234E" aria-label="NestJS" />,
  <SiExpress size={40} color="#000000" aria-label="ExpressJS" />,
  <SiLaravel size={40} color="#FF2D20" aria-label="Laravel" />,
  <SiPython size={40} color="#3776AB" aria-label="Python" />,
  <SiJquery size={40} color="#0769AD" aria-label="jQuery" />,
  <FaGit size={40} color="#F05032" aria-label="Git" />,
  <FaGithub size={40} color="#000000" aria-label="GitHub" />,
  <SiStrapi size={40} color="#8E75FF" aria-label="Strapi" />,
  <SiHostinger size={40} color="#673DE6" aria-label="Hostinger" />,
  <FaDocker size={40} color="#2496ED" aria-label="Docker" />,
  <SiFlutter size={40} color="#02569B" aria-label="Flutter" />,
  <img
    src="/assets/images/as.png"
    alt="Android Studio"
    title="Android Studio"
    className="w-10 h-10 object-contain"
  />,
  <SiAxios size={40} color="#5A29E4" aria-label="Axios" />,
];

const MobileTechStack = () => {
  const chunkSize = Math.ceil(techStack.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return techStack.slice(start, start + chunkSize);
  });

  return (
    <div className="w-full px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 dark:from-[#06B6D4] dark:via-[#3B82F6] dark:to-[#06B6D4] bg-clip-text text-transparent font-['Poppins']">
          My Tech Stack
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-[#06B6D4] dark:to-[#3B82F6] mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="flex w-full items-center justify-center">
        <div className="max-w-[1100px] shrink-0">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {chunks.map((column, colIndex) => (
              <div
                key={colIndex}
                className="relative h-[300px] sm:h-[340px] w-[68px] sm:w-[78px] overflow-hidden"
              >
                <motion.div
                  animate={{ y: ['0%', '-50%'] }}
                  transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
                  className="flex flex-col gap-5 justify-center"
                  style={{ willChange: 'transform' }}
                >
                  {[...column, ...column].map((icon, iconIndex) => (
                    <div
                      key={`${colIndex}-${iconIndex}`}
                      className="p-[2px] bg-gradient-to-br from-white to-gray-50 dark:from-[#06101E] dark:to-[#0A1728] rounded-xl w-[58px] sm:w-[66px] h-[58px] sm:h-[66px] flex items-center justify-center shadow-md shadow-gray-200/40 dark:shadow-[#183653]/40"
                    >
                      <div className="w-full h-full rounded-xl ring-2 ring-gray-200 dark:ring-[#183653] bg-white dark:bg-[#06101E] flex items-center justify-center">
                        {icon}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Services() {
  return (
    <section
      id="services"
      className="w-full"
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        paddingTop: '96px',
        overflow: 'hidden',
        margin: '0 auto',
      }}
    >
      {/* Mobile: original tech stack */}
      <div className="block md:hidden w-full">
        <MobileTechStack />
      </div>

      {/* Desktop and up: Dome gallery */}
      <div className="hidden md:block w-full">
        <div className="max-w-7xl mx-auto text-center mb-4">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 dark:from-[#06B6D4] dark:via-[#3B82F6] dark:to-[#06B6D4] bg-clip-text text-transparent font-['Poppins']">
            My Tech Stack
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-[#06B6D4] dark:to-[#3B82F6] mx-auto mt-3 rounded-full"></div>
        </div>
      </div>
      <div
        className="hidden md:block w-full"
        style={{
          width: '100%',
          height: 'calc(100vh - 96px)',
        }}
      >
        <DomeGallery
          images={images}
          grayscale={false}
          fitBasis="min"
          overlayBlurColor="transparent"
          autoRotateSpeed={2.0}
        />
      </div>
    </section>
  );
}