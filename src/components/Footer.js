import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-name">Mukund Narayan Jha</p>
      <p className="footer-tagline">Flutter Developer • UI/UX Designer • Tech Enthusiast</p>
      <div className="footer-links">
        <a href="https://github.com/mukund23git" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/mukund-narayan-jha-14433a290/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mukundnarayanjha2005@gmail.com">Email</a>
      </div>
      <p className="footer-copy">&copy; {new Date().getFullYear()} Mukund. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
