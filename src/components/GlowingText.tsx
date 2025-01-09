import React from 'react';
import './GlowingText.css';

const GlowingText = () => {
  return (
    <div className="glowing-text-container select-none ">
      <h2  className="glowing-text large-bold-text select-none sm:text-[6rem]">
        CODECHEF ZHCET
      </h2>
      <div className="text-center mt-4 select-none">
        <p className="text-gray-400 text-xl pt-6 ">WHERE CURIOSITY MEETS CODE</p>
        <p className="text-gray-400 text-xl pt-6">JOIN LEARN, AND CREATE TOGETHER</p>
      </div>
    </div>
  );
};

export default GlowingText;
