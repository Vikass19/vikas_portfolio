import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import sql_certificate from "../assets/certificates/sql.jpg";
import python_certi from "../assets/certificates/python.jpg";
import sql_intermediate from "../assets/certificates/sql_intermediate.png"; // renamed file
import js_certifi from "../assets/certificates/js_certifi.png";

const Certificates = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    startAutoSlide();
    return () => stopAutoSlide();
  }, [current]);

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

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(nextSlide, 4000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <section
      className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 py-20 px-6"
      id="certificates"
    >
      {/* Header */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-5xl font-extrabold tracking-wide text-gold drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]">
          My <span className="text-yellow">Certificates</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Verified credentials I've earned along my journey as a developer 
        </p>
      </div>

      {/* Carousel */}
      <div
        className="relative max-w-4xl mx-auto group overflow-hidden rounded-3xl  shadow-[0_0_30px_rgba(255,215,0,0.25)] bg-black/40 backdrop-blur-xl h-[500px]"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        {certificates.map((cert, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center ${
              index === current
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
          >
            {/* Certificate Image */}
            <img
              src={cert.image}
              alt={cert.alt}
              className="w-full h-full object-contain rounded-2xl transition-transform duration-500 hover:scale-105 hover:rotate-1"
            />

            {/* Title Overlay */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-md px-6 py-3 rounded-full text-yellow text-lg font-semibold shadow-lg border border-yellow/30">
              {cert.title}
            </div>

            {/* Hover Button */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 bg-gold text-black font-semibold px-5 py-2 rounded-full opacity-0 group-hover:opacity-100 transition shadow-lg hover:scale-105"
            >
              View Certificate
            </a>
          </div>
        ))}

        {/* Prev / Next Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/70 hover:bg-gold hover:text-black text-yellow p-4 rounded-full transition shadow-lg"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/70 hover:bg-gold hover:text-black text-yellow p-4 rounded-full transition shadow-lg"
        >
          ❯
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 space-x-3">
        {certificates.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all ${
              index === current
                ? "bg-yellow scale-125 shadow-[0_0_12px_rgba(255,215,0,0.8)] animate-bounce"
                : "bg-gray-600 hover:bg-gray-400"
            }`}
          ></span>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-20" data-aos="fade-up">
        <p className="text-gray-400 text-lg mb-6">
          Want to collaborate or need a developer with proven skills?
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-gold text-black rounded-full font-semibold text-lg hover:bg-yellow transition shadow-lg hover:shadow-yellow-500/30"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Certificates;
