import React, { useState, useEffect } from 'react';
import CarouselSlide from './CarouselSlide';
import CarouselControls from './CarouselControls';
import CarouselIndicators from './CarouselIndicators';
import { slides } from './carouselData';

const BannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[500px] overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <CarouselSlide key={index} {...slide} />
        ))}
      </div>
      <CarouselControls onPrev={prevSlide} onNext={nextSlide} />
      <CarouselIndicators 
        total={slides.length} 
        current={currentSlide} 
        onChange={goToSlide} 
      />
    </div>
  );
};

export default BannerCarousel;