import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import '../../../public/assets/styles/global.css';

const allProjects = [
  {
    title: 'Aurum Platform Web',
    description:
      'Swap your Quantum Metal Gold Tokens (QMGT) for USDT easily and securely, ensuring transparency, stability, and liquidity in your holdings with each transaction.',
    tech: ['Strapi', 'Type Script', 'Blockchain'],
    image: '/assets/images/aurumweb.png',
    type: 'web',
    link: 'https://aurumplatform.io/',
  },
  {
    title: 'Aurum Crypto P2P',
    description:
      'Aurum, CryptoP2P is the next-generation platform for fast, secure, and borderless peer-to-peer crypto transactions in the Philippines.',
    tech: ['React js', 'Nest js', 'Swagger'],
    image: '/assets/images/p2pImg2.png',
    type: 'web',
    link: 'https://www.cryptop2p.ph/',
  },
  {
    title: 'Tourista App',
    description:
      'This app is designed to assist people who want to travel in groups. It allows users to book vans and other transportation services conveniently.',
    tech: ['Python', 'Flutter', 'Fast API', 'Swagger'],
    image: '/assets/images/tourista.png',
    type: 'mobile',
    link: 'https://tourista-app.vercel.app/',
  },
  {
    title: 'Aurum Platform Mobile',
    description:
      'Easily and securely swap your Quantum Metal Gold Tokens (QMGT) for USDT — with every transaction ensuring transparency, stability, and liquidity in your assets.',
    tech: ['Flutter', 'Riverpod', 'Blockchain'],
    image: '/assets/images/aurummob.jpg',
    type: 'mobile',
    link: 'https://play.google.com/store/search?q=aurum+platform&c=apps&hl=en',
  },
  {
    title: 'Neust-Mgt Marketing E-Shop',
    description:
      'Neust-MGT Marketing E-Shop is designed to support student vendors by providing a dedicated platform to showcase and sell their products online.',
    tech: ['Laravel', 'Blade', 'Mysql'],
    image: '/assets/images/ecom.png',
    type: 'web',
    link: 'https://neust-mgt.neust-mgt-eshopping.store/user/confirm/a2ltc283NTQyQGdtYWlsLmNvbQ==',
  },
  {
    title: 'Hotel De Luna',
    description:
      'Hotel DeLuna is designed to make global hotel bookings seamless and convenient.',
    tech: ['Laravel', 'Blade', 'Mysql'],
    image: '/assets/images/hoteldeluna.png',
    type: 'web',
    link: 'https://hoteldeluna.io/home',
  },
  {
    title: 'Car-Eshop',
    description:
      'This is a static Car E-Shop created solely to showcase a variety of cars.',
    tech: ['React js', 'Tailwind css'],
    image: '/assets/images/carshop.jpg',
    type: 'web',
    link: 'https://static-react-js-car-shop.vercel.app/',
  },
  {
    title: 'Turkishan Travels',
    description:
      'Turkishan Travels is designed to make hotel booking in Turkey simple and efficient.',
    tech: ['Angular', 'Ionic'],
    image: '/assets/images/turkishan.png',
    type: 'mobile',
    link: '',
  },
];

const Project = () => {
  const [filter, setFilter] = useState('all');
  const [selectedCard, setSelectedCard] = useState(null);

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
    <section className="py-10 px-6 bg-blue-50 bg-grid-light">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold hover:text-cyan-400 transition-colors duration-300">
          My Projects
        </h2>
        <p className="text-black mt-2">
          A selection of my recent work and personal projects
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-6 mb-10 text-sm sm:text-base">
        {[{ key: 'all', label: 'All Projects' }, { key: 'web', label: 'Web' }, { key: 'mobile', label: 'Mobile' }].map(
          ({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`relative font-semibold transition duration-300 ease-in-out cursor-pointer ${
                filter === key
                  ? 'text-cyan-500 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-cyan-500'
                  : 'text-gray-500 hover:text-cyan-300'
              }`}
            >
              {label}
            </button>
          )
        )}
      </div>

      <div key={filter} ref={sliderRef} className="keen-slider max-w-6xl mx-auto sm:px-4">
        {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedCard(prev => (prev === idx ? null : idx))}
            className="keen-slider__slide bg-white rounded-xl shadow-md w-[300px] mx-auto sm:mx-0 flex-shrink-0 relative group hover:shadow-lg transition-transform duration-500 ease-in-out cursor-pointer"
          >
            <div className="relative overflow-hidden h-48 rounded-t-xl">
              <img
                src={project.image}
                alt={project.title}
               className={`h-full w-full object-cover transform transition-transform duration-500 ${
                selectedCard === idx ? 'scale-110' : 'group-hover:scale-105'
              }`}
              />
              <span
                className={`absolute bottom-3 left-3 bg-[rgba(34,211,238,0.2)] text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full z-10 transition-opacity duration-300
                ${
                  selectedCard === idx
                    ? 'block sm:hidden'
                    : 'hidden sm:group-hover:inline'
                }`}
              >
                {project.type}
              </span>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open project"
                  className={`absolute bottom-3 right-3 bg-cyan-500 text-white rounded-full p-1 z-10 transition duration-300
                    ${
                      selectedCard === idx
                        ? 'block sm:hidden'
                        : 'hidden sm:group-hover:flex'
                    }`}
                >
                  <FaArrowUpRightFromSquare className="h-4 w-4" />
                </a>
              )}
            </div>

            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{project.title}</h3>
              <p className="font-semibold text-sm text-gray-500 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-xs text-black px-2 py-1 rounded"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
