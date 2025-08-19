import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "../componants/Header";
import Hero from "../componants/Hero";
import About from "../componants/About";
import Portfolio from "../componants/Portfolio";
import Certificates from "../componants/Certificates";
import Contact from "../componants/Contact";
import Footer from "../componants/Footer";
import Techstack from "../componants/Techstack";
import SideNavbar from "../componants/SideNavbar";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sectionsRef = useRef([]);
  const syncedRefs = useRef([]);

  // Clear refs before adding new
  sectionsRef.current = [];
  syncedRefs.current = [];

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    if (syncedRefs.current.length >= 2) {
      const [section1, section2] = syncedRefs.current;

      gsap.to(section2, {
        y: 0,
        scrollTrigger: {
          trigger: section1,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          onUpdate: (self) => {
            const offset = self.progress * 100;
            section2.style.transform = `translateY(${offset}px)`;
          },
        },
      });
    }
  }, []);

  const componentsArray = [Hero, About, Techstack, Certificates, Portfolio, Contact];

  return (
    <div className="relative flex flex-col min-h-screen text-white bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111827] overflow-x-hidden overflow-y-auto">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/stardust.png')",
          backgroundRepeat: "repeat",
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <div className="relative z-10">
        {/* Mobile Header */}
        <div className="block md:hidden">
          <Header />
        </div>

        <div className="flex">
          {/* Desktop Sidebar */}
          <div className="hidden md:block fixed top-0 left-0 w-48 lg:w-60">
            <SideNavbar />
          </div>

          {/* Main Content */}
          <main className="flex-1 mt-16 md:mt-0 md:ml-48 lg:ml-60 px-2 sm:px-4 md:px-8 lg:px-16 py-6 space-y-16 sm:space-y-20 md:space-y-24">
            {componentsArray.map((Component, i) => (
              <SectionWrapper
                key={i}
                ref={(el) => {
                  if (el) {
                    sectionsRef.current[i] = el;
                    if (i < 2) syncedRefs.current[i] = el;
                  }
                }}
              >
                <Component />
              </SectionWrapper>
            ))}
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};

// Forward ref for animation
const SectionWrapper = React.forwardRef(({ children }, ref) => (
  <section
    ref={ref}
    className="rounded-xl shadow-lg p-4 sm:p-6 bg-black/30 backdrop-blur-sm hover:scale-[1.01] transition-transform duration-300 overflow-hidden"
  >
    {children}
  </section>
));

export default Home;
