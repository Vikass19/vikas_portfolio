const Techstack = () => {
  const techStackItems = [
    { name: "Python", iconClass: "fa-brands fa-python" },
    { name: "HTML5", iconClass: "fa-brands fa-html5" },
    { name: "CSS3", iconClass: "fa-brands fa-css3-alt" },
    { name: "JavaScript", iconClass: "fa-brands fa-js" },
    { name: "React", iconClass: "fa-brands fa-react" },
    { name: "Django", iconClass: "fa-brands fa-django" },
    { name: "GitHub", iconClass: "fa-brands fa-github" },
    { name: "Tailwind CSS", iconClass: "fa-solid fa-paintbrush" },
  ];

  return (
    <section
      className="bg-gradient-to-bl from-black to-gray-800 py-20 px-6 rounded-3xl shadow-inner"
      id="tech-stack"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-gold mb-4 tracking-wide">
          My <span className="text-yellow">Tech Stack</span>
        </h2>
        <p className="text-gray-400 text-lg">Technologies I use daily</p>
      </div>

      {/* Tech Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {techStackItems.map((item, index) => (
          <div
            key={index}
            className="group bg-gradient-to-tr from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-yellow-500/20 transition duration-300 transform hover:-translate-y-2 hover:scale-105"
          >
            <div className="flex flex-col items-center">
              <i
                className={`${item.iconClass} text-5xl text-yellow mb-4 group-hover:scale-125 transition-transform duration-300`}
              ></i>
              <h3 className="text-xl font-medium text-gold text-center">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Techstack;
