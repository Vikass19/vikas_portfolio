import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    emailjs.init("ovbolwR1v4KC1kY71"); // Your EmailJS User ID
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u2jxg26", // Your Service ID
        "template_wmbztcp", // Your Template ID
        e.target
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setIsSubmitted(true);
          e.target.reset();
        },
        (error) => {
          console.error("Error:", error.text);
          setIsError(true);
        }
      );
  };

  return (
    <section id="contact" className="bg-black rounded-lg  text-gold py-16 px-6" data-aos="fade-down">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          Contact <span className="text-yellow">Me</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg" data-aos="zoom-in">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center justify-center space-x-2 text-yellow text-lg">
            <i className="fa-solid fa-paper-plane"></i>
            <span className="font-medium">Message Me</span>
          </div>

          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="bg-gray-700 text-white p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="bg-gray-700 text-white p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Enter your message"
              className="bg-gray-700 text-white p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow text-black py-3 rounded-md font-semibold hover:bg-gold transition duration-300"
          >
            Send
          </button>
        </form>
      </div>

      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-graytext p-6 rounded-lg shadow-lg text-center space-y-4">
            <h3 className="text-2xl font-bold text-yellow">Thank You!</h3>
            <p>Your message has been sent successfully.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-black hover:bg-yellow text-white py-2 px-4 rounded-md transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isError && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-graytext p-6 rounded-lg shadow-lg text-center space-y-4">
            <h3 className="text-2xl font-bold text-red-500">Oops!</h3>
            <p>Something went wrong. Please try again later.</p>
            <button
              onClick={() => setIsError(false)}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
