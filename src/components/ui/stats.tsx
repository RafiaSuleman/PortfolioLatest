"use client";

import React from "react";
import CountUp from "react-countup";

const stats = [
  {
    num: 3,
    text: "Years Learning & Building",
  },
  {
    num: 20,
    text: "Projects Completed",
  },
  {
    num: 10,
    text: "Technologies & Tools",
  },
  {
    num: 1,
    text: "AWS Cloud Project",
  },
];

const Stats = () => {
  return (
    <section className="pt-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <CountUp
                end={item.num}
                duration={3}
                className="text-4xl xl:text-5xl font-extrabold gradient-text"
              />
              <p className="mt-2 text-sm text-white/60 max-w-[150px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;