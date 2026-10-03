import React from 'react'

const Skills = () => {
  return (
  <div className="container mx-auto">
    <div className="text-center mb-12">
      <h2 className="section-title">
        My <span className="gradient-text">Skills</span>
      </h2>

      <p className="text-white/60 max-w-2xl mx-auto">
        Technologies and tools I use to build modern websites and cloud-based
        solutions.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="glass-card rounded-3xl p-7 hover:-translate-y-2 transition-all duration-300">
        <h3 className="h3 text-color mb-5">Frontend</h3>

        <div className="flex flex-wrap gap-3">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Tailwind CSS",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="glass-card rounded-3xl p-7 hover:-translate-y-2 transition-all duration-300">
        <h3 className="h3 text-color mb-5">Backend & Database</h3>

        <div className="flex flex-wrap gap-3">
          {[
            "Node.js",
            "Prisma",
            "MongoDB",
            "Sanity",
            "API Integration",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="glass-card rounded-3xl p-7 hover:-translate-y-2 transition-all duration-300">
        <h3 className="h3 text-color mb-5">Cloud & Infrastructure</h3>

        <div className="flex flex-wrap gap-3">
          {[
            "AWS EC2",
            "ALB",
            "S3",
            "EBS",
            "Security Groups",
            "Linux",
            "Apache",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Skills
