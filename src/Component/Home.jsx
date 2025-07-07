import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import "../App.css";
import profileImg from "../assets/AvatarMaker.png";

const Home = () => {
  const typedEl = useRef(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [index, setIndex] = useState(0);

  const techGoals = [
    "🚀 Improving UI/UX design skills",
    "⚛️ Learning advanced React patterns",
    "📱 Building mobile-friendly interfaces",
    "🧠 Mastering problem-solving with Python",
    "🌐 Building scalable full-stack web apps",
    "🧩 Contributing to open-source projects",
  ];

  useEffect(() => {
   const typed = new Typed(typedEl.current, {
  strings: [
    "Frontend Developer",
    "React Developer",
    "MERN Stack Developer",
  ],
  typeSpeed: 50,      // Typing speed (ms per character)
  backSpeed: 25,      // Backspace speed (ms per character)
  startDelay: 300,    // Delay before typing starts (ms)
  backDelay: 1500,    // Pause before backspacing (ms)
  loop: true,         // Repeat indefinitely
  smartBackspace: true, // Only backspace what doesn't match the next string
});


    const intervalTime = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const intervalGoals = setInterval(() => {
      setIndex((prev) => (prev + 1) % techGoals.length);
    }, 3000);

    return () => {
      typed.destroy();
      clearInterval(intervalTime);
      clearInterval(intervalGoals);
    };
  }, []);

  const openCV = () => {
    window.open(
      "https://drive.google.com/file/d/1WsMvTrk4iySPxw9DnUl2ypg8lW8ZujPJ/view?usp=drivesdk",
      "_blank"
    );
  };

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="home-container" id="home">
      {/* 👋 Greeting */}
      <div className="greeting-banner">👋 Hi there! Welcome to my space.</div>

      <div className="home-left">
        <img src={profileImg} alt="Harsh Padiyar" className="home-avatar" />
      </div>

      <div className="home-right">
        <p className="intro">Hello, I'm</p>
        <h1 className="home-name">Harsh Padiyar</h1>
        <p className="designation">
          I'm a <span className="multiple-text" ref={typedEl}></span>
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

        {/* ✅ Rotating Tech Goals */}
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
