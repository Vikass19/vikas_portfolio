import profile_image from "../assets/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative px-4 sm:px-6 lg:px-20 py-16 sm:py-20 transition-all duration-700 ease-in-out"
    >
      {/* Section Header */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow to-orange-400">
          About <span className="text-yellow">Me</span>
        </h2>
        <p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-400 hover:text-gray-200 transition duration-300">
          I’m a <span className="text-yellow font-semibold">Developer</span>,{" "}
          <span className="text-yellow font-semibold">YouTuber</span> &{" "}
          <span className="text-yellow font-semibold">Freelancer</span> passionate
          about building meaningful and beautiful digital experiences using{" "}
          <span className="text-yellow">Python</span>,{" "}
          <span className="text-yellow">MERN</span> & modern web technologies.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Image Section */}
        <div
          className="w-full lg:w-1/2 flex justify-center"
          data-aos="fade-right"
        >
          <div className="relative group animate-float">
            <img
              src={profile_image}
              alt="vikas-profile"
              className="rounded-full w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 
              object-cover border-4 border-white/10 
              shadow-xl group-hover:scale-105 transition-all duration-700 ease-in-out"
            />
          </div>
        </div>

        {/* Text Section */}
        <div
          className="w-full lg:w-1/2 text-center lg:text-left space-y-5 p-8 rounded-2xl 
          bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl relative"
          data-aos="fade-left"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-100">
            I'm a <span className="text-yellow">Fullstack Developer</span> &{" "}
            <span className="text-yellow">Content Creator</span>
          </h3>

          <ul className="space-y-2 text-base sm:text-lg text-gray-300">
            <li className="hover:text-yellow transition duration-300">
              <strong>Experience:</strong> Fresher
            </li>
            <li className="hover:text-yellow transition duration-300">
              <strong>Specialty:</strong> MERN & Django Stack
            </li>
            <li className="hover:text-yellow transition duration-300">
              <strong>Freelancer:</strong> Open to Work
            </li>
            <li className="hover:text-yellow transition duration-300">
              <strong>Email:</strong> vikasbansode804@gmail.com
            </li>
            <li className="hover:text-yellow transition duration-300">
              <strong>YouTube:</strong> @CodeDevApi
            </li>
          </ul>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="#portfolio"
              className="inline-block bg-gradient-to-r from-yellow to-orange-400 text-black font-semibold py-3 px-8 rounded-full 
              shadow-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.9)] transition duration-300 transform hover:scale-110"
            >
               View My Projects
            </a>
          </div>
        </div>
      </div>

      {/* Floating animation keyframes */}
      <style>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </section>
  );
};

export default About;
