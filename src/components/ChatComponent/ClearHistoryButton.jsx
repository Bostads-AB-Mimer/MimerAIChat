import React, { useState } from 'react';
import { clearUserChatHistory } from '../../api/aiApi';
import styles from './ClearHistoryButton.module.css';

const ClearHistoryButton = ({ userId, resetChat }) => {
  const [message, setMessage] = useState('');

  const handleClearHistory = async () => {
    try {
      const responseMessage = await clearUserChatHistory(userId);
      setMessage('Chathistoriken har rensats');
      console.log(responseMessage);
      resetChat();
    } catch (error) {
      console.error('Error while clearing chat history:', error.message);
      setMessage('Det verkar inte finnas någon chathistorik att rensa');
    }
  };

  return (
    <div className={styles.buttonContainer}>
      <button
        onClick={handleClearHistory}
        className={styles.clearHistoryButton}
      >
        Nollställ Chattbot
      </button>
      {message && <div className={styles.clearHistoryMessage}>{message}</div>}
    </div>
  );
};

export default ClearHistoryButton;
