// Projects.js
import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: "MobileSaunas.ie",
    timeline: "Mar – Apr 2025",
    description: "Freelance web project for a cold therapy business. Implemented full booking system with REST APIs, PostgreSQL, secure admin tools, and mobile-first UI design.",
    tech: ["PostgreSQL", "Express", "React", "Node.js"],
    link: "https://mobilesaunas.ie",  // Live link added here
    github: null
  },
  {
    title: "Subtitle Translator App",
    timeline: "Feb – May 2025",
    description: "Developed under Microsoft mentorship using React, Node.js, Azure Blob Storage, and Azure AI Translation services. Enables secure subtitle file uploads, AI-powered multi-language translations, and format conversion to industry-standard subtitle types such as .srt and .vtt.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Azure AI", "OAuth2", "JWT"],
    link: "https://maynoothmssubtitletranslator-dzhbg2a6brdvh8ew.uksouth-01.azurewebsites.net",
    github: null
  },
  {
    title: "Cosmic Revival",
    timeline: "2024",
    description: "A thrilling 2D action game built in Java using Swing and Graphics2D. Players must fight off alien invaders, repair a damaged spaceship, and save the crew in a fast-paced, survival-driven experience.",
    tech: ["Java", "Swing", "Graphics2D"],
    link: null,
    github: "https://github.com/Ruairi922/CosmicRevivalJava"
  },
  {
    title: "Virtual Garden",
    timeline: "2023",
    description: "An interactive eco-friendly garden simulation built in Processing. Users design their own garden by placing flowers, while learning about their environmental impact. Designed with a clean, aesthetic UI as part of a solo university project.",
    tech: ["Processing", "Java", "UI Design"],
    link: null,
    github: "https://github.com/Ruairi922/Virtual-Garden-Processing"
  }
];




const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p className="project-timeline">{project.timeline}</p>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-badge">{t}</span>
              ))}
            </div>
            <div className="project-links">
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer">Live</a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
