import React from "react";
import "./Navbar.css";

const Navbar = ({ toggleDarkMode, isDark }) => {
  return (
    <nav className="floating-navbar">
      <div className="nav-logo">🌞 Mukund</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#explore">Explorations</a></li>
        <li><a href="#connect">Connect</a></li>
      </ul>
      <div className="nav-actions">
        <a href="#connect" className="say-hello">Say "Hello!"👋</a>
        {/* <button className="toggle-theme" onClick={toggleDarkMode}>
          {isDark ? '🌙' : '☀️'}
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;

