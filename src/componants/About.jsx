import profile_image from "../assets/profile.png";

const About = () => {
  return (
    <section
      className="bg-gradient-to-r from-black via-black to-black rounded-lg text-gold py-16 px-6 transition-all duration-700 ease-in-out"
      id="about"
    >
      {/* Section Header */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-4xl font-extrabold transition duration-500 hover:text-yellow">
          About <span className="text-yellow">Me</span>
        </h2>
        <p className="mt-4 text-lg text-graytext max-w-xl mx-auto transition duration-500 hover:text-yellow">
          A passionate Developer, YouTuber, and Freelancer focused on creating impactful solutions with Python and Fullstack Development.
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 transition-all duration-700 ease-in-out">
        {/* Image Section */}
        <div
          className="about-img w-full lg:w-1/2 flex justify-center"
          data-aos="fade-right"
        >
          <div className="relative group">
            <img
              src={profile_image}
              alt="Vikass19"
              className="rounded-full w-64 h-64 lg:w-80 lg:h-80 object-cover shadow-2xl border-4 border-graytext group-hover:scale-105 group-hover:rotate-1 transition duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition duration-500 rounded-full"></div>
          </div>
        </div>

        {/* Text Content */}
        <div
          className="about-text w-full lg:w-1/2 text-center lg:text-left"
          data-aos="fade-left"
        >
          <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-graytext transition duration-500 hover:text-yellow">
            I am a <span className="text-yellow">Developer</span> and{" "}
            <span className="text-yellow">YouTuber</span>
          </h3>

          {/* Experience & Contact Details */}
          <div className="exp-area space-y-4 text-lg text-graytext">
            <p className="transition duration-500 hover:text-yellow">
              <span className="font-semibold">Experience:</span> Fresher
            </p>
            <p className="transition duration-500 hover:text-yellow">
              <span className="font-semibold">Specialty:</span> Fullstack Developer
            </p>
            <p className="transition duration-500 hover:text-yellow">
              <span className="font-semibold">Freelancer:</span> Available
            </p>
            <p className="transition duration-500 hover:text-yellow">
              <span className="font-semibold">Email:</span> vikasbansode804@gmail.com
            </p>
            <p className="transition duration-500 hover:text-yellow">
              <span className="font-semibold">YouTube Channel:</span> @CodeDevApi
            </p>
          </div>

          {/* Call to Action Button */}
          <div className="mt-8">
            <a
              href="#portfolio"
              className="bg-gold hover:bg-yellow text-black py-3 px-8 rounded-full shadow-xl transition duration-500 transform hover:scale-110 hover:rotate-1"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
