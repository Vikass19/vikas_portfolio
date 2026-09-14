import { useEffect, useState, useRef } from "react";

import sql_certificate from "../assets/certificates/sql.webp";
import python_certi from "../assets/certificates/python.webp";
import sql_intermediate from "../assets/certificates/sql_intermediate.webp";
import js_certifi from "../assets/certificates/js_certifi.webp";

const Certificates = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const certificates = [
    {
      image: python_certi,
      alt: "Python Certificate",
      title: "Python Programming",
      link: "https://www.hackerrank.com/certificates/869710f4b9b2",
    },
    {
      image: sql_certificate,
      alt: "SQL Certificate",
      title: "SQL Basic",
      link: "https://www.hackerrank.com/certificates/869710f4b9b2",
    },
    {
      image: sql_intermediate,
      alt: "SQL Intermediate Certificate",
      title: "SQL Intermediate",
      link: "https://www.hackerrank.com/certificates/fadde89fee35",
    },
    {
      image: js_certifi,
      alt: "JavaScript Certificate",
      title: "JavaScript",
      link: "https://www.hackerrank.com/certificates/86dff0216f7e",
    },
  ];

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [current]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % certificates.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(nextSlide, 4000);
  };
  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <section id="certificates" className="py-16 sm:py-20">
      <div className="mb-10">
        <p className="font-mono text-signature text-sm mb-2">$ ls ~/certificates</p>
        <h2 className="font-display font-black text-4xl sm:text-5xl mb-3">
          Certificates
        </h2>
        <p className="font-display text-muted max-w-xl">
          Verified credentials earned along the way — HackerRank certified.
        </p>
      </div>

      {/* Carousel */}
      <div
        className="relative max-w-4xl border-2 border-paper h-[420px] sm:h-[500px] bg-black overflow-hidden group"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        {certificates.map((cert, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-500 flex items-center justify-center ${
              index === current ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={cert.image}
              alt={cert.alt}
              fetchPriority="high"
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-4 left-4 bg-signature text-ink font-mono text-xs uppercase font-bold px-4 py-2">
              {cert.title}
            </div>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 bg-ink border-2 border-signature text-signature font-mono text-xs uppercase font-bold px-4 py-2 opacity-0 group-hover:opacity-100 transition"
            >
              View Certificate
            </a>
          </div>
        ))}

        <button
          onClick={prevSlide}
          aria-label="Previous certificate"
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-ink border-2 border-signature text-signature w-10 h-10 flex items-center justify-center"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next certificate"
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-ink border-2 border-signature text-signature w-10 h-10 flex items-center justify-center"
        >
          ❯
        </button>
      </div>

      {/* Dots */}
      <div className="flex mt-6 gap-2">
        {certificates.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to certificate ${index + 1}`}
            className={`w-3 h-3 border border-signature ${
              index === current ? "bg-signature" : "bg-transparent"
            }`}
          ></button>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 border-2 border-signature p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-display text-lg">
          Want to collaborate or need a developer with proven skills?
        </p>
        <a
          href="#contact"
          className="bg-signature text-ink font-mono uppercase text-sm font-bold px-6 py-3 border-2 border-signature shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-150 whitespace-nowrap"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Certificates;
