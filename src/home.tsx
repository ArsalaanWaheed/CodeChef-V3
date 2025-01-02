import React, { useRef,forwardRef } from 'react';
import GlowingText from './components/GlowingText';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Events from './components/Events';
import Vision from './components/Vision';
import ContactUs from './components/contact-us/ContactUs';

export const Home = () => {
  const eventsSectionRef = useRef<HTMLDivElement | null>(null);
  const contactSectionRef = useRef<HTMLDivElement | null>(null);
  const gallerySectionRef = useRef<HTMLDivElement | null>(null);
  const teamSectionRef = useRef<HTMLDivElement | null>(null);



  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToEvents = () => {
    if (eventsSectionRef.current) {
      eventsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToContact = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200 scroll-smooth">
      <Navbar scrollToTop={scrollToTop} scrollToEvents={scrollToEvents} scrollToContact={scrollToContact}/>
      <div className="max-w-full mx-auto dark:px-4 sm:px-2  dark:sm:px-6 dark:lg:px-8 py-12">
        {/* Glowing Text Section */}
        <div className="pt-10 w-full">
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
        <div ref={contactSectionRef}>
        <ContactUs />
        </div>

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
