import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Import your images
import blog1 from "../assets/homepage.png";
import blog2 from "../assets/blogdetail.png";
import blog3 from "../assets/searchResult.png";
import recipe1 from "../assets/recipeview.png";
import recipe2 from "../assets/recipepage.png";
import recipe3 from "../assets/loginpage.png";
import clg_1 from "../assets/clg_management/page1.png";
import clg_2 from "../assets/clg_management/page2.png";
import clg_3 from "../assets/clg_management/page3.png";
import clg_4 from "../assets/clg_management/page4.png";
import clg_5 from "../assets/clg_management/page5.png";
import homepage from "../assets/gitProfile/homepage.png";
import loading from "../assets/gitProfile/loading.png";
import data from "../assets/gitProfile/data.png";

const Portfolio = () => {
  const projects = [
    {
      title: "Blog Project",
      images: [blog1, blog2, blog3],
      desc: "A blog platform with user authentication, Markdown support, and full CRUD capabilities.",
      github: "https://github.com/Vikass19/blog-website",
      live: "https://blog-website-codebyvikas.vercel.app/",
    },
    {
      title: "Recipe Project",
      images: [recipe1, recipe2, recipe3],
      desc: "Explore 12,000+ recipes with smart search and complete recipe management system.",
      github: "https://github.com/Vikass19/Recipe_Sharing_System",
      live: "https://recipe-website-codebyvikas.vercel.app/",
    },
    {
      title: "College Management System",
      images: [clg_1, clg_2, clg_3, clg_4, clg_5],
      desc: "A full-featured College Management System with role-based logins, attendance tracking, marks entry, and notice board functionality.",
      github: "https://github.com/Vikass19/college-management",
      live: "#",
    },
    {
      title: "GitHub Profile Finder",
      images: [homepage, loading, data],
      desc: "A React + Tailwind web app using the GitHub API that lets users search profiles and explore repositories with a modern UI.",
      github: "https://github.com/Vikass19/git-profile-finder",
      live: "https://git-profile-finder-seven.vercel.app/",
    },
  ];

  return (
    <section
      id="portfolio"
      className="bg-gradient-to-br from-black via-[#0f0f0f] to-gray-900 text-gold py-20 px-6 rounded-2xl"
    >
      {/* Section Header */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h2 className="text-5xl font-extrabold leading-tight">
          My <span className="text-yellow">Portfolio</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          Crafted with clean code, creative design, and modern stack — here’s
          what I’ve built.
        </p>
      </div>

      {/* Projects */}
      <div className="flex flex-col space-y-20 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <ProjectRow key={i} project={project} reverse={i % 2 === 1} />
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-20 text-center" data-aos="fade-up">
        <p className="text-gray-400 text-lg mb-6">
          Inspired to build something together? Let’s connect.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-gold text-black rounded-full font-bold text-lg hover:bg-yellow transition shadow-md"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

// Each Project Row
const ProjectRow = ({ project, reverse }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setCurrent((prev) => (prev + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(slide);
  }, [project.images.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % project.images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-10 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
      data-aos="fade-up"
    >
      {/* Left - Image Carousel */}
      <div className="md:w-1/2 relative rounded-2xl overflow-hidden shadow-lg border border-gold/20 group">
        <img
          src={project.images[current]}
          alt={project.title}
          className="w-full h-72 object-cover transition-all duration-700"
        />

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>

        {/* Dots Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {project.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full ${
                i === current ? "bg-gold" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Right - Content */}
      <div className="md:w-1/2 space-y-4">
        <h3 className="text-3xl font-bold text-yellow">{project.title}</h3>
        <p className="text-gray-300 text-base leading-relaxed">
          {project.desc}
        </p>
        <div className="flex gap-4 pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow transition"
          >
            <i className="fa-brands fa-github"></i>
            <span>GitHub</span>
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 border border-gold px-6 py-2 rounded-full font-semibold hover:bg-gold hover:text-black transition"
          >
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
