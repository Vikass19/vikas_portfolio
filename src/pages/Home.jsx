import React from "react";
import Header from "../componants/Header";
import Hero from "../componants/Hero";
import About from "../componants/About";
import Portfolio from "../componants/Portfolio";
import Certificates from "../componants/Certificates";
import Contact from "../componants/Contact";
import Footer from "../componants/Footer";
import Techstack from "../componants/Techstack";
import SideNavbar from "../componants/SideNavbar";

const Home = () => {
  return (
<div className="relative flex flex-col min-h-screen text-white bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111827] overflow-x-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')",
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
          <div className="hidden md:block fixed top-0 left-0">
            <SideNavbar />
          </div>

          {/* Main Content */}
          <main className="flex-1 mt-16 md:mt-0 md:ml-60 px-4 md:px-8 lg:px-16 py-8 space-y-24">
            <SectionWrapper><Hero /></SectionWrapper>
            <SectionDivider />
            <SectionWrapper><About /></SectionWrapper>
            <SectionDivider />
            <SectionWrapper><Techstack /></SectionWrapper>
            <SectionDivider />
            <SectionWrapper><Certificates /></SectionWrapper>
            <SectionDivider />
            <SectionWrapper><Portfolio /></SectionWrapper>
            <SectionDivider />
            <SectionWrapper><Contact /></SectionWrapper>
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};

// Stylish wrapper for each section with animation & spacing
const SectionWrapper = ({ children }) => (
  <section className="rounded-xl shadow-lg p-6 bg-black/30 backdrop-blur-sm hover:scale-[1.01] transition-transform duration-300">
    {children}
  </section>
);

// Divider between sections
const SectionDivider = () => (
  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-700 to-transparent my-4"></div>
);

export default Home;
