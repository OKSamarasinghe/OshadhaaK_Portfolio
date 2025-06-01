import React from "react";

const Experience = () => {
  return (
    <section className="py-16 sm:py-20 fade-in bg-gray-900 flex flex-col items-center justify-center w-full">
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
        Experience & Activities
      </h2>
      <p className="mt-4 text-white text-base sm:text-lg text-center">
        Active Member in:
      </p>
      <ul className="list-disc mt-4 text-sm sm:text-lg mx-auto max-w-2xl text-white pl-6 sm:pl-8 text-center flex flex-col items-center">
        <li className="w-full">AIESEC in NIBM</li>
        <li className="w-full">Rotaract Club in NIBM</li>
        <li className="w-full">Computer Society in NIBM</li>
      </ul>
    </section>
  );
};

export default Experience;
