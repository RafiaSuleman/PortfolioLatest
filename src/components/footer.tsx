import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0B1020]">
      <div className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <Link href="#home" className="text-2xl font-semibold text-white">
            Rafia<span className="text-color">.</span>
          </Link>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
            <Link href="#about" className="hover:text-white transition">
              About
            </Link>
            <Link href="#skills" className="hover:text-white transition">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-white transition">
              Projects
            </Link>
            <Link href="#services" className="hover:text-white transition">
              Services
            </Link>
            <Link href="#contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Rafia Khurshid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;