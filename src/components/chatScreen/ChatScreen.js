import { useContext, useEffect, useState, useRef } from 'react';
import styles from './ChatScreen.module.css';
import { userContext } from '../context/userContext';
import { v4 as uuidv4 } from 'uuid';
import {
  fetchChannels,
  subscribeToMessages,
  sendMessage,
  fetchChannelMessages,
} from '../helpers/socket';

const ChatScreen = () => {
  const { user, isLoggedIn } = useContext(userContext);
  const inputRef = useRef('');
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');
  const [channel, setChannel] = useState('general');
  const [channels, setChannels] = useState([]);

  const dummy = useRef();

  useEffect(() => {
    fetchChannels().then((res) => {
      console.log(res);
      setChannels(res);
    });

    subscribeToMessages((err, data) => {
      setMessages((messages) => [...messages, data]);
    });
  }, []);

  useEffect(() => {
    fetchChannelMessages('general');
  }, [text]);

  console.log(channels);
  console.log(messages);

  const handleMessageSend = (e) => {
    // if (!message) return;

    e.preventDefault();

    setMessage(inputRef.current.value);

    const data = {
      id: uuidv4(),
      channel,
      user: user.name,
      body: inputRef.current.value,
      time: Date.now(),
    };

    setMessages((messages) => [...messages, data]);
    sendMessage(data);
    setMessage('');

    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const message = inputRef.current.value;

  //   const photo = user.photo;

  //   const name = user.name;

  //   const item = {
  //     message,
  //     photo,
  //     name,
  //   };

  //   setMessages([...messages, item]);

  //   setText('');
  // };

  return (
    <>
      {isLoggedIn && (
        <div className={styles.chatScreenContainer}>
          <div className={styles.messagesContainer}>
            {messages.length > 0 &&
              messages.map((message, index) => (
                <div key={index} className={styles.message}>
                  <img
                    className={styles.photo}
                    src={message.photo}
                    alt='user profile'
                  />
                  <p className={styles.text}>{message.message}</p>
                  <p className={styles.userName}>{message.name}</p>
                </div>
              ))}
            <div ref={dummy} className={styles.dummyDiv}></div>
          </div>

          <div className={styles.formContainer}>
            <form onSubmit={handleMessageSend} className={styles.chatForm}>
              <input
                ref={inputRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                className={styles.input}
                type='text'
                required
              />
              <button type='submit' className={styles.sendButton}>
                <svg
                  className={styles.sendIcon}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatScreen;
