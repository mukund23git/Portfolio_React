import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";


const projects = [
  {
    title: "Minglee",
    details: "Chat application for Android and iOS using Flutter & Firebase.",
    techStack: "Flutter, Firebase, Dart",
    description: [
      "💬 Real-time chat with <100ms latency,",
      "🔐 Secure login via Firebase Auth",
      "📱 Deployed on Android & iOS",
      "🎨 Light/dark theme toggle",
      "📤 99.9% message delivery reliability",
      "👥 Supports 100+ concurrent users"
    ],
    image: "/assets/Minglee.png",
    link: "/minglee.apk",
    action: "Download for Android",
    github: "https://github.com/mukund23git/Minglee.git",
  },
  {
    title: "SheShield",
    details: "Women's safety app built for the Google Solution Challenge.",
    techStack: "Flutter, Firebase, Google Maps API",
    description: [
      "🗺️ Safe route suggestions via Maps",
      "🚨 SOS alerts with 1-tap call/SMS",
      "⚠️ Notifies users of danger zones",
      "🔐 Live location sharing with privacy",
      "👭 500+ beta testers onboarded"
    ],
    image: "/assets/Sheshield.png",
    link: "/sheshield.apk",
    action: "Download for Android",
    github: "https://github.com/mukund23git/Sheshield",
  },
  {
    title: "Hackify",
    details: "Hackathon tracking app to help students find and join events.",
    techStack: "Flutter, REST API, Firebase",
    description: [
      "📅 200+ hackathons listed monthly",
      "🔎 Filter by domain & mode",
      "📌 Save events, get reminders",
      "🌐 Pulls data from 5+ platforms",
      "📱 Lightweight UI under 5MB"
    ],
    image: "/assets/hackify.png",
    link: "",
    action: "View Website",
    github: "https://github.com/mukund23git/Hackify-League.git",
  },
  {
    title: "Bubble Shooter",
    details: "A classic bubble shooter game using GLUT and OpenGL in C++.",
    techStack: "C++, OpenGL, GLUT",
    description: [
      "🎮 60 FPS smooth bubble gameplay",
      "👾 Physics-based shooting angle",
      "🧠 Challenge mode with score",
      "🖥️ Built for Linux desktops",
      "📈 1K+ downloads during fest demo"
    ],
    image: "/assets/bubble_shooter.png",
    link: "/bubble_shooter.zip",
    action: "Download for Linux",
    github: "https://github.com/mukund23git/Bubble-Shooter.git",
  },
  {
    title: "Movies IMDB App",
    details: "An app to browse, search, and save movies using the TMDb API.",
    techStack: "Flutter, TMDb API, REST",
    description: [
      "🎬 Browse 10K+ trending movies",
      "🔍 Fast search by title/cast",
      "⭐ View ratings, trailers, cast",
      "❤️ Save favorites locally",
      "📱 Responsive Flutter UI"
    ],
    image: "/assets/imdb.png",
    link: "/tmdb.apk",
    action: "Download for Android",
    github: "https://github.com/yourusername/minglee",
  }
];



const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="projects-horizontal-section" data-aos="fade-up">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Projects...
      </motion.h2>
       <p className="subtitle">when I am free, I try building projects from various domains...</p>
      

      <div className="scroll-container">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          &#8592;
        </button>

        <div className="projects-scroll" ref={scrollRef}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="project-text">
                <h3 className = "title">{project.title}</h3>
                <p className="details">{project.details}</p>
                <p className="description">{project.techStack}</p>
                <ul className="description">
  {project.description.map((point, index) => (
    <li key={index}>{point}</li>
  ))}
</ul>

                <div className="project-actions">
  <a href={project.link} className="open-case" download>
    {project.action}
  </a>
  {project.github && (
    <a href={project.github} className="github-link" target="_blank" rel="noreferrer">
      <FaGithub size={22} />
    </a>
  )}
</div>


              </div>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            </motion.div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => scroll("right")}>
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default Projects;
