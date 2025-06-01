import React from "react";

const About = () => {
  const skills = [
    { name: "Frontend", icon: "🖥️", items: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS", "Bootstrap"] },
    { name: "Backend", icon: "🔙", items: ["Spring Boot", "Node.js", "Express.js", "RESTful API"] },
    { name: "Database", icon: "💾", items: ["MySQL", "MongoDB", "PostgreSQL"] },
    { name: "Cloud", icon: "☁️", items: ["AWS", "Firebase", "Heroku", "Netlify"] },
    { name: "Dev Tools", icon: "🛠️", items: ["Git", "VS Code", "Postman", "Docker"] },
  ];

  return (
    <section className="py-16 sm:py-20 fade-in bg-gray-900 flex flex-col items-center justify-center w-full">
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">About Me</h2>
      <p className="max-w-3xl mx-auto mt-4 text-base sm:text-lg text-white text-center">
        A dedicated Software Engineering undergraduate at NIBM with expertise in Full-Stack Development using
        <span className="font-semibold"> React, Spring Boot, MySQL, and Cloud Technologies</span>. Passionate about building scalable applications
        and contributing to impactful projects.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto w-full">
        {skills.map((skill) => (
          <div key={skill.name} className="bg-gray-900 border border-white rounded-lg p-4 text-white flex flex-col items-center">
            <div className="text-2xl mb-2">{skill.icon}</div>
            <div className="font-bold mb-1 text-center">{skill.name}</div>
            <ul className="text-sm sm:text-base text-center">
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
