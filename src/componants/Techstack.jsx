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
    <section id="tech-stack" className="py-16 sm:py-20">
      <div className="mb-10">
        <p className="font-mono text-signature text-sm mb-2">$ pip list --stack</p>
        <h2 className="font-display font-black text-4xl sm:text-5xl">
          Tech Stack
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t-2 border-l-2 border-paper">
        {techStackItems.map((item, index) => (
          <div
            key={index}
            className="border-r-2 border-b-2 border-paper p-6 sm:p-8 flex flex-col items-center gap-3 hover:bg-signature hover:text-ink transition-colors duration-150 group"
          >
            <i className={`${item.iconClass} text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-150`}></i>
            <h3 className="font-mono text-xs sm:text-sm uppercase tracking-wide text-center">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Techstack;
