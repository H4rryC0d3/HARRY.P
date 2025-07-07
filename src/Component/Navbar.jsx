import React, { useState, useEffect } from "react";
import Avatar from "../assets/AvatarMaker.png";
import SunIcon from "../assets/sun.png";
import MoonIcon from "../assets/moon.png";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        document.documentElement.setAttribute("data-theme", savedTheme);
        setDarkMode(savedTheme === "dark");
    }, []);

    useEffect(() => {
        const theme = darkMode ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        
        // Prevent body scroll when menu is open
        if (!menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    };

    const handleMenuClick = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });

            // Ensure menu closes properly on all devices
            setTimeout(() => {
                setMenuOpen(false);
                document.body.style.overflow = "";
            }, 300);
        }
    };

    return (
        <header className="header">
            <a href="#home" className="active">
                <img className="img2" src={Avatar} alt="Harsh Padiyar's Avatar" />
            </a>

            {/* Menu Button */}
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>

            {/* Navbar with conditional open class */}
            <nav className={`navbar ${menuOpen ? "open" : ""}`}>
                <a href="#about" onClick={(e) => handleMenuClick(e, "#about")}>
                    About
                </a>
                <a href="#project" onClick={(e) => handleMenuClick(e, "#project")}>
                    Projects
                </a>
                
                <a href="#skills" onClick={(e) => handleMenuClick(e, "#skills")}>
                    Skills
                </a>
                 <a href="#contact" onClick={(e) => handleMenuClick(e, "#contact")}>
                    Contact
                </a>
                
            </nav>

            {/* Dark Mode Toggle */}
            <button className="theme-toggle" onClick={toggleDarkMode}>
                <img
                    src={darkMode ? SunIcon : MoonIcon}
                    alt={darkMode ? "Sun Icon" : "Moon Icon"}
                    className="theme-icon"
                />
            </button>
        </header>
    );
};

export default Navbar;
