import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { getUserChatHistory, clearUserChatHistory } from '../../api/aiApi';
import { saveUserChat } from '../../api/mongoApi';

const SaveHistory = () => {
  const { user } = useAuth0();

  const fetchAndSaveChatHistory = async () => {
    const auth0Id = user?.sub.toString() || 'defaultUser';
    const email = user?.email;

    try {
      const chatHistory = await getUserChatHistory(auth0Id);
      // console.log(chatHistory);

      await saveUserChat(auth0Id, email, chatHistory);
      //console.log('Chat history saved for user:', auth0Id);
    } catch (error) {
      console.error(
        'An error occurred while fetching and saving the chat history:',
        error
      );
    }
  };

  const clearChatHistory = async () => {
    const auth0Id = user?.sub.toString() || 'defaultUser';

    try {
      //console.log('Clearing chat history for user:', auth0Id);
      await clearUserChatHistory(auth0Id);
      // console.log('Chat history cleared for user:', auth0Id);
    } catch (error) {
      console.error(
        'An error occurred while clearing the chat history:',
        error
      );
    }
  };

  const handleButtonClick = async () => {
    await fetchAndSaveChatHistory();
    await clearChatHistory();
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Spara chatt</button>
    </div>
  );
};

export default SaveHistory;
