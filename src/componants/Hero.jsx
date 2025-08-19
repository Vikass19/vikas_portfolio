import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import resume from "../assets/Resume_vikas.pdf";
import mypic from "../assets/profile.png";

const Hero = () => {
  const { scrollYProgress } = useScroll();

  // Parallax effects
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const profileY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const helloY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const descY = useTransform(scrollYProgress, [0, 1], [0, -25]);

  return (
    <section className="bg-gradient-to-br from-black via-[#0f0f0f] to-gray-800 text-gold py-16 sm:py-20 relative overflow-hidden rounded-lg">
      {/* 🌟 Glowing background blob */}
      <motion.div
        style={{ y: blobY }}
        className="absolute top-0 -right-20 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-gradient-to-br from-yellow to-gold rounded-full mix-blend-overlay blur-3xl opacity-10 animate-pulse -z-10"
      />

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 gap-8 sm:gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-6">
          <motion.h4
            style={{ y: helloY }}
            className="text-yellow text-base sm:text-lg font-semibold animate-pulse"
          >
            Hello!
          </motion.h4>
          <motion.h1
            style={{ y: nameY }}
            className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-tight"
          >
            I'm <span className="text-yellow">Vikas Bansode</span>
          </motion.h1>
          <motion.p
            style={{ y: descY }}
            className="text-sm sm:text-base text-graytext leading-relaxed"
          >
            I’m a passionate developer focused on building modern websites & UI
            designs. Explore my projects and let's create something impactful
            together.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto">
  <a
    href="https://www.upwork.com/freelancers/~0171c89cbf657e3644?mp_source=share"
    target="_blank"
    className="bg-gold hover:bg-yellow text-black py-2 px-4 sm:px-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:rotate-1 text-sm sm:text-base w-full sm:w-auto h-10 sm:h-auto flex items-center justify-center"
  >
    Hire Me
  </a>
  <a
    href={resume}
    target="_blank"
    rel="noopener noreferrer"
    className="border-2 border-gold hover:bg-gold text-gold hover:text-black py-2 px-4 sm:px-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105 text-sm sm:text-base w-full sm:w-auto h-10 sm:h-auto flex items-center justify-center"
  >
    View Resume
  </a>
</div>

        </div>

        {/* Right Profile & Icons */}
        <div className="lg:w-1/2 flex flex-col items-center space-y-4 sm:space-y-6 group">
          <motion.div
            style={{ y: profileY }}
            className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64"
          >
            <img
              src={mypic}
              alt="Vikas Bansode"
              className="w-full h-full object-cover rounded-full border-4 border-gold shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
            />
            <div className="absolute inset-0 rounded-full bg-black opacity-10 blur-lg"></div>
          </motion.div>

          {/* Social Links */}
          <div className="flex gap-4 sm:gap-6 text-lg sm:text-2xl">
            {[
              { href: "https://www.linkedin.com/in/vikas-bansode-324467229", icon: "linkedin" },
              { href: "https://github.com/Vikass19", icon: "github" },
              { href: "https://www.instagram.com/vikass0129", icon: "instagram" },
              { href: "https://www.youtube.com/@CodeDevApi", icon: "youtube" },
            ].map((link) => (
              <a
                key={link.icon}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-yellow transition transform hover:scale-125 hover:-translate-y-1"
              >
                <i className={`fab fa-${link.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
