import React from 'react';

const Vision = () => {
  return (
    <section className="py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in">
        <h2 className="text-4xl font-poppins font-bold text-center mb-6">Our Vision</h2>
        <div className="md:flex md:items-center md:space-x-6 pt-18">
          {/* Image Section */}
          <div className="flex justify-center md:w-1/2 mb-6 md:mb-0">
            <img
              src="https://i0.wp.com/thebftonline.com/wp-content/uploads/2021/05/vision.jpg?fit=1920%2C1131&ssl=1"
              alt="Vision"
              className="rounded-lg shadow-lg w-3/4 max-w-xs md:max-w-sm transform transition duration-700 hover:scale-110 animated-image"
            />
          </div>
          {/* Text Section */}
          <div className="md:w-1/2 pt-12">
            <p className="text-lg leading-relaxed font-poppins text-justify">
              At CodeChef ZHCET Chapter, our vision is to create a thriving ecosystem where
              students can unlock their full potential in the field of technology. We aim to inspire
              and empower the next generation of innovators and problem-solvers by providing them
              with the tools, resources, and support they need to excel in the world of competitive
              programming. By fostering a culture of continuous learning, collaboration, and technical
              excellence, we aspire to bridge the gap between academic knowledge and real-world
              applications, preparing our members to make impactful contributions to the tech
              industry and society at large.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
