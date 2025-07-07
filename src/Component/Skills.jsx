import React from "react";
import { motion } from "framer-motion";
import "../App.css";

import html from "../assets/HTML.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import express from "../assets/exjs.png";
import mongo from "../assets/mongo.png";
import python from "../assets/python.png";
import bootstrap from "../assets/Boot.png";
import tailwind from "../assets/tailwind.png";
import mysql from "../assets/Mysql.png";
import framerMotion from "../assets/framermotion.png";

const skills = [
  { img: python, name: "Python", description: "Versatile high-level programming language for backend & scripting." },
  { img: html, name: "HTML", description: "Standard markup language for creating web pages." },
  { img: css, name: "CSS", description: "Style sheet language used for describing the look of a webpage." },
  { img: js, name: "JavaScript", description: "High-level scripting language for dynamic web content." },
  { img: react, name: "ReactJS", description: "JavaScript library for building user interfaces." },
  { img: node, name: "Node.js", description: "JavaScript runtime for building fast backend services." },
  { img: express, name: "Express.js", description: "Minimal and flexible Node.js web application framework." },
  { img: mongo, name: "MongoDB", description: "NoSQL database for flexible and scalable data storage." },
  { img: mysql, name: "MySQL", description: "Relational database management system." },
  { img: framerMotion, name: "Framer Motion", description: "Animation library for React apps." },
  { img: bootstrap, name: "Bootstrap", description: "CSS framework for responsive UI design." },
  { img: tailwind, name: "Tailwind", description: "Utility-first CSS framework for fast UI styling." }
];


const Skills = () => {
    return (
        <section id="skills" className="skills">
            <motion.div
                className="main-text"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="heading">core<span>Skills</span></h2>
            </motion.div>

            <div className="skill-main">
                <div className="skill-center">
                    <div className="skill-grid">
                        {skills.map((skill, index) => (
  <motion.div
    className="skill-item"
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <div className="skill-image-wrapper">
  <img src={skill.img} alt={skill.name} />
</div>
<p>{skill.name}</p>
<div className="tooltip">{skill.description}</div>


  </motion.div>
))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
