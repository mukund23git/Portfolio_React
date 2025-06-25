import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul>
        {project.features.map((f, idx) => (
          <li key={idx}>{f}</li>
        ))}
      </ul>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        Download App
      </a>
    </div>
  );
};

export default ProjectCard;

