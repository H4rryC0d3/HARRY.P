import React from "react";
import { motion } from "framer-motion";
import "../App.css";

import foodiespot from "../assets/foodiespot.png";
import furniture from "../assets/furniture.png";
import healthhub from "../assets/HealthHub.png";
import textutils from "../assets/TextUtils.png";
import portfolio from "../assets/Portfolio.png";
import todolist from "../assets/Todolist.png";

const projects = [
  {
    img: foodiespot,
    title: "FoodieSpot",
    description:
      "FoodieSpot is a full-stack web application built with the MERN stack, designed to provide a seamless and dynamic food discovery experience for users.",
    link: "https://foodie-spot-kappa.vercel.app/",
    github: "https://github.com/H4rryC0d3/FoodieSpot"
  },
  {
    img: furniture,
    title: "Furniture",
    description:
      "Furniture Website is a responsive web application built with React.js, offering a seamless browsing experience for exploring and purchasing stylish furniture.",
    link: "https://wood-topaz.vercel.app/",
    github: "https://github.com/H4rryC0d3/Wood.git"
  },
  {
    img: healthhub,
    title: "HealthHub",
    description:
      "HealthHub is a responsive web application built with HTML, CSS, and JavaScript, designed to manage patient records and appointments efficiently.",
    link: "https://health-hub-khaki.vercel.app/",
    github: "https://github.com/H4rryC0d3/HealthHub"
  },
  {
    img: textutils,
    title: "TextUtils",
    description:
      "TextUtils is a responsive web application built with React.js, designed to analyze and manipulate text efficiently.",
    link: "https://textutils-one-eta.vercel.app/",
    github: "https://github.com/H4rryC0d3/TextUtils"
  },
  {
    img: portfolio,
    title: "Portfolio",
    description:
      "Portfolio is a responsive web application built with React.js, showcasing my skills, projects, and experiences in an interactive and visually appealing way.",
    link: "https://hpadiyar.vercel.app/",
    github: "https://github.com/H4rryC0d3/Portfolio"
  }
];

const Projects = () => {
  return (
    <motion.section
      className="project"
      id="project"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="heading">
        My <span>Projects</span>
      </h2>
      <p className="project-intro">
        Here are some of the projects I'm proud to have worked on. Each represents
        a unique challenge and a learning opportunity.
      </p>

      {/* Mobile Scrollable Wrapper */}
      <div className="scroll-wrapper">
        <div className="project-container">
          {projects.map((project, index) => (
            <motion.div
              className="project-box"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <div className="image-container">
                <img src={project.img} alt={`${project.title} Screenshot`} />
              </div>

              <div className="project-layer">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="project-buttons">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github"></i> GitHub
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

