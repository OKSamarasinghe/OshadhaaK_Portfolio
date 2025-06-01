import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const typingTexts = [
  "Software Engineer",
  "Full-Stack Developer",
  "Tech Enthusiast",
  "Open Source Contributor"
];

const Hero = () => {
  const typingRef = useRef(null);
  useEffect(() => {
    gsap.from(".hero-text", { opacity: 0, y: 50, duration: 1 });
    gsap.from(".hero-btn", { opacity: 0, scale: 0, duration: 1, delay: 0.5 });
  }, []);

  // Simple typing effect
  useEffect(() => {
    let i = 0;
    let j = 0;
    let current = "";
    let isDeleting = false;
    let interval;
    const type = () => {
      const text = typingTexts[i % typingTexts.length];
      if (!isDeleting) {
        current = text.substring(0, j + 1);
        j++;
        if (j === text.length) {
          isDeleting = true;
          setTimeout(type, 1200);
          return;
        }
      } else {
        current = text.substring(0, j - 1);
        j--;
        if (j === 0) {
          isDeleting = false;
          i++;
        }
      }
      if (typingRef.current) typingRef.current.textContent = current;
      interval = setTimeout(type, isDeleting ? 60 : 100);
    };
    type();
    return () => clearTimeout(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 bg-gray-900 w-full">
      <div className="w-full max-w-2xl flex flex-col items-center">
        <img src="/batmanlogo2.png" alt="Logo" className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-6 border-2 border-white shadow-lg" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white hero-text">
          Hello, I'm <span className="text-white">Oshadhaa Samarasinghe</span>
        </h1>
        <div className="flex items-center justify-center gap-2 mt-3">
          <FaMapMarkerAlt className="text-white text-lg" />
          <span className="text-white text-base sm:text-lg">Colombo, Sri Lanka</span>
        </div>
        <div className="mt-4 mb-2">
          <span className="text-white text-lg sm:text-xl font-mono">I'm a <span ref={typingRef} className="border-r-2 border-white animate-pulse"></span></span>
        </div>
        <p className="text-white text-base sm:text-lg mt-2 mb-4 max-w-xl mx-auto">
          Passionate about building scalable, user-focused web applications. I love solving real-world problems with code, collaborating with creative teams, and learning new technologies every day.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-2">
          <a href="mailto:oshadakaveensamarasinghe@gmail.com" className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:opacity-80 transition hero-btn">
            <FaEnvelope /> Email Me
          </a>
          <a href="https://github.com/OKSamarasinghe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:opacity-80 transition hero-btn">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/oshadha-samarasinghe/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:opacity-80 transition hero-btn">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
        <a href="/resume.pdf" download className="hero-btn bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg mt-6 font-semibold hover:opacity-80 transition w-full max-w-xs sm:max-w-none">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
