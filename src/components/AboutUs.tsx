import React from 'react';
import AboutUsBg from './Footer/AboutUsBg.mp4';

const AboutUs = () => {
  return (
    <section className="py-16 px-4  rounded-lg  mt-12 select-none" >
      {/* <video src={AboutUsBg} height="750" autoPlay loop className='display transition-all '></video> */}
      <h2 className="text-4xl font-poppins font-bold text-black dark:text-white text-center mb-4">
        About Us
      </h2>
      <p className="text-lg font-lora text-black dark:text-gray-100 text-justify leading-relaxed max-w-6xl mx-auto pt-12">
      CodeChef ZHCET Chapter, an initiative by the students of Zakir Husain College of Engineering and Technology (ZHCET), Aligarh Muslim University (AMU), aims to cultivate a vibrant coding culture and foster a spirit of collaboration among students. As part of the global CodeChef community, we provide a platform for aspiring programmers to enhance their skills through engaging coding events, interactive sessions, workshops, and collaborative projects. Our goal is to guide passionate members towards excellence in competitive programming, helping them develop technical expertise while fostering a sense of community. Step by step, we empower our members to become proficient problem-solvers and valuable contributors to the world of coding.
      </p>
    </section>
  );
};

export default AboutUs;
