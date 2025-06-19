import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const defaultOptions = {
  duration: 800,
  once: true,
};

export const useAOS = (options = {}) => {
  useEffect(() => {
    AOS.init({ ...defaultOptions, ...options });
  }, [options]);
};
