import React from 'react';
import ContactUsForm from './ContactUsForm';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-primary-50 dark:bg-black transition-colors duration-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactUs;
