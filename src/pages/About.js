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
          I'm Ruairi Mulhall — a third-year Computer Science student with 4+ years of Java experience and growing expertise in the PERN stack (PostgreSQL, Express, React, Node.js).  
          I've built full-stack web apps, booking systems, and responsive UIs, always focusing on clean code and scalable design.
        </p>

        <p className="about-description">
          I’ve worked as a tutor at Maynooth University’s Computer Science Center, helping students with Java, data structures, and algorithms.  
          I also freelance, recently developing a booking platform for a local business using PERN.
        </p>

        <p className="about-description">
          Still exploring where I’ll specialize, but I’m driven by solving real problems, writing maintainable code, and building software people actually use.
        </p>

        <Timeline />
      </motion.section>
    </div>
  );
};

export default About;
