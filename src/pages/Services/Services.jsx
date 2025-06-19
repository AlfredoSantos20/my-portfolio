"use client";

import React from "react";
import { cn } from "../../lib/utils.js";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaDocker, FaGit, FaGithub,
} from "react-icons/fa";
import {
  SiMysql, SiTailwindcss, SiBootstrap, SiMui, SiNestjs, SiJquery,
  SiLaravel, SiPython, SiExpress, SiStrapi, SiFlutter, SiHostinger,
  SiAndroidstudio, SiMongodb, SiAxios,
} from "react-icons/si";

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

const Services = ({ className }) => {
  const chunkSize = Math.ceil(techStack.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return techStack.slice(start, start + chunkSize);
  });

  return (
    <section id="services" className="bg-blue-50 bg-grid-light py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white hover:text-cyan-500 transition-colors">
          My Tech Stack
        </h2>
        <p className="mt-2 text-gray-500 dark:text-gray-300 text-sm">
          A collection of tools and technologies I frequently use.
        </p>
      </div>

      <div className={cn("mx-auto block overflow-hidden rounded-2xl", className)}>
        <div className="flex w-full items-center justify-center">
          <div className="max-w-[1300px] shrink-0 scale-90 sm:scale-100">
            <div
              style={{ transform: "rotateX(35deg) rotateY(0deg) rotateZ(-25deg)" }}
              className="relative top-0 left-0 grid size-full origin-center grid-cols-4 gap-8 transform-3d"
            >
              {chunks.map((column, colIndex) => (
                <motion.div
                  animate={{ y: colIndex % 2 === 0 ? 80 : -80 }}
                  transition={{
                    duration: colIndex % 2 === 0 ? 10 : 12,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  key={colIndex + "marquee"}
                  className="flex flex-col items-center gap-8"
                >
                  {column.map((icon, iconIndex) => (
                    <motion.div
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      key={iconIndex}
                      className="rounded-xl ring ring-gray-200 hover:ring-cyan-500 hover:shadow-xl transition-all bg-white w-[70px] h-[70px] flex items-center justify-center"
                    >
                      {icon}
                    </motion.div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
