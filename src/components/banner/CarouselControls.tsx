import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

const CarouselControls: React.FC<ControlsProps> = ({ onPrev, onNext }) => {
  const buttonClass = "absolute top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200";

  return (
    <>
      <button 
        onClick={onPrev} 
        className={`${buttonClass} left-4`}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={onNext} 
        className={`${buttonClass} right-4`}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </>
  );
};

export default CarouselControls;