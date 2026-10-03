import React from 'react'

const About = () => {
  return (
   <div className="container mx-auto">
    <div className="text-center mb-12">
      <h2 className="section-title">
        About <span className="gradient-text">Me</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="glass-card rounded-3xl p-8">
        <p className="text-white/70 leading-8 text-base md:text-lg">
          I&apos;m a Full-Stack Web Developer focused on creating modern,
          responsive and user-friendly websites using Next.js and modern web
          technologies.
        </p>

        <p className="text-white/70 leading-8 text-base md:text-lg mt-5">
          I also have hands-on experience with AWS cloud infrastructure through
          practical projects and training, including EC2, S3, EBS, ALB and
          Linux-based deployment.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="glass-card rounded-2xl p-6">
          <h3 className="h3 text-white mb-3">Frontend</h3>
          <p className="text-white/60">
            Next.js, React, JavaScript & Tailwind CSS
          </p>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <h3 className="h3 text-white mb-3">Backend</h3>
          <p className="text-white/60">
            Node.js, Prisma, MongoDB & Sanity
          </p>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <h3 className="h3 text-white mb-3">AWS</h3>
          <p className="text-white/60">
            EC2, S3, EBS, ALB & Security Groups
          </p>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <h3 className="h3 text-white mb-3">Focus</h3>
          <p className="text-white/60">
            Modern, responsive & user-friendly websites
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About
