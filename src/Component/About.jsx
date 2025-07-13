import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.div className="about-container">
        {/* Image with fade-in and scale animation */}
        <motion.div
          className="about-img"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={aboutImg} alt="About Me" />
        </motion.div>

        {/* Content area animation */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2
            className="about-heading"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            ABOUT ME
          </motion.h2>

          <motion.h3
            className="about-subheading"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Harsh Padiyar - Web Developer
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I’m Harsh Padiyar—a recent B.Tech graduate from MIT College with a strong passion for building dynamic and
            user-focused web applications. I specialize in full-stack development using technologies like HTML, CSS, JavaScript,
            ReactJS, Node.js, Express.js, MongoDB, Tailwind CSS, and Python. Throughout my academic journey, I’ve developed and
            deployed impactful projects such as TextUtils, Healthcare Management System, and FoodieSpot. Now, I’m ready to take
            the next step in my career by contributing to innovative tech solutions and growing as a professional developer.
          </motion.p>

          <motion.div
            className="about-social"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a href="mailto:harshpadiyar10588@gmail.com" target="_blank" rel="noreferrer">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="http://t.me/padiyarharsh" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a href="https://github.com/H4rryC0d3" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/harsh-padiyar-b6ba46308/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://x.com/HarshPadiyar4?t=CdRNLUo2GFumrB2uUmIFAw&s=09" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://instagram.com/harsh_padiyar28" target="_blank" rel="noreferrer">
  <i className="fa-brands fa-instagram"></i>
</a>

          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
