// Contact.js
import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
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
        <a href="/CV.pdf" target="_blank" rel="noreferrer">
          📄 Download CV
        </a>
      </div>
    </div>
  );
};

export default Contact;
