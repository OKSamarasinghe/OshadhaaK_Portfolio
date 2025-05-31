import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

// Import all components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    gsap.to(".loading-logo", {
      scale: 1.2,
      opacity: 0.8,
      repeat: -1,
      yoyo: true,
      duration: 0.8,
      ease: "power1.inOut"
    });

    setTimeout(onComplete, 3000); // Show splash screen for 3 seconds (reduced from 5s)
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gray-900 flex flex-col justify-center items-center text-white z-50">
      {/* Batman Logo Image */}
      <img src="/batmanlogo2.png" alt="Batman Logo" className="loading-logo w-52 h-52 mb-2 object-contain" />
      
      <h1 className="text-5xl font-bold">Oshadha K <span className="text-emerald-400">(奥沙达)</span></h1>

      {/* Loading Animation */}
      <div className="flex flex-col items-center gap-2 mt-2">
        <p className="text-xl">Loading...</p>
        <div className="flex gap-2">
          <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-150"></div>
          <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-300"></div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (!showSplash) {
      gsap.from(".fade-in", { opacity: 0, y: 20, duration: 0.8, stagger: 0.2 });
    }
  }, [showSplash]);
  
  // Define section animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
      }
    }
  };

  return (
    <>
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <div className="bg-gray-900 text-white min-h-screen">
          <Navbar />
          
          {/* Main Content */}
          <main>
            {/* Hero Section */}
            <section id="home" className="min-h-screen">
              <Hero />
            </section>
            
            {/* About Section */}
            <motion.section 
              id="about"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
              className="min-h-screen flex items-center"
            >
              <About />
            </motion.section>

            {/* Projects Section */}
            <motion.section 
              id="projects"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
              className="min-h-screen flex items-center"
            >
              <Projects />
            </motion.section>

            {/* Experience Section */}
            <motion.section 
              id="experience"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
              className="min-h-[80vh] flex items-center"
            >
              <Experience />
            </motion.section>

            {/* Certifications Section */}
            <motion.section 
              id="certifications"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
              className="min-h-[80vh] flex items-center"
            >
              <Certifications />
            </motion.section>

            {/* Contact Section */}
            <motion.section 
              id="contact"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
              className="min-h-[80vh] flex items-center"
            >
              <Contact />
            </motion.section>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
