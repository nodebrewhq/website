// scroll.js

import { animateScroll as scroll } from 'react-scroll';

export const scrollToTop = () => {
  scroll.scrollToTop();
};

export const scrollToElement = (elementId) => {
  scroll.scrollTo(elementId, {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
  });
};
