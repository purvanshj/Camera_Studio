import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css'; // Import the CSS file for styling


const Carousel = ({images}) => {
  const slides = [
    {
      id: 1,
      image: images[0],
      location: 'UTAH',
      date: 'DECEMBER 2023',
      title: 'SIMRAN & VISHAL',
      description: "Simran & Vishal's dream desert elopement...",
    },
    {
      id: 2,
      image: images[1],
      location: 'NEW YORK',
      date: 'JANUARY 2024',
      title: 'ALEX & TINA',
      description: "Alex & Tina's big city wedding...",
    },
    {
      id: 3,
      image: images[2],
      location: 'LOS ANGELES',
      date: 'FEBRUARY 2024',
      title: 'MIKE & JULIA',
      description: "Mike & Julia's romantic beach ceremony...",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Start at the "1st" slide (since we're adding cloned slides)
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);

  // Handle the infinite scrolling
  const moveSlide = (step) => {
    if (isTransitioning) return; // Prevent double-click during transition
    setIsTransitioning(true);
    
    setCurrentIndex((prevIndex) => prevIndex + step);
  };

  // This effect will reset the position when it reaches the cloned slides
  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(slides.length);
      }, 500); // Delay to allow smooth transition before jump
    } else if (currentIndex === slides.length + 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 500);
    } else {
      setTimeout(() => setIsTransitioning(false), 500); // End transition lock after animation completes
    }
  }, [currentIndex]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1); // Automatically move to the next slide
    }, 5000); // Change slide every 5 seconds
  
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  return (
    <div className="slider-container">
      <div
        className="slider"
        ref={sliderRef}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? 'transform 0.5s ease' : 'none'
        }}
      >
        {/* Clone the last slide at the beginning */}
        <div className="slide">
          <img src={slides[slides.length - 1].image} alt={slides[slides.length - 1].title} />
          <div className="slide-content">
            <h3>{slides[slides.length - 1].location} &#x2022; {slides[slides.length - 1].date}</h3>
            <h1>{slides[slides.length - 1].title}</h1>
            <p>{slides[slides.length - 1].description}</p>
          </div>
        </div>

        {slides.map((slide) => (
          <div className="slide" key={slide.id}>
            <img src={slide.image} alt={slide.title} />
            <div className="slide-content">
              <h3>{slide.location} &#x2022; {slide.date}</h3>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}

        {/* Clone the first slide at the end */}
        <div className="slide">
          <img src={slides[0].image} alt={slides[0].title} />
          <div className="slide-content">
            <h3>{slides[0].location} &#x2022; {slides[0].date}</h3>
            <h1>{slides[0].title}</h1>
            <p>{slides[0].description}</p>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="prev" onClick={() => moveSlide(-1)}>&#10094;</div>
      <div className="next" onClick={() => moveSlide(1)}>&#10095;</div>
    </div>
  );
};

export default Carousel;
