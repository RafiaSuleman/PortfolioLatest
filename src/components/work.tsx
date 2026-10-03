"use client";
import React, { useState } from "react";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";


const projects = [
  {
    num: "01",
    catagories: "E-Commerce",
    title: "A Shopping Website - Electronics Gadget Store",
    description:
      "sleek design, responsive layout, and seamless shopping experience.",
    stack: [{ name: "Tailwindcss" }, { name: "Nextjs" }, { name: "TypeScript" }, { name: "Sanity" }],
    image: "/assets/work/gadgetglide.png",
    live: "https://gadget-glide.vercel.app",
    github: "https://github.com/RafiaSuleman/GadgetGlide"
  },
  {
    num: "02",
    catagories: "E-Commerce",
    title: "A Shopping Website- Kitchen Utensils Store",
    description:
      "Top Kitchen products online store: sleek design, responsive layout, and seamless shopping experience.",
    stack: [{ name: "Tailwindcss" }, { name: "Nextjs" }, { name: "Sanity" }, { name: "GROQ" },{ name: "AIChatbot" }],
    image: "/assets/work/kitchenutinsils.png",
    live: "https://kitchen-utensils-store.vercel.app/",
   
  },

  {
    num: "04",
    catagories: "Frontend",
    title: "Serene BeautyPorlor",
    description:
      "Elegant beauty salon app: seamless booking, services, and user-friendly design.",
    stack: [{ name: "Tailwindcss" }, { name: "Nextjs" }, { name: "TypeScript" }],
    image: "/assets/work/beautyporlor.jpg",
    live: "https://beautypolorapp.vercel.app/",
   
  },
 
  {
    // isma addition kr rahe hn jo k cv ma add ho gi
    num: "05",
    catagories: "E-Commerce",
    title: "nextCommerce",
    description:
      "Stylish website: clean design, responsive layout, seamless navigation",
    stack: [{ name: "Tailwindcss" }, { name: "nextjs" }, { name: "typeScript" },{ name: "Sanity" }],
    image: "/assets/work/ecommerce.jpg",
    live: "https://e-commerce-platform-sage.vercel.app/",
   
  },
  {
    num: "06",
    catagories: "MDX Blog",
    title: "TechHives",
    description:
      "Modern blog platform: responsive design, dynamic posts, and seamless UX.",
    stack: [{ name: "Tailwindcss" }, { name: "Nextjs" }, { name: "TypeScript" }, { name: "MDX" }],
    image: "/assets/work/blogsection1.jpg",
    live: "https://final-blog-pink.vercel.app/",
    
  },
  {
    num: "05",
   catagories: "Fullstack", 
    title: "AI Content Writer",
    description:
      "A high-performance AI tool that generates instant content using Groq Cloud API, featuring a persistent history sidebar and PDF export functionality.",
    stack: [
      { name: "Next.js" }, 
      { name: "Tailwindcss" }, 
      { name: "Groq AI" }, 
      { name: "jsPDF" }
    ],
    image: "/assets/work/aiwritter.png", // Is path par apna screenshot save karein
    live: "https://ai-content-writer-liart.vercel.app/",
    github: "https://github.com/RafiaSuleman/AIContentWriter", // Apna GitHub link yahan dalein
  },
  {
    num: "06",
    catagories: "Frontend",
    title: "Qariapp",
    description:
      "Comprehensive Quranic app: intuitive interface, guidance, and easy navigation.",
    stack: [{ name: "Tailwindcss" }, { name: "nextjs" }, { name: "typeScript" }],
    image: "/assets/work/qariapp.jpg",
    live: "https://quranic-guide-qariapp.vercel.app/",
  },
  {
    num: "07",
    catagories: "Frontend",
    title: "Quranic Guide - qariapp",
    description:
      "Making Quranic learning accessible to all, right from home.",
    stack: [{ name: "Tailwindcss" }, { name: "Nextjs" }, { name: "TypeScript" }],
    image: "/assets/work/quranicguide.jpg",
    live: "https://quranic-guide-qariapp-26cewznsq-rafia-khurshids-projects.vercel.app/about",
   
  },
];



const Work = () => {
 
 return (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="w-full"
  >
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <p className="text-white/60 max-w-2xl mx-auto">
          A collection of my web development and AWS cloud projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            className="glass-card rounded-3xl overflow-hidden group"
          >
            <div className="relative h-[240px] overflow-hidden">
              <Image
                src={project.image}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt={project.title}
              />

              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0B1020]/80 backdrop-blur-sm text-sm text-white">
                {project.catagories}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-white/60 text-sm leading-6 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((item, stackIndex) => (
                  <span
                    key={stackIndex}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs"
                  >
                    {item.name}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href={project.live}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B5CF6] text-white text-sm font-semibold hover:bg-[#7C3AED] transition-all"
                >
                  Live Project
                  <BsArrowUpRight />
                </Link>

                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white hover:text-[#0B1020] transition-all"
                  >
                    <BsGithub />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);
};

export default Work;
