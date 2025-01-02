import React, { useState ,useRef } from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 
import './ContactUs.css'; 
import emailjs from '@emailjs/browser';

interface ContactUsProps {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export const ContactUsForm: React.FC<ContactUsProps> = ({ serviceId, templateId, publicKey }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiry: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Submitted:', formData);
  };



    const form = useRef<HTMLFormElement>(null);
  
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      emailjs
        .sendForm(serviceId, templateId, form.current!, { publicKey })
        .then(
          () => {
            console.log('SUCCESS!');
            setFormData((data)=>{
              return {
                name: '',
                phone: '',
                email: '',
                enquiry: '',
              }
            })
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  

  return (
    <div className="mt-10 max-w-7xl mx-auto p-2 pl-[2vw] sm:p-8 rounded-xl shadow-xl">
      <div className="flex flex-col sm:flex-row  w-[85vw] sm:w-[100%] items-start justify-between space-y-8 sm:space-y-0 sm:space-x-12">
        {/* Left Side: Contact Form */}
        <form onSubmit={sendEmail} className="contact-form  " ref={form} >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div>
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div>
            <label htmlFor="enquiry" className="form-label">Enquiry</label>
            <textarea
              id="enquiry"
              name="enquiry"
              value={formData.enquiry}
              onChange={handleChange}
              required
              rows={4}
              className="form-input"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="submit-btn"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Right Side: Text and Social Media Icons */}
        <div className="contact-info ">
          <h2 className="contact-heading dark:text-white">Contact Us</h2>
          <p className="contact-text dark:text-white">
            We’d love to hear from you. Please fill out the form on the left, or reach out to us directly on our social media.
          </p>
          <div className="social-icons">
            <a href="https://www.instagram.com/codechef_zhcet_chapter/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/company/codechef-zhcet-chapter/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="mailto:yourclub@example.com" className="social-icon">
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
