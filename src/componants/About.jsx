import profile_image from "../assets/profile1.webp";

const About = () => {
  const stats = [
    { label: "Status", value: "Fresher" },
    { label: "Stack", value: "MERN + Django" },
    { label: "Freelance", value: "Open to Work" },
    { label: "Email", value: "vikasbansode804@gmail.com" },
    { label: "YouTube", value: "@CodeDevApi" },
  ];

  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="mb-10">
        <p className="font-mono text-signature text-sm mb-2">$ cat about.md</p>
        <h2 className="font-display font-black text-4xl sm:text-5xl">
          About Me
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-stretch">
        {/* Image */}
        <div className="lg:w-2/5">
          <div className="border-2 border-paper shadow-hard-yellow h-full">
            <img
              src={profile_image}
              fetchPriority="high"
              alt="Vikas Bansode"
              className="w-full h-full object-cover "
            />
          </div>
        </div>

        {/* Text */}
        <div className="lg:w-3/5 border-2 border-paper p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl mb-4">
              Fullstack developer &amp; content creator
            </h3>
            <p className="font-display text-muted leading-relaxed mb-6">
              I'm a developer, YouTuber and freelancer who builds meaningful,
              functional digital products with Python, MERN and modern web
              tooling. I care more about things working well than looking
              flashy — though I try for both.
            </p>

            <dl className="border-t-2 border-line">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex justify-between py-3 border-b border-line font-mono text-sm"
                >
                  <dt className="text-muted uppercase">{s.label}</dt>
                  <dd className="text-paper">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <a
            href="#portfolio"
            className="mt-6 inline-block self-start bg-signature text-ink font-mono uppercase text-sm font-bold px-6 py-3 border-2 border-signature shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-150"
          >
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
