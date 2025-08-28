import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    emailjs.init("ovbolwR1v4KC1kY71"); // Your EmailJS user ID
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };

  const handleNext = (e) => {
    e.preventDefault();
    const validations = {
      1: () => !data.firstName.trim() && "First name is required",
      2: () => !data.lastName.trim() && "Last name is required",
      3: () => {
        if (!data.email.trim()) return "Email is required";
        if (!/\S+@\S+\.\S+/.test(data.email)) return "Enter a valid email";
        return "";
      },
      4: () => !data.message.trim() && "Message is required",
    };

    const errorMsg = validations[step]();
    if (errorMsg) return setError(errorMsg);

    if (step < 4) setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send("service_u2jxg26", "template_wmbztcp", data).then(
      () => {
        setIsSubmitted(true);
        setData({ firstName: "", lastName: "", email: "", message: "" });
        setStep(1);
      },
      () => setIsError(true)
    );
  };

  const inputVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  const formFields = [
    { key: "firstName", type: "text", placeholder: "First Name" },
    { key: "lastName", type: "text", placeholder: "Last Name" },
    { key: "email", type: "email", placeholder: "Email" },
    {
      key: "message",
      type: "textarea",
      placeholder: "Your Message",
      rows: 5,
    },
  ];

  return (
    <section className="bg-gradient-to-tl from-black to-gray-900 text-white py-16 px-6 flex justify-center">
      <div className="lg:w-1/2 w-full bg-gray-800 p-10 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-yellow">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <AnimatePresence mode="wait">
            {formFields.map(
              (field, index) =>
                step === index + 1 &&
                (field.type === "textarea" ? (
                  <motion.textarea
                    key={field.key}
                    name={field.key}
                    placeholder={field.placeholder}
                    rows={field.rows}
                    value={data[field.key]}
                    onChange={handleChange}
                    className="p-4 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow placeholder-gray-400 text-white resize-none"
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.6 }}
                  />
                ) : (
                  <motion.input
                    key={field.key}
                    type={field.type}
                    name={field.key}
                    placeholder={field.placeholder}
                    value={data[field.key]}
                    onChange={handleChange}
                    className="p-4 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow placeholder-gray-400 text-white"
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.6 }}
                  />
                ))
            )}
          </AnimatePresence>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <div className="flex justify-center mt-6 gap-4">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition shadow"
              >
                Back
              </button>
            )}
            {step < 4 ? (
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-yellow text-black font-semibold rounded-xl hover:bg-yellow-500 transition shadow"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-3 bg-yellow text-black font-semibold rounded-xl hover:bg-yellow-500 transition shadow"
              >
                Send Message
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Success Modal */}
      {isSubmitted && (
        <Modal
          title="Thank You!"
          message="Your message has been sent successfully."
          onClose={() => setIsSubmitted(false)}
          buttonClass="bg-black hover:bg-yellow text-white"
        />
      )}

      {/* Error Modal */}
      {isError && (
        <Modal
          title="Oops!"
          message="Something went wrong. Please try again later."
          onClose={() => setIsError(false)}
          buttonClass="bg-red-500 hover:bg-red-600 text-white"
        />
      )}
    </section>
  );
};

const Modal = ({ title, message, onClose, buttonClass }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
    <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-sm w-full">
      <h3
        className={`text-2xl font-bold mb-2 ${
          title === "Oops!" ? "text-red-500" : "text-yellow"
        }`}
      >
        {title}
      </h3>
      <p className="text-gray-700">{message}</p>
      <button
        onClick={onClose}
        className={`mt-6 px-6 py-2 rounded-lg font-medium transition ${buttonClass}`}
      >
        Close
      </button>
    </div>
  </div>
);

export default Contact;
