import React, { useState, useRef, useEffect } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { customCodeTheme } from './customCodeTheme';
import styles from './ChatComponent.module.css';
import { useAuth0 } from '@auth0/auth0-react';
import ClearHistoryButton from './ClearHistoryButton';

import { sendMessageToApi } from '../../api/aiApi';

const ChatComponent = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesRef = useRef();
  const { isAuthenticated, user } = useAuth0();

  const isCodeBlock = (content) => {
    const codeBlockRegex = /```[\s\S]*?```/;
    return codeBlockRegex.test(content);
  };

  const renderContent = (content) => {
    const codeBlockRegex = /```([\s\S]*?)```/;
    const parts = content.split(codeBlockRegex);
    return (
      <>
        {parts.map((part, index) => {
          if (index % 2 === 0) {
            return (
              <div key={index} className={styles.inlineText}>
                {part.split('\n\n').map((paragraph, i) => (
                  <React.Fragment key={i}>
                    {paragraph}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            );
          } else {
            return (
              <div key={index} className={styles.syntaxHighlighter}>
                <SyntaxHighlighter
                  language="javascript"
                  style={customCodeTheme}
                >
                  {part.trim()}
                </SyntaxHighlighter>
              </div>
            );
          }
        })}
      </>
    );
  };

  const generateTable = (content) => {
    const tableRegex = /(\|?[\w\s]+(?:\||\n))+(?:\|?-{3,}\|?)+(\n\|?[\w\s]+)+/;
    const tableMatch = content.match(tableRegex);

    if (!tableMatch) {
      return { isTable: false, content };
    }

    const tableMarkdown = tableMatch[0];
    const tableLines = tableMarkdown
      .split('\n')
      .filter((line) => line.trim() !== '');

    const tableRows = tableLines
      .map((line) => {
        if (line.trim() !== '') {
          const cells = line.split('|').filter((cell) => cell.trim() !== '');
          return cells.map((cell) => cell.trim());
        }
        return null;
      })
      .filter((row) => row);

    const headers = tableRows.shift();

    return {
      isTable: true,
      headers,
      rows: tableRows,
    };
  };

  const copyTableToClipboard = (table) => {
    const range = document.createRange();
    range.selectNode(table);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();

    alert('Table copied to clipboard');
  };

  const resetChat = () => {
    setMessages([]);
  };

  const renderMessage = (message) => {
    const messageIcon =
      message.sender === 'user' ? '/usericon.png' : '/happy_chatbot.png';

    const table = generateTable(message.content);

    if (isCodeBlock(message.content)) {
      return (
        <div className={styles.messageContent}>
          <img
            src={messageIcon}
            alt="message icon"
            className={styles.messageIcon}
          />
          {renderContent(message.content)}
        </div>
      );
    } else if (table.isTable) {
      return (
        <div className={styles.messageContent}>
          <img
            src={messageIcon}
            alt="message icon"
            className={styles.messageIcon}
          />
          <div className={styles.tableWrapper}>
            <table data-message-id={message.messageId}>
              <thead>
                <tr>
                  {table.headers.map((header, index) => (
                    <th key={index} className={styles.customHeader}>
                      {header.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className={styles.copyButton}
              onClick={() =>
                copyTableToClipboard(
                  document.querySelector(
                    `table[data-message-id="${message.messageId}"]`
                  )
                )
              }
            >
              Copy to Clipboard
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.messageContent}>
          <img
            src={messageIcon}
            alt="message icon"
            className={styles.messageIcon}
          />
          <div
            className={styles.inlineText}
            dangerouslySetInnerHTML={{ __html: message.content }}
          />
        </div>
      );
    }
  };

  const handleSend = async () => {
    if (input.trim() !== '') {
      setIsLoading(true);
      setMessages([...messages, { sender: 'user', content: input.trim() }]);

      try {
        const apiResponse = await sendMessageToApi(input.trim(), user.email);
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'gpt', content: apiResponse.message },
        ]);
      } catch (error) {
        console.error('Error while sending message to API:', error.message);
      } finally {
        setIsLoading(false);
      }

      setInput('');
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      messagesRef.current.scrollTo({
        top: messagesRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  return (
    <div className={styles.container}>
      {isAuthenticated ? (
        <>
          <div className={styles.chatWrapper}>
            <div className={styles.chatBox}>
              <div className={styles.messagesContainer} ref={messagesRef}>
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={
                      message.sender === 'user'
                        ? styles.userMessage
                        : styles.gptMessage
                    }
                  >
                    {renderMessage(message)}
                  </div>
                ))}
              </div>
              <div className={styles.inputContainer}>
                {isLoading && (
                  <div className={`${styles.loadingMessage} ${styles.loading}`}>
                    Tänker....
                  </div>
                )}
                <input
                  className={styles.inputField}
                  type="text"
                  placeholder="Skriv ditt meddelande..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  disabled={isLoading}
                />
                <button
                  className={styles.sendButton}
                  onClick={handleSend}
                  disabled={isLoading}
                >
                  Skicka
                </button>
              </div>
            </div>
            <ClearHistoryButton userId={user.email} resetChat={resetChat} />
          </div>
        </>
      ) : (
        <div className={styles.loginMessage}>
          Vänligen logga in för att chatta med Mimers AI-chatt
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
