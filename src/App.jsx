import React, { useEffect } from "react";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Animations trigger every time on scroll
      easing: "ease-out-cubic", // smoother motion
    });
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111827] text-white">
      <Home />
    </div>
  );
};

export default App;
