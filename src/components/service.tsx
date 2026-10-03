import React from 'react'

const Service = () => {
  return (
  
  <div className="container mx-auto">
    <div className="text-center mb-12">
      <h2 className="section-title">
        My <span className="gradient-text">Services</span>
      </h2>

      <p className="text-white/60 max-w-2xl mx-auto">
        I build modern websites and help set up reliable cloud infrastructure.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      <div className="glass-card rounded-3xl p-7 hover:-translate-y-2 transition-all duration-300">
        <h3 className="h3 text-color mb-4">
          Full-Stack Web Development
        </h3>
        <p className="text-white/60 leading-7">
          Modern, responsive and user-friendly websites using Next.js,
          React, Tailwind CSS and backend technologies.
        </p>
      </div>

      <div className="glass-card rounded-3xl p-7 hover:-translate-y-2 transition-all duration-300">
        <h3 className="h3 text-color mb-4">
          AWS Cloud Deployment
        </h3>
        <p className="text-white/60 leading-7">
          Practical AWS infrastructure setup using EC2, S3, EBS, ALB,
          Security Groups, Linux and Apache.
        </p>
      </div>

      <div className="glass-card rounded-3xl p-7 hover:-translate-y-2 transition-all duration-300">
        <h3 className="h3 text-color mb-4">
          E-Commerce Websites
        </h3>
        <p className="text-white/60 leading-7">
          Responsive online stores with modern interfaces, product
          management and CMS integrations.
        </p>
      </div>

      <div className="glass-card rounded-3xl p-7 hover:-translate-y-2 transition-all duration-300">
        <h3 className="h3 text-color mb-4">
          Responsive Website Development
        </h3>
        <p className="text-white/60 leading-7">
          Clean and responsive designs optimized for desktop, tablet and
          mobile devices.
        </p>
      </div>
    </div>
  </div>

  )
}

export default Service
