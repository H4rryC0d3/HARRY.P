import React from "react";
import { motion } from "framer-motion";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p>
          Designed & Built with 💙 by <strong>Harsh Padiyar</strong>
        </p>
        <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </motion.div>

      <motion.div
        className="back-to-top"
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.95 }}
      >
        <a href="#home" aria-label="Back to Top">
          <i className="fa-solid fa-chevron-up"></i>
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;
