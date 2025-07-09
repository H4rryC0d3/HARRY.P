import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './App.css';
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";
import "./App.css"; // Ensure styles exist

const MainLogic = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // ✅ Menu state added

    // Toggle Theme Mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Toggle Menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Apply dark or light theme based on state
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    // Check for saved theme preference
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setDarkMode(savedTheme === "dark");
        }
    }, []);

    // ✅ Scroll Effects
    useEffect(() => {
        const handleScroll = () => {
            let sections = document.querySelectorAll("section");
            let navLinks = document.querySelectorAll("header nav a");
            let top = window.scrollY;

            sections.forEach((sec) => {
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute("id");

                if (top >= offset && top < offset + height) {
                    navLinks.forEach((link) => link.classList.remove("active"));
                    let activeLink = document.querySelector(`header nav a[href*='${id}']`);
                    if (activeLink) activeLink.classList.add("active");
                }
            });

            // Sticky Navbar
            let header = document.querySelector("header");
            if (header) header.classList.toggle("sticky", window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);

        // ✅ Scroll Reveal Effect
        ScrollReveal({
            distance: "80px",
            duration: 2000,
            delay: 200,
        });

        ScrollReveal().reveal(".home-content, heading", { origin: "top" });
        ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" });
        ScrollReveal().reveal(".home-contact h1, .about-img", { origin: "left" });
        ScrollReveal().reveal(".home-contact p, .about-content", { origin: "right" });

       

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="header">
            {/* ✅ Menu Button */}
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>

            {/* ✅ Navbar */}
            <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href="#project" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
              
            </nav>

            {/* ✅ Theme Toggle Button */}
            <button id="theme-toggle" className="theme-btn" onClick={toggleDarkMode}>
                {darkMode ? "🌙" : "☀️"}
            </button>
        </header>
    );
};

// ✅ Render App + MainLogic
createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <MainLogic />
        <App />
    </React.StrictMode>
);
