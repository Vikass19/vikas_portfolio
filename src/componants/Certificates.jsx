import React from "react";
import sql_certificate from "../assets/sql.jpg";
import python_certi from "../assets/python.jpg";

const Certificates = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-6" id="certificates">
      {/* Section Header */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-5xl font-extrabold tracking-wide">
          My <span className="text-teal-400">Certificates</span>
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          Here are some of the certifications I’ve achieved, showcasing my skills and dedication to continuous learning.
        </p>
      </div>

      {/* Certificates Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
        data-aos="zoom-in-up"
      >
        {/* Card 1 */}
        <div className="relative group rounded-xl overflow-hidden shadow-lg bg-gray-800 hover:shadow-2xl transition duration-500 transform hover:scale-105">
          <div className="relative overflow-hidden">
            <img
              src={python_certi}
              alt="Python Certificate"
              className="w-full h-64 object-cover rounded-t-xl group-hover:opacity-80 transition duration-500"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div>
          {/* Card Content */}
          <div className="p-6 space-y-4">
            <h3 className="text-3xl font-semibold text-teal-400">
              Python Programming
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Earned the Python Programming (Basic) Certificate from HackerRank.
            </p>
            <a
              href="https://www.hackerrank.com/certificates/869710f4b9b2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-teal-400 font-semibold group-hover:underline"
            >
              View Certificate
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative group rounded-xl overflow-hidden shadow-lg bg-gray-800 hover:shadow-2xl transition duration-500 transform hover:scale-105">
          <div className="relative overflow-hidden">
            <img
              src={sql_certificate}
              alt="SQL Certificate"
              className="w-full h-64 object-cover rounded-t-xl group-hover:opacity-80 transition duration-500"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div>
          {/* Card Content */}
          <div className="p-6 space-y-4">
            <h3 className="text-3xl font-semibold text-teal-400">
              SQL
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Earned the SQL (Basic) Certificate from HackerRank.
            </p>
            <a
              href="https://www.hackerrank.com/certificates/869710f4b9b2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-teal-400 font-semibold group-hover:underline"
            >
              View Certificate
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Animated Footer */}
      <div className="text-center mt-16" data-aos="fade-up">
        <p className="text-gray-300 text-lg">
          Interested in seeing how these skills can help your project?
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block px-8 py-3 bg-teal-500 text-black rounded-full font-semibold text-lg hover:bg-teal-600 transition shadow-md hover:shadow-lg"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Certificates;
