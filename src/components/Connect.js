import React from "react";
import "./Connect.css";
import { FaLinkedin, FaInstagram, FaGithub, FaDribbble } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6"; // Fa6 includes X (Twitter)
import { FaXTwitter } from "react-icons/fa6";        // X (formerly Twitter)
import { FaLinkedinIn } from "react-icons/fa";       // LinkedIn icon



const Connect = () => {
  return (
    <section id="connect" className="connect-section" data-aos="fade-up">
      <div className="connect-card">
        <h2>Ready to grow your ideas into amazing apps?</h2>
        <p>Let's make it happen ✨</p>
        <form className="contact-form">
          <input type="email" placeholder="Your email" required />
          <textarea placeholder="Your message" required></textarea>
          <button type="submit">Send</button>
        </form>
        <div className="contact-footer">
          {/* <div>
            <p className="label">Connect</p>
            <p className="email">"mukundnarayanjha2005@gmail.com"</p>
          </div> */}
          <div>
            <p className="label">Follow</p>
            <div className="social-icons">
              <div className="social-links">
  <a href="https://x.com/MukundNara80120" target="_blank" rel="noreferrer"><FaXTwitter /></a>
  <a href="https://www.linkedin.com/in/mukund-narayan-jha-14433a290/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
  <a href="https://www.instagram.com/mukund.yt/" target="_blank" rel="noreferrer"><FaInstagram /></a>
  <a href="https://github.com/mukund23git" target="_blank" rel="noreferrer"><FaGithub /></a>
  <a href="https://dribbble.com" target="_blank" rel="noreferrer"><FaDribbble /></a>
</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
