import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking on a link
  const handleLinkClick = (sectionId) => {
    setMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle navbar transparency on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">
          Oshadha K <span className="text-white">奥沙达</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 sm:space-x-8">
          {[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Projects", id: "projects" },
            { name: "Experience", id: "experience" },
            { name: "Certifications", id: "certifications" },
            { name: "Contact", id: "contact" }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className="text-white hover:opacity-70 transition-colors duration-300"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none p-2">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 p-4 absolute w-full animate-fade-in-down top-full left-0">
          <div className="flex flex-col space-y-2 sm:space-y-4">
            {[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Projects", id: "projects" },
              { name: "Experience", id: "experience" },
              { name: "Certifications", id: "certifications" },
              { name: "Contact", id: "contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="text-white hover:opacity-70 py-2"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
