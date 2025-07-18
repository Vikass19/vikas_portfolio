import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaSignOutAlt,
  FaSun,
  FaMoon,
  FaWpforms,
  FaRegEye,
  FaSearch,
} from "react-icons/fa";
import { LuSplit } from "react-icons/lu";
import { GiStack } from "react-icons/gi";

const Sidebar = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const links = [
    { name: "Home", icon: <FaHome />, href: "#main-content" },
    { name: "About", icon: <GiStack />, href: "#about" },
    { name: "Certificates", icon: <FaWpforms />, href: "#certificates" },
    { name: "Portfolio", icon: <FaRegEye />, href: "#portfolio" },
    { name: "Contact", icon: <LuSplit />, href: "#contact" },
  ];

  return (
    <div className="fixed top-0 left-0 h-full w-64 rounded-r-lg z-50 mt-0 bg-black text-graytext shadow-gold border-r border-gray-700">
      {/* Sidebar Header */}
      <div className="flex justify-center items-center p-4 border-b border-gray-700">
        <h2 className="text-2xl font-bold text-gold">VB</h2>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative mt-2">
          <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-graytext" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 px-4 py-2 border border-graytext rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gold shadow-sm"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="px-4 space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="p-2 bg-gray-800 rounded-full hover:bg-gold transition-colors">
                <span className="text-xl text-gold">{link.icon}</span>
              </div>
              <span>{link.name}</span>
            </a>
          </li>
        ))}
      </ul>

      <hr className="my-4 border-gray-700" />

      {/* Footer Buttons */}
      <div className="px-4 mt-20 space-y-4">
        {/* <a
          href="#"
          className="flex items-center gap-3 text-red-400 hover:text-red-500"
        >
          <div className="p-2 bg-gray-800 rounded-full hover:bg-red-500 transition-colors">
            <FaSignOutAlt className="text-xl" />
          </div>
          <span>Logout</span>
        </a> */}

        <div className="flex justify-around items-center gap-4">
          <button
            onClick={() => setTheme("light")}
            className="p-2 rounded-full bg-gray-800 hover:bg-yellow transition-colors"
          >
            <FaSun className="text-yellow" />
          </button>
          <button
            onClick={() => setTheme("dark")}
            className="p-2 rounded-full bg-gray-800 hover:bg-graytext transition-colors"
          >
            <FaMoon className="text-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
