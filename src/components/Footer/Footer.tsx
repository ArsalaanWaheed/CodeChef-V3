import React from 'react';
import { FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Logo and Description */}
        <div className="text-center md:text-left">
          <img
            src="src\\components\\logo.png"
            alt="CodeChef-ZHCET"
            className="w-16 mx-auto md:mx-0 mb-4"
          />
          <p className="text-sm font-medium text-justify">
            CodeChef-ZHCET is a non-commercial organization with a goal to provide a platform for programmers and developers everywhere to meet, compete & have fun. At CodeChef-ZHCET, we believe that - "In the age of technology, collaboration is the currency of progress."
          </p>
        </div>

        {/* Navigation Links */}
        <div className="text-center md:text-left">
          <div className="text-center grid grid-cols-2 gap-2 pt-24">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">Team</a>
            <a href="#" className="hover:text-gray-400">Events</a>
            <a href="#" className="hover:text-gray-400">Sponsors</a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="social-container text-right">
          <p className="font-medium text-sm mb-4 pt-12">Follow us:</p>
          <div className="flex justify-start space-x-6 ">
            <a
              href="https://www.linkedin.com/company/codechef-zhcet-chapter/posts/?feedView=all"
              className="social-icon"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/codechef_zhcet_chapter/"
              className="social-icon instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@codechefzhcetchapter3275"
              className="social-icon youtube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-lime-950 text-gray-400 text-sm py-4">
        <div className="container mx-auto flex justify-between items-center">
          <p>© 2024 CodeChef-ZHCET | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
