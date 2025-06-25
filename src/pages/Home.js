import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-content">
        <h1>Hey, I'm Mukund 👋</h1>
        <p>I build clean, fast, and intuitive Flutter apps for mobile platforms.</p>
        <a href="#projects" className="cta-button">See My Work</a>
      </div>
    </section>
  );
};

export default Home;
