import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { FaArrowUpRightFromSquare, FaXmark } from 'react-icons/fa6';
import '../../../public/assets/styles/global.css';

const allProjects = [
  {
    title: 'Aurum Platform Web',
    description:
      'Aurum Platform Web is a sophisticated blockchain-based platform that enables users to swap their Quantum Metal Gold Tokens (QMGT) for USDT easily and securely. The platform ensures complete transparency, stability, and liquidity in token holdings with each transaction. It features real-time token price tracking, secure wallet integration, transaction history, and comprehensive portfolio management tools. Built with Strapi for content management and TypeScript for type-safe development, the platform leverages blockchain technology to provide a decentralized, trustless exchange experience. Users can monitor their token balances, execute swaps with minimal fees, and track all transactions on the blockchain for complete transparency and auditability.',
    tech: ['Strapi', 'Type Script', 'Blockchain'],
    image: '/assets/images/aurumweb.png',
    type: 'web',
    link: 'https://app.aurumplatform.io/',
  },
  {
    title: 'Aurum Crypto P2P',
    description:
      'Aurum, CryptoP2P is the next-generation platform for fast, secure, and borderless peer-to-peer crypto transactions in the Philippines. The platform enables users to buy and sell cryptocurrencies directly with each other, eliminating the need for traditional exchanges. It features an intuitive interface for creating and managing trade offers, secure escrow services, real-time chat communication between buyers and sellers, and comprehensive transaction history. Built with modern technologies including React.js for the frontend and Nest.js for the backend, the platform ensures secure, transparent, and efficient peer-to-peer trading experiences with robust API documentation via Swagger.',
    tech: ['React js', 'Nest js', 'Swagger'],
    image: '/assets/images/p2pImg2.png',
    type: 'web',
    link: 'https://www.cryptop2p.ph/',
  },
  {
  title: 'Lucid Media Website',
  description:
    'Lucid Media is a modern, conversion-focused digital agency website designed to showcase high-quality content production services and scalable digital solutions for brands. The platform highlights service offerings such as video editing, content automation, and social media growth systems, while guiding users through a seamless inquiry and onboarding process. It features a clean and responsive UI, engaging animations, and strategically placed call-to-action sections to maximize lead generation. Built with React.js and Tailwind CSS for a fast and responsive frontend experience, and powered by a Node.js backend for handling inquiries and integrations, the platform delivers a high-performance web presence tailored for content-driven businesses.',
  tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Framer Motion', 'Responsive Design', 'Lead Generation'],
  image: '/assets/images/lucid-media.jpg',
  type: 'web',
  link: 'https://lucidmedia.info',
},
  {
    title: 'MJA ComTech & I.T. Solutions',
    description:
      'MJA ComTech & I.T. Solutions is a fast and reliable fiber internet provider platform that showcases residential and business fiber plans with a modern, conversion-focused landing page. The site allows users to explore coverage areas, view detailed plan information, and submit applications or inquiries through an integrated application form. It features a real-time chat system for instant customer support, responsive layout across devices, and clear call-to-action flows to guide users from browsing to applying. Built with React.js and Tailwind CSS on the frontend and Express.js with MySQL on the backend, and hosted on Hostinger, the platform delivers a performant and scalable web experience for an ISP brand.',
    tech: ['React.js', 'Tailwind CSS', 'Express.js', 'Hostinger', 'MySQL', 'Real-time Chat', 'Online Application'],
    image: '/assets/images/mja.jpg',
    type: 'web',
    link: 'https://www.mjatechsolutions.online/',
  },
  {
    title: 'Tourista App',
    description:
      'Tourista is a comprehensive mobile application designed to assist people who want to travel in groups. The app provides a seamless platform for booking vans and other transportation services conveniently. Users can browse available vehicles, view detailed specifications and pricing, make reservations, and manage their bookings all in one place. The app features real-time availability updates, secure payment processing, booking history, and group coordination tools. Built with Flutter for cross-platform mobile development and FastAPI for the backend, it offers a fast and responsive user experience with comprehensive API documentation through Swagger.',
    tech: ['Python', 'Flutter', 'Fast API', 'Swagger'],
    image: '/assets/images/tourista.png',
    type: 'mobile',
    link: 'https://tourista-app.vercel.app/',
  },
  {
    title: 'Aurum Platform Mobile',
    description:
      'Aurum Platform Mobile is a feature-rich mobile application that enables users to easily and securely swap their Quantum Metal Gold Tokens (QMGT) for USDT directly from their smartphones. The app provides a seamless mobile experience with every transaction ensuring transparency, stability, and liquidity in user assets. It features secure wallet management, real-time token price updates, quick swap functionality, transaction history, portfolio tracking, and push notifications for important updates. Built with Flutter for cross-platform mobile development and Riverpod for state management, the app leverages blockchain technology to provide secure, decentralized token swapping. The intuitive interface makes it easy for users to manage their digital assets on the go, with biometric authentication and advanced security features protecting all transactions.',
    tech: ['Flutter', 'Riverpod', 'Blockchain'],
    image: '/assets/images/aurummob.jpg',
    type: 'mobile',
    link: 'https://play.google.com/store/search?q=aurum+platform&c=apps&hl=en',
  },
  {
  title: 'LiveHoops',
  description:
    'LiveHoops is an innovative AI-powered basketball analytics web application featuring a real-time AI commentator that provides live game analysis and commentary. Users can stream live basketball games using OBS Studio integration, and the AI system automatically analyzes gameplay, player performance, and game statistics in real-time. The application offers comprehensive analytics including shot tracking, player movement analysis, team performance metrics, and predictive insights. The AI commentator provides engaging, context-aware commentary that enhances the viewing experience. Built with React.js for the frontend and Express.js for the backend, LiveHoops combines cutting-edge AI technology with modern web development to revolutionize how basketball games are analyzed and presented.',
  tech: ['React.js', 'Express.js', 'OBS Studio', 'AI'],
  image: '/assets/images/livehoops.png',
  type: 'web',
  link: '',
  },

  {
    title: 'Employee Attendance System',
    description:
      'A comprehensive system designed to record employee attendance with time in and time out functionality, featuring real-time facial recognition for secure and accurate tracking. The system eliminates traditional time cards and manual entry by using advanced facial recognition technology to automatically identify and log employees. It provides real-time attendance monitoring, generates detailed reports, tracks late arrivals and early departures, and offers admin dashboards for managing employee schedules and attendance records. Built with React.js and Tailwind CSS for a modern user interface, Express.js for the backend API, and MySQL for reliable data storage, the system includes Swagger documentation for easy integration and maintenance.',
    tech: ['React js', 'Tailwind css', 'MySQL', 'Swagger', 'Express js'],
    image: '/assets/images/attendance1.png',
    type: 'web',
    link: '',
  },
  {
    title: 'HOA Blockchain Voting System',
    description:
      'A secure and transparent voting system for Homeowners Associations (HOA) powered by blockchain technology. This system ensures complete transparency, immutability, and verifiability of all votes cast. Each vote is recorded on the blockchain, making it tamper-proof and publicly auditable. The platform features facial recognition technology for secure voter authentication, preventing unauthorized access and ensuring that only eligible members can cast their votes. It provides real-time vote tracking, secure authentication, and comprehensive voting history, ensuring trust and accountability in HOA decision-making processes.',
    tech: ['PHP','Smart Contract', 'Solidity',  'Bootstrap', 'MySQL', 'HTML', 'CSS'],
    image: '/assets/images/hoa2.png',
    type: 'web',
    link: '',
  },
  {
    title: 'Network Forensics Simulation Tool (NFMPS)',
    description:
      'Network Forensics Simulation Tool (NFMPS) is an advanced web application designed for network security analysis and forensic investigation. The system allows users to upload PCAP (Packet Capture) files and automatically detects potential attackers and malicious activities within network traffic. It features intelligent packet analysis, threat detection algorithms, detailed alert generation, and comprehensive reporting capabilities. The platform provides an admin dashboard for managing users, monitoring system alerts, tracking uploaded files, and generating forensic reports. Built with Vue.js for a reactive frontend interface, Tailwind CSS for modern styling, Express.js for robust backend API, MySQL for secure data storage, and Swagger for comprehensive API documentation, NFMPS offers a complete solution for network security professionals and students to analyze network traffic and identify security threats.',
    tech: ['Vue.js', 'Tailwind CSS', 'Express.js', 'MySQL', 'Swagger'],
    image: '/assets/images/nfpms.png',
    type: 'web',
    link: '', 
  },
  {
    title: 'OCR System with Real-time Detection',
    description:
      'An intelligent Optical Character Recognition (OCR) system designed to detect and extract real-time data from images and live camera feeds. The system specializes in capturing student papers and automatically extracting only the essential data needed for processing. It leverages Tesseract OCR engine for accurate text recognition and OpenAI for advanced data detection and intelligent content analysis. The platform features real-time camera integration for live document scanning, image upload capabilities for batch processing, intelligent data extraction that filters and captures only relevant information, and machine learning algorithms for improved accuracy over time. Built with Laravel framework for robust backend functionality, Bootstrap for responsive and modern UI design, MySQL for efficient data storage and retrieval, OpenAI integration for intelligent content understanding, and machine learning models for continuous improvement, this OCR system provides an efficient solution for automated document processing and data extraction in educational and administrative environments.',
    tech: ['Laravel', 'Bootstrap', 'MySQL', 'OpenAI', 'Machine Learning'],
    image: '/assets/images/ocr1.png',
    type: 'web',
    link: '',
  },
  {
    title: 'Piggery Management System',
    description:
      'A comprehensive farm management system designed specifically for pig farming operations, providing complete inventory and operational control. The system manages all aspects of pig farm operations including user management for staff and administrators, feeds management for tracking feed inventory and consumption, pigs management for monitoring individual pigs and their status, medicine management for tracking medications and treatments, and automated breeding expectations to predict and manage breeding cycles. The platform features an integrated AI helper that provides intelligent insights, recommendations, and automated decision support for farm operations. It includes real-time population tracking, breeding status monitoring, inventory management for feeds and medicines, comprehensive reporting and analytics, and automated alerts for important events. Built with React.js for a modern and responsive frontend interface, Tailwind CSS for elegant styling, Express.js for robust backend API, Swagger for comprehensive API documentation, and OpenAI integration for intelligent AI assistance, this system streamlines pig farm operations and improves productivity through automation and data-driven insights.',
    tech: ['Express.js', 'Tailwind CSS', 'Swagger', 'React.js', 'OpenAI'],
    image: '/assets/images/piggery.png',
    type: 'web',
    link: '',
  },
  {
    title: 'Premium Piggery Landing Page',
    description:
      'A modern and elegant landing page designed for Premium Piggery farm, showcasing the farm\'s commitment to providing fresh, high-quality pork products. The landing page features a clean and professional design with a hero section highlighting the farm\'s values of no antibiotics and no growth stimulants, emphasizing fresh pork delivery every day. It includes comprehensive navigation sections for Home, About, Gallery, Products, Testimonials, and Contact, along with prominent call-to-action buttons for inquiries and contact. The page is fully responsive and optimized for all devices, providing an excellent user experience with smooth animations and modern UI elements. Built with React.js for component-based architecture and Tailwind CSS for efficient, utility-first styling, this landing page effectively communicates the farm\'s brand identity and encourages visitor engagement through its intuitive design and clear messaging.',
    tech: ['React.js', 'Tailwind CSS'],
    image: '/assets/images/piggerylanding.png',
    type: 'web',
    link: 'https://www.bdmfarm.com/',
  },
  {
    title: 'Real-time Navigation System',
    description:
      'A real-time navigation application that provides live location tracking and route guidance for users. The system features interactive maps with real-time updates, accurate GPS positioning, turn-by-turn directions, and dynamic route calculation based on current traffic conditions. It includes location search functionality, destination planning, route optimization, and real-time location sharing capabilities. The application provides a smooth and responsive user experience with instant updates as users move, ensuring accurate navigation guidance throughout their journey. Built with React.js for a reactive and component-based frontend architecture and Tailwind CSS for modern, responsive styling, this navigation system delivers a reliable and user-friendly solution for real-time location-based services and navigation needs.',
    tech: ['Tailwind CSS', 'React.js'],
    image: '/assets/images/navigation1.png',
    type: 'web',
    link: '',
  },

    {
    title: 'Siguradocs',
    description:
      'Siguradocs is a comprehensive web-based document management system that enables users to securely request, manage, and track official documents. The platform provides an intuitive interface for creating document requests, tracking request status, viewing document history, and managing archived documents. It features blockchain-like document integrity verification using SHA-256 hashing, QR code generation for approved documents, real-time status updates, activity logging, and notification system. Built with React.js and Tailwind CSS for a modern, responsive frontend, and Express.js with MySQL for robust backend functionality, the system ensures secure document management with role-based access control for users and administrators.',
    tech: ['React js', 'Tailwindcss', 'Express js', 'MySQL'],
    image: '/assets/images/siguradocsweb.jpg',
    type: 'web',
    link: '',
  },

  
    {
    title: 'Siguradocs Mobile',
    description:
      'Siguradocs is a comprehensive mobile application for secure document management that enables users to request, track, and manage official documents directly from their smartphones. The app provides a seamless mobile experience for creating document requests, monitoring request status in real-time, viewing document history, accessing QR codes for approved documents, and managing archived documents. It features push notifications for status updates, blockchain-like document integrity verification, secure authentication, activity tracking, and offline document viewing capabilities. Built with Flutter for cross-platform mobile development and integrated with Express.js backend and MySQL database, the app ensures secure, efficient document management on the go with an intuitive user interface.',
    tech: ['Dart', 'Flutter', 'Express js', 'MySQL'],
    image: '/assets/images/siguradocsmobile.jpg',
    type: 'mobile',
    link: '',
  },

  {
    title: 'Southern Luzon State University Guidance Counseling System',
    description:
      'A student-facing guidance counseling platform for Southern Luzon State University featuring a dashboard, booking system, schedule management, and gamified components including a virtual pet (Tazki) with feed and water mechanics. The system includes Games & Exercises, History, About, and Settings modules, with a modern UI and pixel-art style interactive elements designed to engage students. Built with React and TypeScript for the frontend and Express with Prisma for the backend, the platform provides a complete solution for university guidance and counseling services.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Express', 'Prisma'],
    image: '/assets/images/slsu.png',
    type: 'web',
    link: '',
  },
  {
    title: 'Neust-Mgt Marketing E-Shop',
    description:
      'Neust-MGT Marketing E-Shop is a comprehensive e-commerce platform designed to support student vendors by providing a dedicated space to showcase and sell their products online. The platform enables students to create their own vendor profiles, list products with detailed descriptions and images, manage inventory, process orders, and handle customer communications. It features secure payment processing, order tracking, customer reviews and ratings, search and filtering capabilities, and admin dashboards for managing vendors and products. Built with Laravel framework and Blade templating engine, the platform offers a robust, scalable solution with MySQL database for efficient data management, making it easy for students to start and grow their online businesses.',
    tech: ['Laravel', 'Blade', 'Mysql'],
    image: '/assets/images/ecom.png',
    type: 'web',
    link: 'https://neust-mgt.neust-mgt-eshopping.store/user/confirm/a2ltc283NTQyQGdtYWlsLmNvbQ==',
  },
  {
    title: 'Hotel De Luna',
    description:
      'Hotel DeLuna is a comprehensive hotel booking platform designed to make global hotel reservations seamless and convenient. The platform allows users to search and compare hotels worldwide, view detailed property information including amenities, photos, and reviews, make secure bookings with instant confirmation, and manage their reservations. It features advanced search filters by location, price range, ratings, and amenities, real-time availability checking, secure payment processing, booking history, and customer support. Built with Laravel framework and Blade templating for a robust backend, and MySQL for reliable data storage, Hotel DeLuna provides a user-friendly interface that simplifies the entire hotel booking process from search to checkout.',
    tech: ['Laravel', 'Blade', 'Mysql'],
    image: '/assets/images/hoteldeluna.png',
    type: 'web',
    link: 'https://hoteldeluna.io/home',
  },
  {
    title: 'Car-Eshop',
    description:
      'Car-Eshop is a beautifully designed static e-commerce website created to showcase a variety of cars with an elegant and modern user interface. The platform features a responsive design that displays car listings with detailed information including specifications, pricing, images, and descriptions. It includes intuitive navigation, search functionality, filtering options by make, model, and price range, and an attractive product gallery. Built with React.js for component-based architecture and Tailwind CSS for modern, responsive styling, Car-Eshop demonstrates clean code practices and attention to user experience design, making it an excellent portfolio piece showcasing frontend development skills.',
    tech: ['React js', 'Tailwind css'],
    image: '/assets/images/carshop.jpg',
    type: 'web',
    link: 'https://static-react-js-car-shop.vercel.app/',
  },
  {
    title: 'Turkishan Travels',
    description:
      'Turkishan Travels is a mobile application designed to make hotel booking in Turkey simple and efficient. The app provides users with a comprehensive platform to discover, compare, and book hotels across various cities in Turkey. It features an intuitive interface for browsing hotel listings, viewing detailed property information including photos, amenities, and guest reviews, making secure reservations, and managing bookings on the go. The app includes location-based search, price comparison tools, real-time availability updates, and secure payment processing. Built with Angular and Ionic frameworks, Turkishan Travels offers a native-like mobile experience with cross-platform compatibility, ensuring users can easily find and book their perfect accommodation in Turkey.',
    tech: ['Angular', 'Ionic'],
    image: '/assets/images/turkishan.png',
    type: 'mobile',
    link: '',
  },

];

