import React from "react";

const projects = [
  { title: "Agrios", desc: "E-Commerce Grocery Store (React + Spring Boot)", link: "#" },
  { title: "Taste of Ceylon", desc: "Restaurant Website (HTML, CSS, JavaScript, PHP)", link: "#" },
  { title: "Online Bookstore", desc: "Book Store Management (React + Spring Boot)", link: "#" },
];

const Projects = () => {
  return (
    <section className="py-20 text-center fade-in">
      <h2 className="text-4xl font-bold text-emerald-400">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="mt-2">{project.desc}</p>
            <a href={project.link} className="text-yellow-400 mt-4 block">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
