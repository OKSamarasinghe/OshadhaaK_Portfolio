import React, { useEffect } from "react";
import gsap from "gsap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  useEffect(() => {
    gsap.from(".hero-text", { opacity: 0, y: 50, duration: 1 });
    gsap.from(".hero-btn", { opacity: 0, scale: 0, duration: 1, delay: 0.5 });
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 bg-gray-900">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white hero-text">
        Hello, I'm <span className="text-white">Oshadha Samarasinghe</span>
      </h1>
      <p className="text-lg sm:text-xl mt-4 hero-text text-white">Software Engineering Undergraduate | Full-Stack Developer</p>
      <div className="flex space-x-6 mt-6 justify-center">
        <a href="https://github.com/OKSamarasinghe" className="text-white text-2xl sm:text-3xl hover:opacity-70">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/oshadha-samarasinghe/" className="text-white text-2xl sm:text-3xl hover:opacity-70">
          <FaLinkedin />
        </a>
      </div>
      <button className="hero-btn bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg mt-6 font-semibold hover:opacity-80 transition w-full max-w-xs sm:max-w-none">
        Download Resume
      </button>
    </section>
  );
};

export default Hero;
