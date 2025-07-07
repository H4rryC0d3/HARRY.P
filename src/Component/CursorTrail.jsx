import { useEffect } from "react";

const CursorTrail = () => {
  useEffect(() => {
    const trail = [];
    const colors = ["#A8DADC", "#B39CD0", "#FFC1CC", "#59B2F4", "#6366f1"];

    const createSparkle = (x, y) => {
      const dot = document.createElement("div");
      dot.className = "sparkle-dot";
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.appendChild(dot);
      trail.push(dot);

      setTimeout(() => {
        dot.remove();
        trail.shift();
      }, 300);
    };

    const handleMouseMove = (e) => {
      createSparkle(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
};

export default CursorTrail;
