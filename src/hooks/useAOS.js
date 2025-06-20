import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const useAOS = (options = {}) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      ...options,
    });

    const handleRefresh = () => {
      AOS.refreshHard();
    };

    window.addEventListener('scroll', handleRefresh);
    window.addEventListener('resize', handleRefresh);

    return () => {
      window.removeEventListener('scroll', handleRefresh);
      window.removeEventListener('resize', handleRefresh);
    };
  }, [options]);
};
