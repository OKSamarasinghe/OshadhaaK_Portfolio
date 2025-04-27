import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

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

    setTimeout(onComplete, 5000); // Show splash screen for 5 seconds
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gray-900 flex flex-col justify-center items-center text-white">
      {/* Batman Logo Image with Reduced Space Below */}
      <img src="/batmanlogo2.png" alt="Batman Logo" className="loading-logo w-52 h-52 mb-2 object-contain" />
      
      <h1 className="text-5xl font-bold">Oshadha K (奥沙达)</h1>

      {/* New Loading Animation */}
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
      gsap.from(".fade-in", { opacity: 0, y: -20, duration: 0.5, stagger: 0.2 });
      gsap.from(".hero-btn", { opacity: 0, scale: 0.9, duration: 0.5, delay: 0.3 });
    }
  }, [showSplash]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-6">
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <>
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-6xl font-bold text-yellow-400 fade-in">
              Hello, I'm Oshadha Samarasinghe
            </h1>
            <p className="text-gray-300 text-lg mt-4 fade-in">
              Software Engineer | Undergraduate | Web Developer | Tech Enthusiast
            </p>

            {/* Call-to-Action Buttons */}
            <div className="mt-6 flex justify-center gap-4">
              <button className="hero-btn bg-blue-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
                View Projects
              </button>
              <button className="hero-btn border border-gray-300 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition">
                Download Resume
              </button>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {["JavaScript", "React.js", "Tailwind CSS", "Spring Boot"].map((skill, index) => (
              <div key={index} className="fade-in bg-gray-800 p-4 rounded-lg">
                <p className="text-lg font-semibold">{skill}</p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <footer className="mt-12 text-gray-400 text-sm">
            © 2025 Oshadha Samarasinghe
          </footer>
        </>
      )}
    </div>
  );
};

export default App;
