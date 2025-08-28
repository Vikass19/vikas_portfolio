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
    { name: "Home", icon: <FaHome />, href: "#hero" },
      { name: "Portfolio", icon: <FaRegEye />, href: "#portfolio" },
    { name: "About", icon: <GiStack />, href: "#about" },
    { name: "Certificates", icon: <FaWpforms />, href: "#certificates" },
  
    { name: "Contact", icon: <LuSplit />, href: "#contact" },
  ];

  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-gradient-to-br from-black to-gray-900 text-gray-300 border-r border-gray-700 shadow-2xl rounded-r-2xl z-50">
      {/* Logo */}
      <div className="flex justify-center items-center p-6 border-b border-gray-700">
        <h1 className="text-3xl font-extrabold text-gold tracking-wide">VB</h1>
      </div>

      {/* Search */}
      <div className="px-6 py-4">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-gold outline-none transition"
          />
        </div>
      </div>

      {/* Navigation */}
      <ul className="space-y-3 px-4 mt-4">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="flex items-center gap-4 px-4 py-2 rounded-xl hover:bg-gray-800 hover:text-gold transition-all duration-300 group"
            >
              <span className="text-xl group-hover:text-gold">{link.icon}</span>
              <span className="text-base font-medium">{link.name}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* Divider */}
      <hr className="my-6 border-gray-700 mx-6" />

      {/* Theme Toggle */}
      <div className="flex justify-around px-6 mt-auto">
        <button
          onClick={() => setTheme("light")}
          className="flex flex-col items-center gap-1 hover:text-yellow-400 transition"
        >
          <FaSun className="text-2xl" />
          <span className="text-xs">Light</span>
        </button>
        <button
          onClick={() => setTheme("dark")}
          className="flex flex-col items-center gap-1 hover:text-gray-300 transition"
        >
          <FaMoon className="text-2xl" />
          <span className="text-xs">Dark</span>
        </button>
      </div>

      {/* Optional Logout */}
      {/* <div className="px-6 mt-6">
        <a href="#" className="flex items-center gap-3 text-red-400 hover:text-red-500 transition">
          <FaSignOutAlt className="text-xl" />
          <span>Logout</span>
        </a>
      </div> */}
    </div>
  );
};

export default Sidebar;
