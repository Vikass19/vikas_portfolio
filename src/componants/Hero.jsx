
import React, { useState, useEffect } from "react";

const Hero = () => {
  const roles = ["FULL STACK DEVELOPER", "MERN + DJANGO", "OPEN TO WORK"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2200);

    return () => clearInterval(t);
  }, []);

  const resumeUrl =
    "https://drive.google.com/file/d/1RAauSG1u8cGWzIGIfbBg5SNPOjWvLJTY/view?usp=drive_link";

  return (
    <section id="hero" className="relative py-16 sm:py-24">
      <div className="max-w-5xl">

        {/* Terminal bar */}
        <div className="inline-flex items-center gap-2 border-2 border-signature px-4 py-2 mb-8 font-mono text-xs uppercase tracking-wide text-signature">
          <span className="w-2 h-2 bg-signature animate-blink"></span>
          available for freelance & fresher roles
        </div>

        {/* SEO-focused main heading */}
        <h1 className="font-display font-black leading-[0.95] text-5xl sm:text-7xl lg:text-8xl mb-6">
          FREELANCE
          <br />
          WEB DEVELOPER
          <br />
          <span className="text-signature">IN PUNE</span>
        </h1>

        {/* Name */}
        <h2 className="font-mono text-lg sm:text-xl text-paper mb-4 uppercase">
          Vikas Bansode
        </h2>

        {/* Rotating role — terminal style */}
        <div className="font-mono text-lg sm:text-xl text-paper mb-8 h-8">
          <span className="text-signature">$</span> {roles[roleIndex]}
          <span className="terminal-cursor">&nbsp;</span>
        </div>

        {/* SEO-relevant introduction */}
        <p className="font-display text-base sm:text-lg text-muted max-w-2xl mb-10 leading-relaxed">
          I'm Vikas Bansode, a freelance web developer based in Pune.
          I build fast, responsive and modern websites and web applications
          using React, Python, Django and JavaScript for businesses,
          startups and individuals.
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.upwork.com/freelancers/~0171c89cbf657e3644?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-signature text-ink font-mono uppercase text-sm font-bold px-6 py-4 border-2 border-signature shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-150"
          >
            Hire Me
          </a>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ink text-paper font-mono uppercase text-sm font-bold px-6 py-4 border-2 border-paper shadow-hard-yellow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-150"
          >
            View Resume
          </a>
        </div>

        {/* Social row */}
        <div className="flex gap-4 mt-10 font-mono text-sm">
          {[
            {
              href: "https://www.linkedin.com/in/vikas-bansode-324467229",
              label: "LinkedIn",
            },
            {
              href: "https://github.com/Vikass19",
              label: "GitHub",
            },
            {
              href: "https://www.instagram.com/vikass0129",
              label: "Instagram",
            },
            {
              href: "https://www.youtube.com/@CodeDevApi",
              label: "YouTube",
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-signature underline underline-offset-4 decoration-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;

