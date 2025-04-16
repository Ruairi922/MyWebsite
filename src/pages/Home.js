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
          I build clean, powerful, and functional web applications.
        </h2>
        <p className="home-description">
          Second-year Computer Science student in Maynooth University, Focusing on sharp engineering and precise modular scalable design practices.
        </p>
        <Link to="/projects" className="home-button">View My Work</Link>
      </motion.section>
    </div>
  );
};

export default Home;
