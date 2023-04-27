import React from 'react';
import styles from './Policies.module.css';
import policiesData from './PoliciesText.json';

const Policies = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.heading}>{policiesData.title}</h1>
        <div className={styles.flexContainer}>
          <div className={styles.textContainer}>
            <p className={styles.text}>{policiesData.purpose}</p>
            <p className={styles.text}>{policiesData.scope}</p>
            <div>
              <h3 className={styles.subheading}>Definitioner</h3>
              {policiesData.definitions.map((definition, index) => (
                <div key={index}>
                  <p className={styles.definitionTerm}>{definition.term}</p>
                  <p className={styles.text}>{definition.definition}</p>
                </div>
              ))}
            </div>
            <div>
              <h3 className={styles.subheading}>Allmänna principer</h3>
              <ul>
                {policiesData.principles.map((principle, index) => (
                  <li key={index}>{principle}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={styles.subheading}>Genomförande och ansvar</h3>
              {policiesData.responsibilities.map((responsibility, index) => (
                <div key={index}>
                  <p className={styles.role}>{responsibility.role}</p>
                  <p className={styles.text}>{responsibility.responsibility}</p>
                </div>
              ))}
            </div>
            <p className={styles.text}>{policiesData.training}</p>
            <div>
              <h3 className={styles.subheading}>Riskhantering</h3>
              <ul>
                {policiesData.risk_management.map((risk, index) => (
                  <li key={index}>{risk}</li>
                ))}
              </ul>
            </div>
            <p className={styles.text}>{policiesData.violation}</p>
            <p className={styles.text}>{policiesData.review}</p>
          </div>
          <div className={styles.imageContainer}>
            <img
              className={styles.chatbotImage}
              src="/happy_chatbot.png"
              alt="Happy chatbot"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;
