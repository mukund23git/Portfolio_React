import React, { useEffect } from "react";
import "./Glowcursor.css";

const GlowCursor = () => {
  useEffect(() => {
    const glow = document.querySelector(".glow-cursor");

    const moveGlow = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  return <div className="glow-cursor"></div>;
};

export default GlowCursor;
