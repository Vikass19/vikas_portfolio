import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-ink text-paper border-b-4 border-signature">
      <div className="flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-display font-black tracking-tight">
          VB<span className="text-signature">.</span>
        </a>

        {/* Menu Icon (Mobile) */}
        <div
          className="lg:hidden text-3xl cursor-pointer border-2 border-paper w-11 h-11 flex items-center justify-center"
          onClick={toggleMenu}
        >
          <i className={isOpen ? "bx bx-x" : "bx bx-menu"}></i>
        </div>

        {/* Navigation */}
        <ul
          className={`lg:flex lg:items-center lg:space-x-1 fixed lg:static top-[65px] left-0 w-full bg-ink lg:bg-transparent lg:w-auto text-left lg:text-center border-b-4 lg:border-0 border-signature transition-all duration-200 ${
            isOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-3 lg:opacity-100 lg:visible lg:translate-y-0"
          }`}
        >
          {["Home", "About", "Certificates", "Portfolio", "Contact"].map((item, index) => (
            <li key={index} className="border-b border-line lg:border-0">
              <a
                href={`#${item.toLowerCase()}`}
                className="block font-mono text-sm uppercase tracking-wide px-4 py-3 lg:py-2 hover:bg-signature hover:text-ink transition-colors duration-150"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-signature text-ink font-mono text-sm uppercase font-semibold py-2 px-5 border-2 border-signature hover:bg-ink hover:text-signature transition-colors duration-150"
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
