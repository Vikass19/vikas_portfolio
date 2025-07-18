import resume from "../assets/Resume_vikas.pdf";
import mypic from "../assets/profile.png";

const Hero = () => {
  return (
    <section className="bg-black rounded-lg text-gold py-16 relative overflow-hidden" id="main-content">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 space-y-10 lg:space-y-0 transition-all duration-700 ease-in-out">
        
        {/* Text Content */}
        <div
          className="lg:w-1/2 text-center lg:text-left"
          data-aos="fade-in"
        >
          <h4 className="text-yellow text-lg font-semibold animate-pulse">Hello!</h4>
          <h1 className="text-4xl lg:text-6xl font-bold mt-4 transition-transform duration-700 ease-in-out hover:scale-105">
            I'm <span className="text-yellow">Vikas Bansode</span>
          </h1>
          <p className="text-graytext mt-6 leading-relaxed transition duration-500 hover:text-yellow">
            I am a passionate developer with a keen interest in websites.
            My goal is to develop the best designs and software. Explore my
            portfolio to learn more about my work and projects.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <a
              href="https://www.upwork.com/freelancers/~0171c89cbf657e3644?mp_source=share"
              target="_blank"
              className="bg-gold hover:bg-yellow text-black py-2 px-6 rounded-lg shadow-lg transition transform hover:scale-110 hover:rotate-1"
            >
              Hire Me
            </a>
            <a
              href={resume}
              className="border-2 border-gold hover:bg-gold text-gold hover:text-black py-2 px-6 rounded-lg shadow-lg transition transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Image and Social Icons Content */}
        <div className="lg:w-1/2 flex flex-col items-center order-first lg:order-last relative group">
          <div className="relative">
            <img
              src={mypic}
              alt="Selfie Icon"
              className="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-graytext transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-black to-graytext opacity-20 blur-lg group-hover:opacity-40 transition duration-700"></div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center mt-6 space-x-6">
            <a
              href="https://www.linkedin.com/in/vikas-bansode-324467229"
              className="text-gold text-3xl hover:text-yellow transition transform hover:scale-125 hover:-translate-y-1"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Vikass19"
              className="text-gold text-3xl hover:text-yellow transition transform hover:scale-125 hover:-translate-y-1"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/vikass0129?igsh=MTN5aHFhZ3JiMmx4Zw=="
              className="text-gold text-3xl hover:text-yellow transition transform hover:scale-125 hover:-translate-y-1"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/@CodeDevApi"
              className="text-gold text-3xl hover:text-yellow transition transform hover:scale-125 hover:-translate-y-1"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

      </div>

      {/* Background Decorative Gradient Animation */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow to-gold rounded-full mix-blend-overlay blur-3xl opacity-10 animate-pulse"></div>
    </section>
  );
};

export default Hero;
