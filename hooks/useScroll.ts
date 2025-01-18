import { useCallback } from 'react';

type ScrollToSection = (id: string) => void;

const useScroll = (): ScrollToSection => {
  return useCallback((id: string) => {
    try {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    } catch (error) {
      console.error('Error scrolling to section:', error);
    }
  }, []);
};

export default useScroll;
