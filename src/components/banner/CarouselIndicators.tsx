import React from 'react';

interface IndicatorsProps {
  total: number;
  current: number;
  onChange: (index: number) => void;
}

const CarouselIndicators: React.FC<IndicatorsProps> = ({ total, current, onChange }) => {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`w-2 h-2 rounded-full transition-all duration-200 ${
            current === index 
              ? 'bg-white w-4' 
              : 'bg-white/50 hover:bg-white/75'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default CarouselIndicators;