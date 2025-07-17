import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";
import profileImg from "../assets/AvatarMaker.png";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const techGoals = [
    "🚀 Improving UI/UX design skills",
    "⚛️ Learning advanced React patterns",
    "📱 Building mobile-friendly interfaces",
    "🧠 Mastering problem-solving with Python",
    "🌐 Building scalable full-stack web apps",
    "🧩 Contributing to open-source projects",
  ];

  const rotatingTitles = [
    "Frontend Developer",
    "React Developer",
    "MERN Stack Developer",
  ];

  useEffect(() => {
    const intervalTime = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const intervalGoals = setInterval(() => {
      setIndex((prev) => (prev + 1) % techGoals.length);
    }, 3000);

    const intervalTitle = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 3000);

    return () => {
      clearInterval(intervalTime);
      clearInterval(intervalGoals);
      clearInterval(intervalTitle);
    };
  }, []);

  const openCV = () => {
    window.open(
      "https://drive.google.com/file/d/1NChXPKX1geVlFxuvNMAepFOq55SpOAIf/view?usp=drive_link",
      "_blank"
    );
  };

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="home-container" id="home">
      <div className="greeting-banner">👋 Hi there! Welcome to my space.</div>

      <div className="home-left">
        <img src={profileImg} alt="Harsh Padiyar" className="home-avatar" />
      </div>

      <div className="home-right">
        <p className="intro">Hello, I'm</p>
        <h1 className="home-name">Harsh Padiyar</h1>

        <p className="designation">
          I'm a{" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={rotatingTitles[textIndex]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="animated-role"
            >
              {rotatingTitles[textIndex]}
            </motion.span>
          </AnimatePresence>
        </p>

        <p className="tagline">🧠 Crafting Code with Creativity</p>
        <p className="clock">⏰ Current Time: {currentTime.toLocaleTimeString()}</p>

        <div className="button-group">
          <button className="btn-outline" onClick={openCV}>
            Download CV
          </button>
          <button className="btn-filled" onClick={scrollToContact}>
            Contact Info
          </button>
        </div>

        <motion.div
          key={techGoals[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="tech-rotator"
        >
          💻 <strong>{techGoals[index]}</strong>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
