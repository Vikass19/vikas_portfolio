import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import sql_certificate from "../assets/sql.jpg";
import python_certi from "../assets/python.jpg";
import sql_intermediate from "../assets/sql(intermediate).png";
import js_certifi from "../assets/js_certifi.png";

const Certificates = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const certificates = [
    {
      image: python_certi,
      alt: "Python Certificate",
      title: "Python Programming",
      desc: "Earned the Python Programming (Basic) Certificate from HackerRank.",
      link: "https://www.hackerrank.com/certificates/869710f4b9b2",
    },
    {
      image: sql_certificate,
      alt: "SQL Certificate",
      title: "SQL",
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
    <section className="bg-gradient-to-br from-black via-black to-black rounded-lg text-gold py-16 px-6" id="certificates">
      {/* Section Header */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-5xl font-extrabold tracking-wide">
          My <span className="text-yellow">Certificates</span>
        </h2>
        <p className="mt-4 text-graytext max-w-2xl mx-auto text-lg leading-relaxed">
          Here are some of the certifications I’ve achieved, showcasing my skills and dedication to continuous learning.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-lg bg-black border-2 border-gold hover:shadow-2xl transition duration-500 transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`} // stagger delay
          >
            <div className="relative overflow-hidden">
              <img
                src={cert.image}
                alt={cert.alt}
                className="w-full h-64 object-cover rounded-t-xl group-hover:opacity-80 transition duration-500"
              />
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-3xl font-semibold text-yellow">
                {cert.title}
              </h3>
              <p className="text-graytext text-base leading-relaxed">
                {cert.desc}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-yellow font-semibold group-hover:underline"
              >
                View Certificate
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Animated Footer */}
      <div className="text-center mt-16" data-aos="fade-up">
        <p className="text-graytext text-lg">
          Interested in seeing how these skills can help your project?
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block px-8 py-3 bg-gold text-black rounded-full font-semibold text-lg hover:bg-yellow transition shadow-md hover:shadow-lg"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Certificates;
