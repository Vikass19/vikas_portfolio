// src/components/Features.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { id: 1, title: "Feature One", description: "Description of Feature One" },
  { id: 2, title: "Feature Two", description: "Description of Feature Two" },
  { id: 3, title: "Feature Three", description: "Description of Feature Three" },
  // Add more features as needed
];

const Features = () => {
  const featureRefs = useRef([]);

  useEffect(() => {
    featureRefs.current.forEach((feature, index) => {
      gsap.fromTo(
        feature,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: feature,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="features-section">
      <h2 className="section-title">Our Features</h2>
      <div className="features-list">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            ref={(el) => (featureRefs.current[index] = el)}
            className="feature-item"
          >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
