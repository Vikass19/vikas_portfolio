import profile_image from "../assets/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-black to-gray-900 text-gold px-6 py-20 rounded-lg transition-all duration-700 ease-in-out"
    >
      {/* Section Header */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-4xl font-extrabold mb-4 hover:text-yellow transition duration-300">
          About <span className="text-yellow">Me</span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-400 hover:text-yellow transition duration-300">
          I’m a Developer, YouTuber & Freelancer focused on building meaningful and beautiful digital experiences using Python and modern web technologies.
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-right">
          <div className="relative group">
            <img
              src={profile_image}
              alt="vikas-profile"
              className="rounded-full w-64 h-64 lg:w-80 lg:h-80 object-cover shadow-xl border-4 border-gray-600 group-hover:scale-105 group-hover:rotate-1 transition-all duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 rounded-full transition duration-500"></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4" data-aos="fade-left">
          <h3 className="text-3xl font-bold text-gray-300 hover:text-yellow transition duration-300">
            I'm a <span className="text-yellow">Fullstack Developer</span> & <span className="text-yellow">Content Creator</span>
          </h3>

          <ul className="space-y-2 text-gray-400 text-lg">
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
          <div className="mt-6">
            <a
              href="#portfolio"
              className="inline-block bg-gold hover:bg-yellow text-black font-medium py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            >
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
