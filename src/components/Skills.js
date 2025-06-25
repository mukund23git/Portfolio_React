import React from "react";
import "./Skills.css";

const skillsImages = [
  {
    image: "/assets/cards/1.png",
    title: "Flutter App Development",
  },
  {
    image: "/assets/cards/2.png",
    title: "UI/UX Design",
  },
  {
    image: "/assets/cards/3.png",
    title: "Backend APIs",
  },
  
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section" data-aos="fade-up">
      <h2>what I love working on</h2>
      <p className="caption">...just a few things I actually enjoy doing</p>
      <div className="skills-gallery">
        {skillsImages.map((item, index) => (
          <div key={index} className="skills-card">
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
