import blog_video from "../assets/blog_project_demo.mp4";
import recipe_video from "../assets/Recipe_project.mp4";

const Portfolio = () => {
  const projects = [
    {
      title: "Blog Project",
      video: blog_video,
      desc: "A blog platform with user auth, Markdown support, and full CRUD features.",
      link: "https://blog-website-codebyvikas.vercel.app/",
    },
    {
      title: "Recipe Project",
      video: recipe_video,
      desc: "Explore 12,000+ recipes with smart search and recipe management.",
      link: "https://github.com/Vikass19/recipe-project",
    },
  ];

  return (
    <section
      className="bg-gradient-to-br from-black to-gray-900 text-gold py-20 px-6 rounded-2xl"
      id="portfolio"
    >
      {/* Section Header */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h2 className="text-5xl font-extrabold leading-tight">
          My <span className="text-yellow">Portfolio</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          Crafted with clean code, creative design, and modern stack — here’s what I’ve built.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group rounded-3xl overflow-hidden border border-gold/30 bg-black shadow-xl hover:shadow-yellow-500/20 transition-transform duration-500 hover:scale-[1.03]"
            data-aos="zoom-in-up"
            data-aos-delay={`${index * 150}`}
          >
            {/* Video Preview */}
            <div className="overflow-hidden">
              <video
                src={project.video}
                autoPlay
                muted
                loop
                className="w-full h-64 object-cover group-hover:brightness-75 group-hover:scale-105 transition-all duration-700 rounded-t-3xl"
              />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-700 flex flex-col justify-end p-6 space-y-4">
              <h3 className="text-3xl font-semibold text-yellow">
                {project.title}
              </h3>
              <p className="text-graytext text-sm leading-relaxed">
                {project.desc}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow transition"
              >
                <i className="fa-brands fa-github"></i>
                <span>View Code</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Section Footer */}
      <div className="mt-20 text-center" data-aos="fade-up">
        <p className="text-graytext text-lg mb-6">
          Inspired to build something together? Let’s connect.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-gold text-black rounded-full font-bold text-lg hover:bg-yellow transition shadow-md"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
