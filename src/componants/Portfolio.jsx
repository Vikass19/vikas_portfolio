
import blog_video from "../assets/blog_project_demo.mp4";
import recipe_video from "../assets/Recipe_project.mp4";

const Portfolio = () => {
  return (
    <section className="bg-gradient-to-br rounded-lg from-black via-black to-black text-gold py-20 px-6" id="portfolio">
      {/* Section Header */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-5xl font-extrabold tracking-wide">
          My <span className="text-yellow">Portfolio</span>
        </h2>
        <p className="text-graytext mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
          Dive into my projects, where creativity meets functionality. Explore how I bring concepts to life through clean, responsive, and innovative web solutions.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* Blog Project Card */}
        <div className="relative group rounded-xl shadow-xl overflow-hidden bg-black border-2 border-gold transform hover:scale-105 hover:shadow-2xl transition duration-500">
          <div className="portfolio-media">
            <video
              className="w-full h-64 object-cover rounded-t-xl"
              autoPlay
              muted
              loop
            >
              <source src={blog_video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-0 group-hover:opacity-100 transition duration-700">
            <div className="flex flex-col justify-end h-full p-6 space-y-4">
              <h3 className="text-3xl font-semibold text-yellow">Blog Project</h3>
              <p className="text-graytext text-sm leading-relaxed">
                A blog platform with rich features like user authentication, Markdown support, and complete CRUD operations.
              </p>
              <a
                href="https://blog-website-codebyvikas.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 bg-gold text-black rounded-full font-medium hover:bg-yellow transition"
              >
                <i className="fa-brands fa-github"></i>
                <span>View Code</span>
              </a>
            </div>
          </div>
        </div>

        {/* Recipe Project Card */}
        <div className="relative group rounded-xl shadow-xl overflow-hidden bg-black border-2 border-gold transform hover:scale-105 hover:shadow-2xl transition duration-500">
          <div className="portfolio-media">
            <video
              className="w-full h-64 object-cover rounded-t-xl"
              autoPlay
              muted
              loop
            >
              <source src={recipe_video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-0 group-hover:opacity-100 transition duration-700">
            <div className="flex flex-col justify-end h-full p-6 space-y-4">
              <h3 className="text-3xl font-semibold text-yellow">Recipe Project</h3>
              <p className="text-graytext text-sm leading-relaxed">
                A recipe website with a massive collection of 12,000 recipes, powerful search functionality, and CRUD operations.
              </p>
              <a
                href="https://github.com/Vikass19/recipe-project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 bg-gold text-black rounded-full font-medium hover:bg-yellow transition"
              >
                <i className="fa-brands fa-github"></i>
                <span>View Code</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Section Footer */}
      <div className="mt-16 text-center" data-aos="fade-up">
        <p className="text-graytext text-lg leading-relaxed">
          Like what you see? Let’s bring your ideas to life!
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block px-6 py-3 bg-gold text-black rounded-full font-bold text-lg hover:bg-yellow transition shadow-lg"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
