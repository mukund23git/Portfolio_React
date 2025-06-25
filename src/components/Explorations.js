import React from "react";
import "./Explorations.css";

const explorations = [
  {
    image: "/assets/uiux.png",
    title: "UI Design Showcase"
  },
  {
    image: "/assets/workshopgdg.png",
    title: "Concept App Interface"
  },
  {
    image: "/assets/aboutme.png",
    title: "Dark Theme Dashboard"
  },
  {
    image: "/assets/tshirt.png",
    title: "Concept App Interface"
  },
  {
    image: "/assets/diwali.png",
    title: "Dark Theme Dashboard"
  }
];

const Explorations = () => {
  return (
    <section id="explore" className="explorations-section" data-aos="fade-up">
      <h2>Your designs can look something like this too</h2>
      <p className="caption">...these are also my works =)</p>
      <div className="exploration-gallery">
        {explorations.map((item, index) => (
          <div key={index} className="exploration-card">
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explorations; 