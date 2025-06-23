import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage, deleteMessage } from '../Redux/messagesSlice';
import styles from './Messages.module.css';

function Messages() {
  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      dispatch(addMessage({ id: Date.now(), from: 'You', text: newMessage }));
      setNewMessage('');
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteMessage(id));
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Message copied to clipboard!');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Messages</h1>

      <div className={styles.inputSection}>
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleSend} className={styles.sendButton}>
          Send
        </button>
      </div>

      <ul className={styles.messageList}>
        {messages.map((msg) => (
          <li key={msg.id} className={styles.messageItem}>
            <div>
              <span className={styles.sender}>{msg.from}:</span>
              <span className={styles.text}>{msg.text}</span>
            </div>
            <div className={styles.actions}>
              <button onClick={() => handleCopy(msg.text)} className={styles.copyBtn}>
                Copy
              </button>
              <button onClick={() => handleDelete(msg.id)} className={styles.deleteBtn}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Messages;

