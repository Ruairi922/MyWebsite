import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <motion.section
        className="home-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="home-title">Hi, I'm Ruairi Mulhall.</h1>
        <h2 className="home-subtitle">Computer Science student & software developer.</h2>
        <p className="home-description">
          I'm in my third year at Maynooth University. I work mainly with Java and Python, 
          and have built real projects using the PERN stack. I'm interested in backend 
          systems, AI, and security, with a focus on building software that's fast, clean, 
          and reliable.
        </p>
        <Link to="/projects" className="home-button">View My Work</Link>
        <a 
          href="https://www.linkedin.com/in/ruairimulhall/" 
          className="home-button" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          My LinkedIn Profile
        </a>

      </motion.section>
    </div>
  );
};

export default Home;
