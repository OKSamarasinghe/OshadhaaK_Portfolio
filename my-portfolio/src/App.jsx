import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    gsap.to(".welcome-text", {
      x: "500%", // Move from left to right
      duration: 10, // Duration for full movement
      repeat: 1, // Infinite loop
      ease: "linear",
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % window.innerWidth) // Keep it looping
      }
    });

    gsap.to(".loading-icon", {
      rotation: 360,
      repeat: -1,
      duration: 1,
      ease: "linear"
    });

    setTimeout(onComplete, 5000); // Show splash screen for 4 seconds
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gray-900 flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl font-bold mb-6">Oshadha K (奥沙达)</h1>

      {/* Moving Welcome Text */}
      <div className="overflow-hidden w-full flex justify-left ">
        <div className="welcome-text text-xl font-semibold whitespace-nowrap">
          Welcome | ආයුබෝවන් | வரவேற்பு | ようこそ | 欢迎  &nbsp;&nbsp;&nbsp;
        </div>
      </div>

      {/* Loading Icon */}
      <div className="absolute bottom-6 right-6 flex items-center gap-2">
        <p className="text-xl">Loading...</p>
        <div className="loading-icon w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
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
