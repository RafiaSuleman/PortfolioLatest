import Social from "@/components/ui/social";
import Stats from "@/components/ui/stats";
import { Button } from "@/components/ui/button";
import Work from "@/components/work";
import Skills from "@/components/skills";
import About from "@/components/about";
import Photo from "@/components/ui/photo";
import Service from "@/components/service";
import Contactme from "@/components/contactme";
export default function Home() {
  return (
    <>
      <section
        id="home"
        className="section min-h-screen pt-20 relative overflow-hidden"
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
              <span className="text-lg md:text-xl text-color">
                Full-Stack Developer | AWS Cloud Deployment
              </span>

              <h1 className="text-[42px] md:text-[56px] xl:text-[70px] leading-[1.1] font-semibold mt-4 mb-5">
                Hello, I&apos;m <br />
                <span className="gradient-text">Rafia Khurshid</span>
              </h1>

              <p className="max-w-[550px] mx-auto lg:mx-0 mb-7 text-white/70 text-sm md:text-base">
                Next.js Developer building modern, responsive and user-friendly
                websites.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
                <a href="#projects">
                  <Button variant="primary" size="lg">
                    View Projects
                  </Button>
                </a>

                <a href="/resume.pdf" download>
                  <Button variant="outline" size="lg">
                    Resume
                  </Button>
                </a>

                <a href="#contact">
                  <Button variant="outline" size="lg">
                    Contact Me
                  </Button>
                </a>
              </div>

              <div className="flex justify-center lg:justify-start">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-color rounded-full flex justify-center items-center text-color text-base hover:bg-color hover:text-white transition-all duration-300"
                />
              </div>
            </div>

            {/* Developer Image */}
            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
              <div className="w-full max-w-[420px]">
                <Photo />
              </div>
            </div>
          </div>

          <Stats />
        </div>
      </section>

      <section id="about" className="section">
        <About />
      </section>

      <section id="skills" className="section">
        <Skills />
      </section>

      <section id="projects" className="section">
        <Work />
      </section>

      <section id="services" className="section">
        <Service />
      </section>

      <section id="contact" className="section">
        <Contactme />
      </section>
    </>
  );
}
