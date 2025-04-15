import React from 'react';
import '../styles/Timeline.css';
import { motion } from 'framer-motion';

const timelineData = [
  {
    year: "2022",
    text: "Graduated from St. Paul's Secondary School in Monasterevin and prepared to pursue Computer Science at university."
  },
  {
    year: "2023",
    text: "Worked various warehouse and factory jobs to save for a car and college. Learned the value of consistency, time management, and grinding through tough environments."
  },
  {
    year: "2024",
    text: "Started my Computer Science degree at Maynooth University. Finished first year with First Class Honours. Began tutoring fellow students in Java and data structures through the CSC."
  },
  {
    year: "2025",
    text: "Took on more real-world projects. Collaborated on a Microsoft-mentored Subtitle Translator App using Azure AI, React, Node.js, and MongoDB in a 6-person Scrum team."
  },
  {
    year: "2025",
    text: "Built and deployed MobileSaunas.ie — a full-stack booking system for a local cold therapy business using the PERN stack. Currently expanding it with new features and better UI."
  },
  {
    year: "2027 (Expected)",
    text: "On track to graduate with a BSc in Computer Science & Software Engineering from Maynooth University."
  }
];


const Timeline = () => {
  return (
    <div className="timeline" id="timeline">
      <h2 className="projects-title">My Journey</h2>
      {timelineData.map((entry, index) => (
        <motion.div
          className="timeline-item"
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className="timeline-year">{entry.year}</span>
          <p className="timeline-text">{entry.text}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
