import React, { useEffect } from "react";
import gsap from "gsap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  useEffect(() => {
    gsap.from(".hero-text", { opacity: 0, y: 50, duration: 1 });
    gsap.from(".hero-btn", { opacity: 0, scale: 0, duration: 1, delay: 0.5 });
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-900">
      <h1 className="text-6xl font-bold text-emerald-400 hero-text">
        Hello, I'm <span className="text-yellow-400">Oshadha Samarasinghe</span>
      </h1>
      <p className="text-xl mt-4 hero-text">Software Engineering Undergraduate | Full-Stack Developer</p>
      <div className="flex space-x-6 mt-6">
        <a href="https://github.com/OKSamarasinghe" className="text-white text-3xl hover:text-gray-400">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/oshadha-samarasinghe/" className="text-blue-400 text-3xl hover:text-blue-600">
          <FaLinkedin />
        </a>
      </div>
      <button className="hero-btn bg-yellow-500 px-6 py-3 rounded-lg mt-6 text-black font-semibold hover:bg-yellow-700 transition">
        Download Resume
      </button>
    </section>
  );
};

export default Hero;
