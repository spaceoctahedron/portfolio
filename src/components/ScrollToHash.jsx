// src/components/ScrollToHash.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Delay to ensure DOM is ready
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -80; // Adjust for fixed navbar height
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100); // 100ms delay helps when navigating from another page
    }
  }, [hash]);

  return null;
};

export default ScrollToHash;
