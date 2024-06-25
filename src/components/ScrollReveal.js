import React, { useEffect, useRef } from 'react';
import './Carousel.css';

const CarouselOnScroll = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      itemsRef.current.forEach((item, index) => {
        if (item) {
          const rect = item.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight * 0.8) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="carousel-item" ref={(el) => itemsRef.current.push(el)}>
          <h3>Slide 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="carousel-item" ref={(el) => itemsRef.current.push(el)}>
          <h3>Slide 2</h3>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="carousel-item" ref={(el) => itemsRef.current.push(el)}>
          <h3>Slide 3</h3>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="carousel-item" ref={(el) => itemsRef.current.push(el)}>
          <h3>Slide 4</h3>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselOnScroll;
