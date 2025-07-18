import React from "react";
import Home from "./pages/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // ✅ add here to trigger animations every time on scroll
    });
  }, []);

  return (
    <div>
    <Home />




    </div>
  );
};

export default App;
