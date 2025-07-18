const Techstack = () => {
  const techStackItems = [
    { name: "Python", iconClass: "fa-brands fa-python" },
    { name: "HTML5", iconClass: "fa-brands fa-html5" },
    { name: "CSS3", iconClass: "fa-brands fa-css3-alt" },
    { name: "JavaScript", iconClass: "fa-brands fa-js" },
    { name: "React", iconClass: "fa-brands fa-react" },
    { name: "django", iconClass: "fa-brands fa-django" },
    { name: "GitHub", iconClass: "fa-brands fa-github" },
    { name: "Tailwind CSS", iconClass: "fa-solid fa-paintbrush" },
  ];

  return (
    <section className="bg-black rounded-lg text-gold py-16 px-6" id="tech-stack">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          My <span className="text-yellow">Tech Stack</span>
        </h2>
        <p className="text-graytext mt-4">Technologies I work with</p>
      </div>

      {/* Tech Stack Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {techStackItems.map((item, index) => (
          <div
            key={index}
            className="tech-card bg-black border-2 border-gold p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-500"
          >
            <i
              className={`${item.iconClass} text-4xl text-yellow mx-auto mb-4 ${
                index % 3 === 0 ? "animate-spin-slow" : ""
              }`}
            ></i>
            <h3 className="text-xl font-semibold text-center">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Techstack;
