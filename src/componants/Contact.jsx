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
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
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

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          title: "Contact Us",
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          message: data.message,
        }
      )
      .then(
        () => {
          setIsSubmitted(true);
          setData({ firstName: "", lastName: "", email: "", message: "" });
          setStep(1);
        },
        () => setIsError(true)
      );
  };

  const inputVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  };

  const formFields = [
    { key: "firstName", type: "text", placeholder: "First Name" },
    { key: "lastName", type: "text", placeholder: "Last Name" },
    { key: "email", type: "email", placeholder: "Email" },
    { key: "message", type: "textarea", placeholder: "Your Message", rows: 5 },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mb-10">
        <p className="font-mono text-signature text-sm mb-2">$ ./contact.sh</p>
        <h2 className="font-display font-black text-4xl sm:text-5xl">
          Contact Me
        </h2>
      </div>

      <div className="max-w-xl border-2 border-signature p-6 sm:p-10">
        {/* Step indicator */}
        <div className="flex gap-1 mb-8 font-mono text-xs text-muted">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`flex-1 h-1.5 ${s <= step ? "bg-signature" : "bg-line"}`}
            ></div>
          ))}
        </div>

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
                    className="p-4 bg-black border-2 border-paper focus:border-signature outline-none placeholder-muted text-paper font-display resize-none transition-colors"
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <motion.input
                    key={field.key}
                    type={field.type}
                    name={field.key}
                    placeholder={field.placeholder}
                    value={data[field.key]}
                    onChange={handleChange}
                    className="p-4 bg-black border-2 border-paper focus:border-signature outline-none placeholder-muted text-paper font-display transition-colors"
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                  />
                ))
            )}
          </AnimatePresence>

          {error && (
            <p className="font-mono text-alert text-sm">{error}</p>
          )}

          <div className="flex gap-3 mt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 border-2 border-paper text-paper font-mono uppercase text-sm hover:bg-paper hover:text-ink transition"
              >
                Back
              </button>
            )}
            {step < 4 ? (
              <button
                onClick={handleNext}
                className="flex-1 px-6 py-3 bg-signature text-ink font-mono uppercase text-sm font-bold border-2 border-signature hover:bg-ink hover:text-signature transition"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-signature text-ink font-mono uppercase text-sm font-bold border-2 border-signature hover:bg-ink hover:text-signature transition"
              >
                Send Message
              </button>
            )}
          </div>
        </form>
      </div>

      {isSubmitted && (
        <Modal
          title="Thank You!"
          message="Your message has been sent successfully."
          onClose={() => setIsSubmitted(false)}
        />
      )}

      {isError && (
        <Modal
          title="Oops!"
          message="Something went wrong. Please try again later."
          onClose={() => setIsError(false)}
          isError
        />
      )}
    </section>
  );
};

const Modal = ({ title, message, onClose, isError }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 px-4">
    <div className="bg-paper border-2 border-ink p-8 max-w-sm w-full shadow-hard-yellow">
      <h3
        className={`font-display font-black text-2xl mb-2 ${
          isError ? "text-alert" : "text-ink"
        }`}
      >
        {title}
      </h3>
      <p className="font-display text-ink/80">{message}</p>
      <button
        onClick={onClose}
        className={`mt-6 px-6 py-3 font-mono uppercase text-sm font-bold border-2 transition ${
          isError
            ? "border-alert text-alert hover:bg-alert hover:text-paper"
            : "border-ink text-ink hover:bg-ink hover:text-paper"
        }`}
      >
        Close
      </button>
    </div>
  </div>
);

export default Contact;
