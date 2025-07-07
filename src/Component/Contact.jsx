import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";
import "../App.css";

const funFacts = [
  "Did you know? Honey never spoils.",
  "You’re awesome for reaching out!",
  "Fun Fact: Octopuses have three hearts.",
  "Great ideas often start with a message.",
  "You're just one click away from innovation.",
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [randomFact, setRandomFact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x47mh9q",
        "template_byiz8mc",
        e.target,
        "w7pvmP3NM2oGvXh4g" //  actual EmailJS Public Key
      )
      .then(() => {
        setSubmitted(true);
        const fact = funFacts[Math.floor(Math.random() * funFacts.length)];
        setRandomFact(fact);

        setTimeout(() => {
          setSubmitted(false);
          setRandomFact("");
        }, 5000);

        e.target.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("❌ Failed to send message. Please try again later.");
      });
  };

  return (
    <motion.section
      className="contact-section"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="contact-wrapper">
        {/* Left Section */}
        <div className="contact-info">
          <h2 className="heading">Get in Touch</h2>
          <p className="subheading">I'd love to hear from you!</p>
          <p className="description">
            Whether it’s for a project, collaboration, or<br />
            just a hello — feel free to reach out.<br />
            I'm always open to meaningful conversations!
          </p>

          <div className="email-section">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:harshpadiyar10588@gmail.com" className="email-link">
              harshpadiyar10588@gmail.com
            </a>
          </div>

          <p className="signature-line">
            💡 P.S. I reply faster than a React component re-renders! 😉
          </p>

          <div className="availability-badge">
            <span className="dot"></span> Open to Collaborate
          </div>
        </div>

        {/* Right Section - Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="name-fields">
            <label>
              First Name
              <input type="text" name="firstName" required />
            </label>
            <label>
              Last Name
              <input type="text" name="lastName" required />
            </label>
          </div>

          <label>
            Email *
            <input type="email" name="email" required />
          </label>

          <label>
            Message
            <textarea name="message" rows={5} required></textarea>
          </label>

          <button type="submit" className="send-button">
            Send
          </button>

          {submitted && (
            <motion.div
              className="form-success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p>🎉 Thanks for your message!</p>
              <p>{randomFact}</p>
            </motion.div>
          )}
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
