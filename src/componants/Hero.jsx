import React from "react";
import resume from "../assets/vikasResume_v2.pdf";
import mypic from "../assets/profile.png";

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-16 relative" id="main-content">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 space-y-10 lg:space-y-0">
        {/* Text Content */}
        <div
          className="lg:w-1/2 text-center lg:text-left"
          data-aos="fade-in"
        >
          <h4 className="text-teal-400 text-lg font-semibold">Hello!</h4>
          <h1 className="text-4xl lg:text-6xl font-bold mt-4">
            I'm <span className="text-teal-400">Vikas Bansode</span>
          </h1>
          <p className="text-gray-300 mt-6 leading-relaxed">
            I am a passionate developer with a keen interest in websites.
            My goal is to develop the best designs and software. Explore my
            portfolio to learn more about my work and projects.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <a
              href="https://www.upwork.com/freelancers/~0171c89cbf657e3644?mp_source=share" target="_blank"
              className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-lg shadow-lg transition"
            >
              Hire Me
            </a>
            <a
              href={resume}
              className="border-2 border-teal-500 hover:bg-teal-500 text-teal-400 hover:text-white py-2 px-6 rounded-lg transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Image and Social Icons Content */}
        <div className="lg:w-1/2 flex flex-col items-center order-first lg:order-last relative">
          <div className="relative">
            <img
              src={mypic}
              alt="Selfie Icon"
              className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-teal-500 hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 opacity-20 blur-lg"></div>
          </div>
          <div className="flex justify-center mt-6 space-x-6">
            <a
              href="https://www.linkedin.com/in/vikas-bansode-324467229"
              className="text-teal-400 text-3xl hover:text-teal-500 transition-transform transform hover:scale-125"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Vikass19"
              className="text-teal-400 text-3xl hover:text-teal-500 transition-transform transform hover:scale-125"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/vikass0129?igsh=MTN5aHFhZ3JiMmx4Zw=="
              className="text-teal-400 text-3xl hover:text-teal-500 transition-transform transform hover:scale-125"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/@CodeDevApi"
              className="text-teal-400 text-3xl hover:text-teal-500 transition-transform transform hover:scale-125"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
