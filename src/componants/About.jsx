import React from "react";
import profile_image from "../assets/two.jpeg";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-16 px-6" id="about">
      {/* Section Header */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-4xl font-extrabold">
          About <span className="text-teal-400">Me</span>
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
          A passionate Developer, YouTuber, and Freelancer focused on creating impactful solutions with Python and Fullstack Development.
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Image Section */}
        <div
          className="about-img w-full lg:w-1/2 flex justify-center"
          data-aos="fade-right"
        >
          <div className="relative">
            <img
              src={profile_image}
              alt="Vikass19"
              className="rounded-full w-64 h-64 lg:w-80 lg:h-80 object-cover shadow-2xl hover:shadow-3xl transition duration-500 transform hover:scale-105"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition duration-300 rounded-full"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="about-text w-full lg:w-1/2 text-center lg:text-left" data-aos="fade-left">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            I am a <span className="text-teal-400">Developer</span> and{" "}
            <span className="text-teal-400">YouTuber</span>
          </h3>

          {/* Experience & Contact Details */}
          <div className="exp-area space-y-4 text-lg">
            <p>
              <span className="font-semibold text-teal-400">Experience:</span> Fresher
            </p>
            <p>
              <span className="font-semibold text-teal-400">Specialty:</span> Python Fullstack Developer
            </p>
            <p>
              <span className="font-semibold text-teal-400">Freelancer:</span> Available
            </p>
            <p>
              <span className="font-semibold text-teal-400">Email:</span> vikasbansode804@gmail.com
            </p>
            
            <p>
              <span className="font-semibold text-teal-400">YouTube Channel:</span> @CodeDevApi
            </p>
          </div>

          {/* Call to Action Button */}
          <div className="mt-8">
            <a
              href="#portfolio"
              className="btn bg-teal-500 hover:bg-teal-600 text-white py-3 px-8 rounded-full shadow-xl transition duration-300 transform hover:scale-105"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
