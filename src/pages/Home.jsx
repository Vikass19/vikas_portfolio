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
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header - Visible only on mobile and small screens */}
      <div className="block md:hidden">
        <Header />
      </div>

      <div className="flex">
        {/* Sidebar - Visible only on medium and larger screens */}
        <div className="hidden md:block fixed top-0 left-0">
          <SideNavbar />
        </div>

        {/* Main Content */}
        <main className="flex-1 mt-16 md:mt-0 md:ml-60 px-2 md:px-4 lg:px-8 py-6 space-y-12">
          <Hero />
           <hr className="border-gray-700 mt-5" />
          <About />
           <hr className="border-gray-700 mt-5" />
          <Techstack />
           <hr className="border-gray-700 mt-5" />
          <Certificates />
           <hr className="border-gray-700 mt-5" />
          <Portfolio />
           <hr className="border-gray-700 mt-5" />
          <Contact />
           <hr className="border-gray-700 mt-5" />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Home;
