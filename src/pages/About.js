import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
        
      <motion.section
        className="about-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
          I'm Ruairi Mulhall — a second-year Computer Science student with a passion for building robust, scalable software.  
          I have over 4 years of experience working with Java, and I'm currently developing skills in the PERN stack (PostgreSQL, Express, React, Node.js).  
          While I have hands-on experience in full-stack web development and a strong appreciation for design and user experience, I'm still exploring where I want to specialize within the broader field of software engineering.  
          I’m driven by clean code, modular architecture, and solving real-world problems with thoughtful, maintainable solutions.
        </p>


        <p className="about-description">
          I thrive in collaborative environments and enjoy tackling complex challenges.
          I have expierience tutorying in Maynooth Universitys Computer Science Center, where I helped students understand Java, data structures, and algorithms.
        </p>

        <p className="about-description">
          I am also a freelance web developer, having built a booking system for a local business using the PERN stack.
          I am always eager to learn and grow, and I am excited about the future of technology.          
        </p>

        <Timeline />
      </motion.section>
    </div>
  );
};

export default About;
