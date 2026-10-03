"use client";

import React from "react";
import Link from "next/link";
import Navbar from "./navbar";
import { Button } from "./ui/button";
import MobileNav from "./ui/mobilenav";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B1020]/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center h-20">
        <Link href="#home">
          <h1 className="text-3xl font-semibold">
            Rafia<span className="text-color">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex gap-8 items-center">
          <Navbar />

          <Link href="#contact">
            <Button className="bg-color text-white hover:bg-[#7c3aed]">
              Hire Me
            </Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;