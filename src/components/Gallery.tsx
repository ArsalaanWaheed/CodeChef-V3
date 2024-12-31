import React from 'react';

const galleryImages = [
  '/images/event1.jpg',
  '/images/event2.jpg',
  '/images/event3.jpg',
  '/images/event4.jpg',
  '/images/event5.jpg',
  '/images/event6.jpg',
];

const Gallery = () => {
  return (
    <div className="bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-50 min-h-screen py-10 pt-24">
      <h1 className="text-5xl font-bold text-center mb-10">Past Events Gallery</h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={image}
                alt={`Event ${index + 1}`}
                className="w-full h-60 object-cover rounded-lg transition-all duration-500 ease-in-out border-4 border-green-400"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0">
                <p className="text-white text-lg font-semibold">Event {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
