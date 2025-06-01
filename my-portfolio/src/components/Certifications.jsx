import React from "react";

const Certifications = () => {
  return (
    <section className="py-16 sm:py-20 fade-in bg-gray-900 flex flex-col items-center justify-center w-full">
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
        Certifications
      </h2>
      <ul className="list-disc mt-4 text-sm sm:text-lg mx-auto max-w-2xl text-white pl-6 sm:pl-8 text-center flex flex-col items-center">
        <li className="w-full">Oracle DFo Database Foundations (2024)</li>
        <li className="w-full">Oracle DD Database Design (2024)</li>
      </ul>
    </section>
  );
};

export default Certifications;
