import React from "react";
import Header from "./componants/Header";
import Hero from "./componants/Hero";
import About from "./componants/About";
import Portfolio from "./componants/Portfolio";
import Certificates from "./componants/Certificates";
import Contact from "./componants/Contact";
import Footer from "./componants/Footer";
import Techstack from "./componants/Techstack";


const App = () => {
  return (
    <div>
  <Header />
  <Hero />
  <About />
 <Techstack />
  <Certificates />
  <Portfolio />
  <Contact />
 <Footer />

    </div>
  );
};

export default App;
