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
    <section className="w-full py-20 px-4 fade-in">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-emerald-400 text-center mb-12">Contact Me</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Get In Touch</h3>
            <p className="text-gray-300">
              I'm interested in freelance opportunities – especially ambitious or large projects. 
              However, if you have other requests or questions, don't hesitate to contact me.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                  <FaMapMarkerAlt className="text-yellow-400 text-xl" />
                </div>
                <span className="text-gray-300">Colombo, Sri Lanka</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                  <FaEnvelope className="text-yellow-400 text-xl" />
                </div>
                <a href="mailto:oshadakaveensamarasinghe@gmail.com" className="text-gray-300 hover:text-yellow-400 transition">
                  oshadakaveensamarasinghe@gmail.com
                </a>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                  <FaPhone className="text-yellow-400 text-xl" />
                </div>
                <span className="text-gray-300">+94 76 123 4567</span>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-8">
              <a 
                href="https://github.com/OKSamarasinghe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-400 transition"
              >
                <FaGithub className="text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/in/oshadha-samarasinghe/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-400 transition"
              >
                <FaLinkedin className="text-white" />
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white resize-none"
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`px-6 py-3 bg-yellow-400 rounded-lg text-black font-semibold hover:bg-yellow-500 transition w-full md:w-auto
                  ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {/* Form submission feedback */}
              {submitResult.message && (
                <div className={`mt-4 px-4 py-3 rounded-lg ${
                  submitResult.status === "success" ? "bg-green-900 text-green-300" : "bg-red-900 text-red-300"
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
