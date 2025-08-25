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
      github: "https://github.com/Vikass19/codebyvikasBlog",
      live: "https://codebyvikas-blog.vercel.app/",
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
  desc: "A full-featured College Management System that simplifies student, faculty, and course management. It includes role-based logins, attendance tracking, marks entry, and notice board functionality. Designed for efficiency and easy access to academic data.",
  github: "here_is_the_link_of_collegement_system_repo_link",
  live: "project_link",
},

 {
  title: "GitHub Profile Finder",
  images: [homepage, loading, data], // replace with your screenshots
  desc: "A modern web app built with React, Vite, Tailwind CSS, and the GitHub API that allows users to search GitHub profiles and explore top repositories. It features a sleek UI/UX with smooth gradients, animations, and responsive design for a premium experience.",
  github: "https://github.com/Vikass19/git-profile-finder",
  live: "https://git-profile-finder-seven.vercel.app/",
}


  ];

  return (
    <section
      className="bg-gradient-to-br from-black to-gray-900 text-gold py-20 px-6 rounded-2xl"
      id="portfolio"
    >
      {/* Section Header */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h2 className="text-5xl font-extrabold leading-tight">
          My <span className="text-yellow">Portfolio</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          Crafted with clean code, creative design, and modern stack — here’s what I’ve built.
        </p>
      </div>

      {/* Portfolio Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} delay={index * 150} />
        ))}
      </div>

      {/* Section Footer */}
      <div className="mt-20 text-center" data-aos="fade-up">
        <p className="text-graytext text-lg mb-6">
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

// Project Card with Carousel
const ProjectCard = ({ project, delay }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }, 2000);
    return () => clearInterval(slide);
  }, [project.images.length]);

  return (
    <div
      className="relative group rounded-3xl overflow-hidden border border-gold/30 bg-black shadow-xl hover:shadow-yellow-500/20 transition-transform duration-500 hover:scale-[1.03]"
      data-aos="zoom-in-up"
      data-aos-delay={delay}
    >
      {/* Image Carousel */}
      <div className="overflow-hidden">
        <img
          src={project.images[currentIndex]}
          alt={project.title}
          className="w-full h-64 object-cover transition-all duration-700 rounded-t-3xl"
        />
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-3xl font-semibold text-yellow">
          {project.title}
        </h3>
        <p className="text-graytext text-sm leading-relaxed">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-4">
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
