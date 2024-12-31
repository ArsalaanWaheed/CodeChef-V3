import React from 'react';
import './GlowingText.css';

const GlowingText = () => {
  return (
    <div className="glowing-text-container">
      <h2 contentEditable="true" className="glowing-text large-bold-text">
        CODECHEF ZHCET
      </h2>
      <div className="text-center mt-4">
        <p className="text-gray-400 text-xl pt-6 ">WHERE CURIOSITY MEETS CODE</p>
        <p className="text-gray-400 text-xl pt-6">JOIN LEARN, AND CREATE TOGETHER</p>
      </div>
    </div>
  );
};

export default GlowingText;
