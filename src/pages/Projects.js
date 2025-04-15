// Projects.js
import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: "Subtitle Translator App",
    timeline: "Feb – May 2025",
    description: "Built under Microsoft mentorship using React, Node.js, Azure Blob Storage, and Azure AI Translation. Features secure file upload, multi-language subtitle translation, and editable previews with export to PDF/DOCX.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Azure AI", "OAuth2", "JWT"],
    link: "#",
    github: "#"
  },
  {
    title: "MobileSaunas.ie",
    timeline: "Mar – Apr 2025",
    description: "Freelance web project for a cold therapy business. Implemented full booking system with REST APIs, PostgreSQL, secure admin tools, and mobile-first UI design.",
    tech: ["PostgreSQL", "Express", "React", "Node.js"],
    link: "#",
    github: "#"
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
              <a href={project.link} target="_blank" rel="noreferrer">Live</a>
              <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
