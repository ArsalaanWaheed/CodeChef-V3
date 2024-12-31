import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SlideProps {
  image: string;
  title: string;
  description: string;
  ctaText: string;
}

const CarouselSlide: React.FC<SlideProps> = ({ image, title, description, ctaText }) => {
  return (
    <div className="min-w-full relative">
      <img 
        src={image} 
        alt={title}
        className="w-full h-[500px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
            <p className="text-lg text-white/90 mb-6">{description}</p>
            <button className="bg-primary-600 text-white px-6 py-3 rounded-md font-medium inline-flex items-center space-x-2 hover:bg-primary-700 transition-colors duration-200">
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlide;