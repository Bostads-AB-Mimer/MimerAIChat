export const sendMessageToApi = async (message, userId) => {
  const API_URL = `${process.env.REACT_APP_API_URL}/chat`;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
    body: JSON.stringify({ message, userId }),
  };

  const response = await fetch(API_URL, requestOptions);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || 'An error occurred while sending the message to the API'
    );
  }

  return data;
};

export const clearUserChatHistory = async (userId) => {
  const API_URL = `${process.env.REACT_APP_API_URL}/clearChatHistory`;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
    body: JSON.stringify({ userId }),
  };

  const response = await fetch(API_URL, requestOptions);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || 'An error occurred while clearing the chat history'
    );
  }

  return data;
};
