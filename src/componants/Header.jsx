import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/80 text-white shadow-lg border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="text-3xl font-bold tracking-wider font-mono text-yellow-400">
          V<span className="text-white">B</span>
        </a>

        {/* Menu Icon (Mobile) */}
        <div className="lg:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
          <i className={isOpen ? "bx bx-x" : "bx bx-menu"}></i>
        </div>

        {/* Navigation */}
        <ul
          className={`lg:flex lg:items-center lg:space-x-8 fixed lg:static top-16 left-0 w-full bg-black lg:bg-transparent lg:w-auto text-center transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-5 lg:opacity-100 lg:visible lg:translate-y-0"
          }`}
        >
          {["Home", "About", "Certificates", "Portfolio", "Contact"].map((item, index) => (
            <li key={index} className="group relative my-4 lg:my-0">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium px-4 py-2 transition-colors duration-300 hover:text-yellow-400"
                onClick={() => setIsOpen(false)}
              >
                {item}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-5 rounded-lg shadow-md transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
