"use client";

import React from "react";
import Link from "next/link";

const links = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Services", path: "#services" },
  { name: "Contact", path: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.name}
          className="capitalize font-medium text-white/80 hover:text-color transition-all duration-300"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;