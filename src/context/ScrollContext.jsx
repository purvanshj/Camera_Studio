// ScrollContext.js
import React, { createContext, useContext } from 'react';
import { useSpring } from 'react-spring';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [{ scrollY }, set] = useSpring(() => ({ scrollY: 0 }));

  const handleScroll = () => {
    set({ scrollY: window.scrollY });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
