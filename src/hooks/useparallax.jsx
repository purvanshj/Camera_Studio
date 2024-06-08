// useParallax.js
import { useSpring } from 'react-spring';
import { useScroll } from '../context/ScrollContext';

export const useParallax = (factor = 0.5) => {
  const { scrollY } = useScroll();
  const y = scrollY.to((y) => -y * factor);
  return useSpring({ y, from: { y: 0 } });
};
