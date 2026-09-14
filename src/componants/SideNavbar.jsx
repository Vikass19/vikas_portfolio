import React, { useState } from "react";
import { FaHome, FaWpforms, FaRegEye, FaSearch } from "react-icons/fa";
import { GiStack } from "react-icons/gi";
import { LuSplit } from "react-icons/lu";

const Sidebar = () => {
  const [query, setQuery] = useState("");

  const links = [
    { name: "Home", icon: <FaHome />, href: "#hero" },
    { name: "Portfolio", icon: <FaRegEye />, href: "#portfolio" },
    { name: "About", icon: <GiStack />, href: "#about" },
    { name: "Certificates", icon: <FaWpforms />, href: "#certificates" },
    { name: "Contact", icon: <LuSplit />, href: "#contact" },
  ];

  return (
    <div className="fixed top-0 left-0 h-full w-48 lg:w-60 bg-ink text-paper border-r-4 border-signature z-40 flex flex-col">
      {/* Logo */}
      <div className="flex items-center justify-center p-6 border-b-4 border-signature">
        <h1 className="text-3xl font-display font-black tracking-tight">
          VB<span className="text-signature">.</span>
        </h1>
      </div>

      {/* Status */}
      <div className="px-5 py-4 border-b border-line">
        <p className="font-mono text-[11px] uppercase tracking-wide text-muted flex items-center gap-2">
          <span className="w-2 h-2 bg-signature animate-blink"></span>
          Open to work
        </p>
      </div>

      {/* Search */}
      <div className="px-5 py-4 border-b border-line">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted text-sm" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search"
            className="w-full pl-9 pr-3 py-2 bg-black text-paper border-2 border-line focus:border-signature outline-none transition font-mono text-sm placeholder-muted"
          />
        </div>
      </div>

      {/* Navigation */}
      <ul className="flex-1 px-3 py-4 space-y-1">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="flex items-center gap-3 px-3 py-3 border-2 border-transparent hover:border-signature hover:bg-signature/10 transition-all duration-150 group"
            >
              <span className="text-lg group-hover:text-signature">{link.icon}</span>
              <span className="font-mono text-sm uppercase tracking-wide">{link.name}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="px-5 py-4 border-t-4 border-signature">
        <p className="font-mono text-[10px] text-muted">$ vikas --stack=mern,django</p>
      </div>
    </div>
  );
};

export default Sidebar;
