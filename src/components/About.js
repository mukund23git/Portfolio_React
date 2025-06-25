import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section" data-aos="fade-up">
      <div className="about-content">
        <div className="about-text">
          {/* Social Icons */}
          <div className="social-shit">
            <a href="https://github.com/mukund23git" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mukund-narayan-jha-14433a290/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/mukund.yt/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>

          <h1>
  Yo, I'm <span className="glow-text">Mukund</span>
</h1>
          <p>
            I build intuitive Flutter apps and love crafting clean, reliable
            experiences for users across Android and iOS.
          </p>
          <a
  href="/assets/Mukund_Resume_In.pdf" // Adjust the path to your actual resume
  download
  className="download-resume-btn"
>
  Download Resume
</a>
        </div>

        <div className="exploration-card">
          <img src="/assets/aboutme.png" alt="Mukund About" />
        </div>
      </div>
    </section>
  );
};

export default About;
