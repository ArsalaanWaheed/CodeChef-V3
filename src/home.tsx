import React, { useRef } from 'react';
import GlowingText from './components/GlowingText';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Events from './components/Events';
import Vision from './components/Vision';
import ContactUs from './components/contact-us/ContactUs';

export const Home = () => {
  const eventsSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToEvents = () => {
    if (eventsSectionRef.current) {
      eventsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-primary-50 dark:bg-black transition-colors duration-200 scroll-smooth">
      <Navbar scrollToTop={scrollToTop} scrollToEvents={scrollToEvents} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Glowing Text Section */}
        <div className="pt-20">
          <GlowingText />
        </div>

        {/* About Us Section */}
        <AboutUs />

        {/* Our Vision Section */}
        <Vision />

        {/* Events Section */}
        <div ref={eventsSectionRef}>
          <Events />
        </div>

        {/* Contact Us Section*/}
        <ContactUs />

      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
