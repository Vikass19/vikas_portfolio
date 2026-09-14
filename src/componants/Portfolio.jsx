import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Import images
import art1 from "../assets//art_gallery/artist.webp";
import art2 from "../assets//art_gallery/card.webp";
import art3 from "../assets/art_gallery/home.webp";
import art4 from "../assets/art_gallery/contact.webp";
import art5 from "../assets/art_gallery/home.webp";
import art6 from "../assets/art_gallery/product.webp";

import blog1 from "../assets/homepage.webp";
import blog2 from "../assets/blogdetail.webp";
import blog3 from "../assets/searchResult.webp";
import recipe1 from "../assets/recipeview.webp";
import recipe2 from "../assets/recipepage.webp";
import recipe3 from "../assets/loginpage.webp";
import clg_1 from "../assets/clg_management/page1.webp";
import clg_2 from "../assets/clg_management/page2.webp";
import clg_3 from "../assets/clg_management/page3.webp";
import clg_4 from "../assets/clg_management/page4.webp";
import clg_5 from "../assets/clg_management/page5.webp";
import homepage from "../assets/gitProfile/homepage.webp";
import loading from "../assets/gitProfile/loading.webp";
import data from "../assets/gitProfile/data.webp";

const Portfolio = () => {
  const projects = [
    {
      title: "Web Art Gallery",
      slug: "web-art-gallery",
      images: [art1, art2, art3, art4, art5, art6],
      desc: "A modern web art gallery built using ReactJS & Tailwind CSS. Displays artworks in clean layouts with responsive design and an attractive UI.",
      stack: ["React", "Tailwind CSS"],
      github: "https://github.com/Vikass19/web_art_gallery",
      live: "https://art-gallery-nb9k.onrender.com/",
    },
    {
      title: "Blog Project",
      slug: "blog-platform",
      images: [blog1, blog2, blog3],
      desc: "A blog platform with user authentication, Markdown support, and full CRUD capabilities.",
      stack: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/Vikass19/codebyvikasBlog",
      live: "https://codebyvikas-blog.vercel.app/",
    },
    {
      title: "Recipe Project",
      slug: "recipe-sharing-system",
      images: [recipe1, recipe2, recipe3],
      desc: "Explore 12,000+ recipes with smart search and a complete recipe management system.",
      stack: ["Django REST Framework", "React"],
      github: "https://github.com/Vikass19/Recipe_Sharing_System",
      live: "https://recipe-website-codebyvikas.vercel.app/",
    },
    {
      title: "College Management System",
      slug: "college-management",
      images: [clg_1, clg_2, clg_3, clg_4, clg_5],
      desc: "A full-featured multi-tenant system with role-based logins, attendance tracking, marks entry, and a notice board.",
      stack: ["MERN", "JWT"],
      github: "https://github.com/Vikass19/college-management",
      live: "#",
    },
    {
      title: "GitHub Profile Finder",
      slug: "git-profile-finder",
      images: [homepage, loading, data],
      desc: "A React + Tailwind app using the GitHub API that lets users search profiles and explore repositories.",
      stack: ["React", "Tailwind CSS", "GitHub API"],
      github: "https://github.com/Vikass19/git-profile-finder",
      live: "https://git-profile-finder-seven.vercel.app/",
    },
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-20">
      <div className="mb-12">
        <p className="font-mono text-signature text-sm mb-2">$ ls ~/projects</p>
        <h2 className="font-display font-black text-4xl sm:text-5xl mb-3">
          Portfolio
        </h2>
        <p className="font-display text-muted max-w-xl">
          Five shipped projects — clean code, real deployments, live demos.
        </p>
      </div>

      <div className="flex flex-col gap-14">
        {projects.map((project, i) => (
          <ProjectRow key={i} project={project} />
        ))}
      </div>

      <div className="mt-16 border-2 border-signature p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-display text-lg">
          Inspired to build something together? Let's connect.
        </p>
        <a
          href="#contact"
          className="bg-signature text-ink font-mono uppercase text-sm font-bold px-6 py-3 border-2 border-signature shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-150 whitespace-nowrap"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

// Each Project Row
const ProjectRow = ({ project }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setCurrent((prev) => (prev + 1) % project.images.length);
    }, 3500);
    return () => clearInterval(slide);
  }, [project.images.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % project.images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));

  return (
    <div className="flex flex-col md:flex-row border-2 border-paper">
      {/* Image */}
      <div className="md:w-1/2 relative border-b-2 md:border-b-0 md:border-r-2 border-paper group overflow-hidden bg-black">
        <img
          src={project.images[current]}
          alt={project.title}
          fetchPriority="high"
          className="w-full h-72 object-cover transition-all duration-500"
        />
        <button
          onClick={prevSlide}
          aria-label="Previous image"
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-ink border-2 border-signature text-signature w-9 h-9 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next image"
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-ink border-2 border-signature text-signature w-9 h-9 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
        <div className="absolute bottom-3 left-3 flex gap-2">
          {project.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`w-2.5 h-2.5 border border-signature ${
                i === current ? "bg-signature" : "bg-transparent"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
        <p className="font-mono text-xs text-muted mb-2">/{project.slug}</p>
        <h3 className="font-display font-bold text-2xl sm:text-3xl mb-3">
          {project.title}
        </h3>
        <p className="font-display text-muted text-sm sm:text-base leading-relaxed mb-4">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-[11px] uppercase border border-line px-2 py-1 text-muted"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-paper text-ink font-mono text-xs uppercase font-bold px-5 py-3 border-2 border-paper hover:bg-ink hover:text-paper transition"
          >
            <i className="fa-brands fa-github"></i>
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-signature text-signature font-mono text-xs uppercase font-bold px-5 py-3 hover:bg-signature hover:text-ink transition"
          >
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
