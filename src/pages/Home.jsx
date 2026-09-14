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
  const sections = [Hero, Portfolio, About, Techstack, Certificates, Contact];

  return (
    <div className="min-h-screen w-full bg-ink text-paper">
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
        <main className="flex-1 mt-16 md:mt-0 md:ml-48 lg:ml-60 px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            {sections.map((Section, i) => (
              <React.Fragment key={i}>
                <Section />
                {i !== sections.length - 1 && (
                  <div className="border-t-2 border-dashed border-line"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Home;
