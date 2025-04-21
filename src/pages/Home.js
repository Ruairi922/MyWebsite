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
        <h2 className="home-subtitle">
          I design and build modular, scalable software.
        </h2>
        <p className="home-description">
          I'm a second-year Computer Science student at Maynooth University with strong skills in Java and Python, and hands-on experience in full-stack web development. Whether it's building web apps, backend services, or general-purpose software, I focus on clean architecture and precise, modular design practices that scale.
        </p>
        <Link to="/projects" className="home-button">View My Work</Link>
      </motion.section>

    </div>
  );
};

export default Home;