const Project = () => {
  const [filter, setFilter] = useState('all');
  const [selectedCard, setSelectedCard] = useState(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState(new Set());
  const [modalImage, setModalImage] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [viewAll, setViewAll] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Function to get first sentence from description
  const getFirstSentence = (description) => {
    // Find the first period followed by space, or end of string
    const periodIndex = description.indexOf('. ');
    if (periodIndex !== -1) {
      // Return first sentence with period
      return description.substring(0, periodIndex + 1).trim();
    }
    // If no period found, return the whole description
    return description.trim();
  };

  // Function to check if description has more than one sentence
  const hasMoreContent = (description) => {
    const sentences = description.split(/\.\s+/).filter(s => s.trim().length > 0);
    return sentences.length > 1;
  };

  const toggleDescription = (idx, e) => {
    e.stopPropagation(); // Prevent card click when clicking button
    setExpandedDescriptions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(idx)) {
        newSet.delete(idx);
      } else {
        newSet.add(idx);
      }
      return newSet;
    });
  };

  const openModal = (imageSrc, e) => {
    if (e) {
      e.stopPropagation(); // Prevent card click when clicking image
      e.preventDefault(); // Prevent any default behavior
    }
    setModalImage(imageSrc);
  };

  const closeModal = (e) => {
    if (e) {
      e.stopPropagation();
    }
    setModalImage(null);
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && modalImage) {
        closeModal();
      }
    };

    if (modalImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [modalImage]);

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 24,
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: {
          perView: 2,
          spacing: 16,
        },
      },
      '(max-width: 640px)': {
        slides: {
          perView: 1,
          spacing: 16,
        },
      },
    },
    mode: 'snap',
    renderMode: 'performance',
    rubberband: false,
  });

  const filteredProjects =
    filter === 'all'
      ? allProjects
      : allProjects.filter((project) => project.type === filter);

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-blue-50 via-white to-blue-50 bg-grid-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="text-center mb-16 relative z-10">
        <div className="inline-block mb-4">
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent hover:from-cyan-400 hover:via-blue-400 hover:to-cyan-400 transition-all duration-500 animate-gradient font-['Poppins']">
            My Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-3 rounded-full"></div>
        </div>
        <p className="text-gray-600 mt-4 text-lg font-medium font-['Poppins']">
          A selection of my recent work and personal projects
        </p>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-4 mb-12 text-sm sm:text-base relative z-10">
        {[{ key: 'all', label: 'All Projects' }, { key: 'web', label: 'Web' }, { key: 'mobile', label: 'Mobile' }].map(
          ({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`relative font-semibold px-6 py-2.5 rounded-full transition-all duration-300 ease-in-out cursor-pointer font-['Poppins'] flex-shrink-0 ${
                filter === key
                  ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50 scale-105'
                  : 'text-gray-600 bg-white hover:bg-gray-50 hover:text-cyan-500 border border-gray-200 hover:border-cyan-300 hover:scale-105'
              }`}
            >
              {label}
            </button>
          )
        )}
      </div>

      {!viewAll && (
        <div key={filter} ref={sliderRef} className="keen-slider max-w-6xl mx-auto sm:px-4 relative z-10">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedCard(prev => (prev === idx ? null : idx))}
              className="keen-slider__slide bg-white rounded-2xl shadow-lg w-[320px] mx-auto sm:mx-0 flex-shrink-0 relative group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 ease-in-out cursor-pointer border border-gray-100 hover:border-cyan-200 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 z-0"></div>
              
              <div className="relative overflow-hidden h-40 rounded-t-2xl">
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <img
                  src={project.image}
                  alt={project.title}
                  onClick={(e) => openModal(project.image, e)}
                  className={`h-full w-full object-cover transform transition-all duration-700 cursor-pointer pointer-events-auto relative z-20 ${
                    selectedCard === idx ? 'scale-110 brightness-110' : 'group-hover:scale-110 group-hover:brightness-105'
                  }`}
                />
                
                {/* Type badge */}
                <span
                  className={`absolute bottom-4 left-4 bg-gradient-to-r from-cyan-500/90 to-blue-500/90 backdrop-blur-sm text-white text-xs font-bold px-4 py-1.5 rounded-full z-20 transition-all duration-300 shadow-lg shadow-cyan-500/30
                  ${
                    selectedCard === idx
                      ? 'block sm:hidden translate-y-0 opacity-100'
                      : 'hidden sm:group-hover:inline translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
                  }`}
                >
                  {project.type.toUpperCase()}
                </span>
                
                {/* Link button */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open project"
                    onClick={(e) => e.stopPropagation()}
                    className={`absolute bottom-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full p-2.5 z-20 transition-all duration-300 shadow-lg shadow-cyan-500/40 hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/50
                      ${
                        selectedCard === idx
                          ? 'block sm:hidden translate-y-0 opacity-100'
                          : 'hidden sm:group-hover:flex translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
                      }`}
                  >
                    <FaArrowUpRightFromSquare className="h-4 w-4" />
                  </a>
                )}
              </div>

              <div className="p-4 relative z-10 bg-white">
                <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-cyan-600 transition-colors duration-300 font-['Poppins']">
                  {project.title}
                </h3>
                <div className="font-medium text-sm text-gray-600 mb-3 leading-relaxed font-['Poppins']">
                  {(() => {
                    const isExpanded = expandedDescriptions.has(idx);
                    const hasMore = hasMoreContent(project.description);
                    const displayText = isExpanded 
                      ? project.description 
                      : getFirstSentence(project.description);
                    
                    return (
                      <>
                        <p className={`mb-2 ${!isExpanded ? 'line-clamp-2' : ''}`}>
                          {displayText}
                        </p>
                        {hasMore && (
                          <button
                            onClick={(e) => toggleDescription(idx, e)}
                            className="mt-2 text-cyan-500 hover:text-cyan-600 font-semibold text-xs transition-all duration-200 hover:underline flex items-center gap-1 font-['Poppins']"
                          >
                            {isExpanded ? 'View Less' : 'View More'}
                            <span className={`inline-block transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>▼</span>
                          </button>
                        )}
                      </>
                    );
                  })()}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((techItem, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200 hover:border-cyan-300 hover:from-cyan-50 hover:to-blue-50 hover:text-cyan-700 transition-all duration-200 font-['Poppins']"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {viewAll && (
        <div className="max-w-6xl mx-auto sm:px-4 relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedCard(prev => (prev === idx ? null : idx))}
              className="bg-white rounded-2xl shadow-lg w-full max-w-[320px] mx-auto lg:max-w-none lg:mx-0 relative group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 ease-in-out cursor-pointer border border-gray-100 hover:border-cyan-200 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 z-0"></div>
              <div className="relative overflow-hidden h-40 rounded-t-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  onClick={(e) => openModal(project.image, e)}
                  className={`h-full w-full object-cover transform transition-all duration-700 cursor-pointer pointer-events-auto relative z-20 ${
                    selectedCard === idx ? 'scale-110 brightness-110' : 'group-hover:scale-110 group-hover:brightness-105'
                  }`}
                />
                <span
                  className={`absolute bottom-4 left-4 bg-gradient-to-r from-cyan-500/90 to-blue-500/90 backdrop-blur-sm text-white text-xs font-bold px-4 py-1.5 rounded-full z-20 transition-all duration-300 shadow-lg shadow-cyan-500/30
                  ${selectedCard === idx ? 'block sm:hidden translate-y-0 opacity-100' : 'hidden sm:group-hover:inline translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'}`}
                >
                  {project.type.toUpperCase()}
                </span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open project"
                    onClick={(e) => e.stopPropagation()}
                    className={`absolute bottom-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full p-2.5 z-20 transition-all duration-300 shadow-lg shadow-cyan-500/40 hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/50
                      ${selectedCard === idx ? 'block sm:hidden translate-y-0 opacity-100' : 'hidden sm:group-hover:flex translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'}`}
                  >
                    <FaArrowUpRightFromSquare className="h-4 w-4" />
                  </a>
                )}
              </div>
              <div className="p-4 relative z-10 bg-white">
                <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-cyan-600 transition-colors duration-300 font-['Poppins']">
                  {project.title}
                </h3>
                <div className="font-medium text-sm text-gray-600 mb-3 leading-relaxed font-['Poppins']">
                  {(() => {
                    const isExpanded = expandedDescriptions.has(idx);
                    const hasMore = hasMoreContent(project.description);
                    const displayText = isExpanded ? project.description : getFirstSentence(project.description);
                    return (
                      <>
                        <p className={`mb-2 ${!isExpanded ? 'line-clamp-2' : ''}`}>{displayText}</p>
                        {hasMore && (
                          <button
                            onClick={(e) => toggleDescription(idx, e)}
                            className="mt-2 text-cyan-500 hover:text-cyan-600 font-semibold text-xs transition-all duration-200 hover:underline flex items-center gap-1 font-['Poppins']"
                          >
                            {isExpanded ? 'View Less' : 'View More'}
                            <span className={`inline-block transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>▼</span>
                          </button>
                        )}
                      </>
                    );
                  })()}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((techItem, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200 hover:border-cyan-300 hover:from-cyan-50 hover:to-blue-50 hover:text-cyan-700 transition-all duration-200 font-['Poppins']"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-10 relative z-10">
        <button
          onClick={() => setViewAll(!viewAll)}
          className="font-semibold px-6 py-2.5 rounded-full transition-all duration-300 ease-in-out cursor-pointer font-['Poppins'] text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/60"
        >
          {viewAll ? 'Close' : 'View All'}
        </button>
      </div>

      {/* Image Modal */}
      {mounted && modalImage && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={closeModal}
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[10000] bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-3 sm:p-4 transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Close modal"
          >
            <FaXmark className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Modal Image Container */}
          <div
            className="relative max-w-full max-h-full w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalImage}
              alt="Project preview"
              className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Project;
