import React from "react";

const projects = [
  { title: "Agrios", desc: "E-Commerce Grocery Store (React + Spring Boot)", link: "#" },
  { title: "Taste of Ceylon", desc: "Restaurant Website (HTML, CSS, JavaScript, PHP)", link: "#" },
  { title: "Online Bookstore", desc: "Book Store Management (React + Spring Boot)", link: "#" },
];

const Projects = () => {
  return (
    <section className="py-16 sm:py-20 fade-in bg-gray-900 flex flex-col items-center justify-center w-full">
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto w-full">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-900 border border-white p-4 sm:p-6 rounded-lg hover:opacity-80 transition flex flex-col items-center text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
            <p className="mt-2 text-white text-sm sm:text-base">{project.desc}</p>
            <a href={project.link} className="text-white underline mt-4 block text-sm sm:text-base">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
