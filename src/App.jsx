import React, { useEffect } from "react";
import Home from "./pages/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Animation will trigger every time on scroll
    });
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
