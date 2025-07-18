import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-gold rounded-lg fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-wide logo">
          V<span className="text-yellow">B</span>
        </a>

        {/* Hamburger Icon */}
        <div
          id="menuicon"
          className="text-3xl cursor-pointer lg:hidden"
          onClick={toggleMenu}
        >
          <i className={isOpen ? "bx bx-x" : "bx bx-menu"}></i>
        </div>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:space-x-6 fixed lg:static top-16 left-0 w-full lg:w-auto bg-black lg:bg-transparent lg:opacity-100 flex flex-col lg:flex-row items-center transition-all duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible lg:visible"
          }`}
        >
          {["Home", "About", "Certificates", "Portfolio", "Contact"].map(
            (item, index) => (
              <li className="mt-4 lg:mt-0 group" key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-2 lg:py-0 hover:text-yellow transition duration-300 relative"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            )
          )}
        </ul>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-yellow hover:bg-gold text-black py-2 px-4 rounded-lg shadow transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
