import { useEffect, useState } from 'react';
import useThrottle from './useThrottle';
import throttle from 'src/utils/throttle';

export default function useScrollPosition(delay = 1000) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = throttle(() => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }, delay);

  useEffect(() => {
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
}
