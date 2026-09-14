import React from "react";

const WebDevelopmentPune = () => {
  return (
    <main className="min-h-screen bg-ink text-paper">
      {/* Hero */}
      <section className="px-6 py-20 sm:px-10 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 inline-flex items-center gap-2 border-2 border-signature px-4 py-2 font-mono text-xs uppercase tracking-wide text-signature">
            <span className="h-2 w-2 bg-signature animate-blink"></span>
            Pune Web Development
          </div>

          <h1 className="max-w-5xl font-display text-5xl font-black leading-[0.95] sm:text-7xl lg:text-8xl">
            WEB DEVELOPMENT
            <br />
            <span className="text-signature">SERVICES IN PUNE</span>
          </h1>

          <p className="mt-8 max-w-3xl font-display text-base leading-relaxed text-muted sm:text-lg">
            I'm Vikas Bansode, a freelance web developer in Pune building
            modern, responsive and SEO-friendly websites and web applications
            for businesses, startups and individuals.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/#contact"
              className="border-2 border-signature bg-signature px-6 py-3 font-mono text-sm uppercase tracking-wide text-ink transition hover:opacity-80"
            >
              Start a Project
            </a>

            <a
              href="/#portfolio"
              className="border-2 border-line px-6 py-3 font-mono text-sm uppercase tracking-wide transition hover:border-signature hover:text-signature"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WebDevelopmentPune;