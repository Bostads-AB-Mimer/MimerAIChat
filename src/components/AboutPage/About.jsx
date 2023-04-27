import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.flexContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.heading}>Om Mimers AI-chatt</h1>
            <p className={styles.text}>
              Under det senaste halvåret har AI blivit mer tillgängligt, vilket
              öppnar upp nya möjligheter för både privatpersoner och företag.
              Mimers AI-chatt är baserad på OpenAIs ChatGPT-teknik, vilket
              möjliggör effektiv och mångsidig användning av AI i
              verksamhetsstöd.
            </p>
            <p className={styles.text}>
              Genom att sätta upp en egen AI-chatt kan Mimer få bättre kontroll
              över användningen och hålla nere licenskostnader. Detta inkluderar
              administration av användare och licenser, samt möjligheten att
              anpassa AI-chatten för specifika Mimer-fall.
            </p>
            <p className={styles.text}>
              För att säkerställa en effektiv användning av AI-chatten krävs
              riktlinjer, utbildning och integrering med befintliga system.
              Lösningen innefattar att upprätta ett API för att kommunicera med
              OpenAIs API och hantera användare, samt skapa ett gränssnitt för
              enkel åtkomst.
            </p>
            <p className={styles.text}>
              Mimers AI-chatt är ett viktigt steg för att omfamna och utnyttja
              potentialen av AI-teknik för att förbättra verksamhetens
              produktivitet och effektivitet.
            </p>
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

export default About;
