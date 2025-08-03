import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import sql_certificate from "../assets/sql.jpg";
import python_certi from "../assets/python.jpg";
import sql_intermediate from "../assets/sql(intermediate).png";
import js_certifi from "../assets/js_certifi.png";

const Certificates = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const certificates = [
    {
      image: python_certi,
      alt: "Python Certificate",
      title: "Python Programming",
      desc: "Earned the Python (Basic) Certificate from HackerRank.",
      link: "https://www.hackerrank.com/certificates/869710f4b9b2",
    },
    {
      image: sql_certificate,
      alt: "SQL Certificate",
      title: "SQL Basic",
      desc: "Earned the SQL (Basic) Certificate from HackerRank.",
      link: "https://www.hackerrank.com/certificates/869710f4b9b2",
    },
    {
      image: sql_intermediate,
      alt: "SQL Intermediate Certificate",
      title: "SQL Intermediate",
      desc: "Earned the SQL (Intermediate) Certificate from HackerRank.",
      link: "https://www.hackerrank.com/certificates/fadde89fee35",
    },
    {
      image: js_certifi,
      alt: "JavaScript Certificate",
      title: "JavaScript",
      desc: "Earned the JavaScript Certificate from HackerRank.",
      link: "https://www.hackerrank.com/certificates/86dff0216f7e",
    },
  ];

  return (
    <section
      className="bg-gradient-to-br from-black via-gray-900 to-gray-800 py-20 px-6 rounded-3xl text-gold"
      id="certificates"
    >
      {/* Header */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h2 className="text-5xl font-extrabold tracking-wide">
          My <span className="text-yellow">Certificates</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Showcasing some of the verified credentials I've earned during my journey as a developer and problem solver.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="group bg-black/80 border border-gold rounded-xl overflow-hidden shadow-xl transition transform hover:scale-105 hover:shadow-yellow-500/20 duration-500"
            data-aos="fade-up"
            data-aos-delay={`${index * 150}`}
          >
            <div className="overflow-hidden">
              <img
                src={cert.image}
                alt={cert.alt}
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-90"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-yellow group-hover:underline">
                {cert.title}
              </h3>
              <p className="text-gray-300 text-base">{cert.desc}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-yellow hover:text-gold transition"
              >
                View Certificate <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
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
