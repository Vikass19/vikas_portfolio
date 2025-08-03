import resume from "../assets/Resume_vikas.pdf";
import mypic from "../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="main-content"
      className="bg-gradient-to-br from-black via-[#0f0f0f] to-gray-800 text-gold py-20 relative overflow-hidden rounded-lg"
    >
      {/* 🌟 Glowing background blob */}
      <div className="absolute top-0 -right-20 w-[400px] h-[400px] bg-gradient-to-br from-yellow to-gold rounded-full mix-blend-overlay blur-3xl opacity-10 animate-pulse -z-10" />

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h4 className="text-yellow text-lg font-semibold animate-pulse">Hello!</h4>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            I'm <span className="text-yellow">Vikas Bansode</span>
          </h1>
          <p className="text-graytext leading-relaxed">
            I’m a passionate developer focused on building modern websites & UI designs. 
            Explore my projects and let's create something impactful together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://www.upwork.com/freelancers/~0171c89cbf657e3644?mp_source=share"
              target="_blank"
              className="bg-gold hover:bg-yellow text-black py-2 px-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:rotate-1"
            >
              Hire Me
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gold hover:bg-gold text-gold hover:text-black py-2 px-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Right Profile & Icons */}
        <div className="lg:w-1/2 flex flex-col items-center space-y-6 group">
          <div className="relative w-64 h-64">
            <img
              src={mypic}
              alt="Vikas Bansode"
              className="w-full h-full object-cover rounded-full border-4 border-gold shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
            />
            <div className="absolute inset-0 rounded-full bg-black opacity-10 blur-lg"></div>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 text-2xl">
            {[
              { href: "https://www.linkedin.com/in/vikas-bansode-324467229", icon: "linkedin" },
              { href: "https://github.com/Vikass19", icon: "github" },
              { href: "https://www.instagram.com/vikass0129", icon: "instagram" },
              { href: "https://www.youtube.com/@CodeDevApi", icon: "youtube" },
            ].map((link) => (
              <a
                key={link.icon}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-yellow transition transform hover:scale-125 hover:-translate-y-1"
              >
                <i className={`fab fa-${link.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
