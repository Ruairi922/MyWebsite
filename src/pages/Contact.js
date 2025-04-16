// Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <motion.section
      className="contact-section"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="contact-title">Let's Connect</h2>
      <p className="contact-subtitle">
        Whether it's for freelance work, internships, or collaboration—drop me a message.
      </p>

      <div className="contact-links">
        <a href="mailto:mulhallruairi@gmail.com" target="_blank" rel="noreferrer">
          📧 mulhallruairi@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/ruairi-mulhall-815935284/" target="_blank" rel="noreferrer">
          🔗 LinkedIn Profile
        </a>
        <a href="/CV.pdf" download="Ruairi_Mulhall_CV.pdf" target="_blank" rel="noreferrer">
          📄 Download CV
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;
