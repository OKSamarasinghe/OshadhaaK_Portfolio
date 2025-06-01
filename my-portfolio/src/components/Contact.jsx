import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState({ status: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // For actual implementation, replace with your backend API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitResult({
        status: "success",
        message: "Thank you! Your message has been sent successfully."
      });
      
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitResult({
        status: "error",
        message: "Oops! Something went wrong. Please try again."
      });
    } finally {
      setIsSubmitting(false);
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitResult({ status: "", message: "" });
      }, 5000);
    }
  };

  return (
    <section className="w-full py-16 sm:py-20 px-2 sm:px-4 fade-in bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-12">Contact Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Get In Touch</h3>
            <p className="text-white text-sm sm:text-base">
              I'm interested in freelance opportunities – especially ambitious or large projects. 
              However, if you have other requests or questions, don't hesitate to contact me.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-900 border border-white flex items-center justify-center mr-4">
                  <FaMapMarkerAlt className="text-white text-lg sm:text-xl" />
                </div>
                <span className="text-white text-sm sm:text-base">Colombo, Sri Lanka</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-900 border border-white flex items-center justify-center mr-4">
                  <FaEnvelope className="text-white text-lg sm:text-xl" />
                </div>
                <a href="mailto:oshadakaveensamarasinghe@gmail.com" className="text-white text-sm sm:text-base hover:opacity-70 transition">
                  oshadakaveensamarasinghe@gmail.com
                </a>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-900 border border-white flex items-center justify-center mr-4">
                  <FaPhone className="text-white text-lg sm:text-xl" />
                </div>
                <span className="text-white text-sm sm:text-base">+94 76 639 2356</span>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-8">
              <a 
                href="https://github.com/OKSamarasinghe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-900 border border-white flex items-center justify-center hover:opacity-70 transition"
              >
                <FaGithub className="text-white text-lg sm:text-xl" />
              </a>
              <a 
                href="https://www.linkedin.com/in/oshadha-samarasinghe/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-900 border border-white flex items-center justify-center hover:opacity-70 transition"
              >
                <FaLinkedin className="text-white text-lg sm:text-xl" />
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white mb-2 text-sm sm:text-base">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-white rounded-lg focus:outline-none focus:border-white text-white text-sm sm:text-base"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2 text-sm sm:text-base">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-white rounded-lg focus:outline-none focus:border-white text-white text-sm sm:text-base"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white mb-2 text-sm sm:text-base">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-white rounded-lg focus:outline-none focus:border-white text-white text-sm sm:text-base"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2 text-sm sm:text-base">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-white rounded-lg focus:outline-none focus:border-white text-white text-sm sm:text-base resize-none"
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`px-4 sm:px-6 py-2 sm:py-3 bg-white text-gray-900 rounded-lg font-semibold hover:opacity-80 transition w-full md:w-auto
                  ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {/* Form submission feedback */}
              {submitResult.message && (
                <div className={`mt-4 px-4 py-3 rounded-lg ${
                  submitResult.status === "success" ? "bg-gray-900 text-white border border-white" : "bg-gray-900 text-white border border-white"
                }`}>
                  {submitResult.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
