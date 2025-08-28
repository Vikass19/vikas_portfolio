import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import resume from "../assets/Resume_vikas.pdf";
import galaxy from "../assets/galaxy.mp4";

const Hero = () => {
  const { scrollYProgress } = useScroll();

  // Parallax effects
  const profileY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const helloY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const descY = useTransform(scrollYProgress, [0, 1], [0, -25]);

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden rounded-lg">
      {/* Video Background */}
      <video
        src={galaxy}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20"
      ></video>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6 p-6 bg-white/5 backdrop-blur-md rounded-2xl shadow-lg border border-white/10">
          <motion.h4
            style={{ y: helloY }}
            className="text-yellow text-lg sm:text-xl font-semibold"
          >
            👋 Hello!
          </motion.h4>
          <motion.h1
            style={{ y: nameY }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-yellow to-amber-400 bg-clip-text text-transparent drop-shadow-md"
          >
            I'm Vikas
          </motion.h1>
          <motion.p
            style={{ y: descY }}
            className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            A passionate developer crafting modern websites & engaging UI
            designs. Explore my projects and let’s create something impactful
            together.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6">
            <a
              href="https://www.upwork.com/freelancers/~0171c89cbf657e3644?mp_source=share"
              target="_blank"
              className="relative px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-yellow to-amber-400 text-black shadow-lg hover:shadow-yellow/50 transition-all duration-300 hover:scale-105"
            >
              Hire Me
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-6 py-3 rounded-xl font-semibold border-2 border-gold text-gold hover:bg-gold hover:text-black shadow-lg transition-all duration-300 hover:scale-105"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 flex flex-col items-center space-y-6 relative">
          {/* Floating Profile Image */}
          <motion.div
            style={{ y: profileY }}
            animate={{ y: [0, -19, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="relative flex flex-col items-center justify-center"
          >
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-[0_0_30px_rgba(255,215,0,0.6)]">
              <img
                src="https://t4.ftcdn.net/jpg/11/30/99/09/240_F_1130990961_Zf9f5Vu8LhxKshdJ93a21MSRGltgemRn.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Typing Welcome Text */}
            <div className="mt-4 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-yellow to-amber-400 bg-clip-text text-transparent typing">
              Welcome
            </div>
          </motion.div>
          

          {/* Social Links - Glass Buttons */}
          <div className="flex gap-5 sm:gap-8 text-xl sm:text-3xl">
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
                className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-gold hover:text-yellow hover:scale-125 transition transform hover:-translate-y-1 shadow-md"
              >
                <i className={`fab fa-${link.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Extra CSS Animations */}
      <style>
        {`
          .typing {
            overflow: hidden;
            white-space: nowrap;
            border-right: 3px solid #FFD700;
            width: 0;
            animation: typing 3s steps(7, end) forwards, blink 0.8s infinite;
          }
          @keyframes typing {
            from { width: 0 }
            to { width: 7ch }
          }
          @keyframes blink {
            50% { border-color: transparent }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
