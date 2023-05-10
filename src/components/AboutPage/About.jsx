import React from 'react';
import styles from './About.module.css';
import aboutData from './AboutText.json';

const About = () => {
  return (
    <main className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>{aboutData.title}</h1>
        {aboutData.paragraphs.map((paragraph, index) => (
          <p className={styles.text} key={index}>
            {paragraph}
          </p>
        ))}
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.chatbotImage}
          src="/happy_chatbot.png"
          alt="Happy chatbot"
        />
      </div>
    </main>
  );
};

export default About;
