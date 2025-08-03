import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    emailjs.init("ovbolwR1v4KC1kY71"); // EmailJS User ID
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_u2jxg26", "template_wmbztcp", e.target)
      .then(
        () => {
          setIsSubmitted(true);
          e.target.reset();
        },
        () => {
          setIsError(true);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-tl from-black to-gray-900 text-gold py-20 px-6 rounded-2xl"
      data-aos="fade-up"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">
          Contact <span className="text-yellow">Me</span>
        </h2>
        <p className="mt-2 text-gray-400 text-sm">
          Have a project or a question? Send me a message below.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-gray-800 p-10 rounded-2xl shadow-xl" data-aos="zoom-in">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center justify-center space-x-3 text-yellow text-lg font-medium">
            <i className="fa-solid fa-paper-plane"></i>
            <span>Send a Message</span>
          </div>

          <div className="flex flex-col gap-4">
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              className="bg-gray-700 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow placeholder-gray-400"
              required
            />

            <label className="sr-only" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your email"
              className="bg-gray-700 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow placeholder-gray-400"
              required
            />

            <label className="sr-only" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your message"
              className="bg-gray-700 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow placeholder-gray-400 resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300 shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Success Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 transition-opacity">
          <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-sm w-full animate-fadeIn">
            <h3 className="text-2xl font-bold text-yellow mb-2">Thank You!</h3>
            <p className="text-gray-700">Your message has been sent successfully.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 px-6 py-2 bg-black hover:bg-yellow text-white font-medium rounded-lg transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {isError && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 transition-opacity">
          <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-sm w-full animate-fadeIn">
            <h3 className="text-2xl font-bold text-red-500 mb-2">Oops!</h3>
            <p className="text-gray-700">Something went wrong. Please try again later.</p>
            <button
              onClick={() => setIsError(false)}
              className="mt-6 px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition"
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
