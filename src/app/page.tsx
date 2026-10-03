import Social from "@/components/ui/social";
import Stats from "@/components/ui/stats";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <>
      <section
        id="home"
        className="section min-h-screen pt-20 relative overflow-hidden mt-4"
      >
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-lg md:text-xl text-color mb-4">
              Full-Stack Developer | AWS Cloud Deployment
            </span>

            <h1 className="h1 mb-6">
              Hello, I&apos;m <br />
              <span className="gradient-text">Rafia Khurshid</span>
            </h1>

            <p className="max-w-[700px] mb-9 text-white/70 text-base md:text-lg">
              Full-Stack Web Developer specializing in Next.js, Tailwind CSS,
              MongoDB and Sanity, with hands-on experience in AWS cloud
              deployment using EC2, S3, EBS, Application Load Balancer, Security
              Groups, Linux and Apache.
            </p>

            <div className="flex flex-col  sm:flex-row gap-4 mb-8">
              <a href="#projects">
                <Button size="lg">View Projects</Button>
              </a>

              <a href="/resume.pdf" download>
                <Button variant="outline" size="lg">
                  Download Resume
                </Button>
              </a>

              <a href="#contact">
                <Button variant="outline" size="lg">
                  Contact Me
                </Button>
              </a>
            </div>

            <Social
              containerStyles="flex gap-6"
              iconStyles="w-9 h-9 border border-color rounded-full flex justify-center items-center text-color text-base hover:bg-color hover:text-white transition-all duration-300"
            />
          </div>

          <Stats />
        </div>
      </section>

      <section id="about" className="section">
        <div className="container mx-auto text-center">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>

          <p className="max-w-3xl mx-auto text-white/70 leading-loose">
            I&apos;m a Full-Stack Web Developer focused on creating modern,
            responsive and user-friendly websites using Next.js and modern web
            technologies. I also have hands-on AWS cloud deployment experience
            through practical projects and training.
          </p>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container mx-auto text-center">
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="h3 text-color mb-4">Frontend</h3>
              <p className="text-white/70">
                HTML, CSS, JavaScript, React, Next.js, Tailwind CSS
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="h3 text-color mb-4">Backend & Database</h3>
              <p className="text-white/70">
                Node.js, Prisma, MongoDB, Sanity, API Integration
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="h3 text-color mb-4">Cloud & Infrastructure</h3>
              <p className="text-white/70">
                AWS EC2, ALB, S3, EBS, Security Groups, Linux, Apache
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container mx-auto text-center">
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <p className="text-white/70">
            My web development and AWS cloud projects.
          </p>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container mx-auto text-center">
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>

          <p className="text-white/70 mb-8">
            Have a project in mind? Feel free to get in touch.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="inline-block px-6 py-3 rounded-lg bg-color text-white hover:bg-[#7c3aed] transition-all"
          >
            Contact Me
          </a>
        </div>
      </section>
    </>
  );
}
