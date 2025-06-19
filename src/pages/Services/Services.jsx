import React from 'react';
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
  SiAndroidstudio,
  SiMongodb,
  SiAxios,
} from 'react-icons/si';

const techStack = [
  { name: 'HTML5', icon: <FaHtml5 size={40} color="#E34F26" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={40} color="#1572B6" /> },
  { name: 'JavaScript', icon: <FaJs size={40} color="#F7DF1E" /> },
  { name: 'PHP', icon: <FaPhp size={40} color="#8892BF" /> },
  { name: 'MySQL', icon: <SiMysql size={40} color="#4479A1" /> },
  { name: 'MongoDB', icon: <SiMongodb size={40} color="#47A248" /> },
  { name: 'React.js', icon: <FaReact size={40} color="#61DAFB" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} color="#06B6D4" /> },
  { name: 'Bootstrap', icon: <SiBootstrap size={40} color="#7952B3" /> },
  { name: 'Material UI', icon: <SiMui size={40} color="#007FFF" /> },
  { name: 'Nest.js', icon: <SiNestjs size={40} color="#E0234E" /> },
  { name: 'Express.js', icon: <SiExpress size={40} color="#000000" /> },
  { name: 'Laravel', icon: <SiLaravel size={40} color="#FF2D20" /> },
  { name: 'Python', icon: <SiPython size={40} color="#3776AB" /> },
  { name: 'jQuery', icon: <SiJquery size={40} color="#0769AD" /> },
  { name: 'Git', icon: <FaGit size={40} color="#F05032" /> },
  { name: 'GitHub', icon: <FaGithub size={40} color="#000000" /> },
  { name: 'Strapi', icon: <SiStrapi size={40} color="#8E75FF" /> },
  { name: 'Hostinger', icon: <SiHostinger size={40} color="#673DE6" /> },
  { name: 'Docker', icon: <FaDocker size={40} color="#2496ED" /> },
  { name: 'Flutter', icon: <SiFlutter size={40} color="#02569B" /> },
  {
    name: 'Android Studio',
    icon: (
      <img
        src="/assets/images/as.png"
        alt="Android Studio"
        className="w-10 h-10 object-contain"
      />
    ),
  },
  { name: 'AJAX', icon: <SiAxios size={40} color="#5A29E4" /> },
];

const Services = () => {
  return (
 <section id="services" className="bg-blue-50 bg-grid-light py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-gray-900 hover:text-cyan-500 transition-colors">
      My Tech Stack
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {techStack.map((tech, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
        >
          <div className="mb-3">{tech.icon}</div>
          <p className="text-sm font-semibold text-gray-800 text-center">{tech.name}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Services;
