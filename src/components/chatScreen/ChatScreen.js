import { useContext, useState, useRef, useEffect } from 'react';
import styles from './ChatScreen.module.css';
import { userContext } from '../context/userContext';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { app } from '../firebase/firebase';
import BackgroundVideo from '../backgroundVideo/BackgroundVideo';

const db = getFirestore(app);

const ChatScreen = () => {
  const { user, isLoggedIn, messages, collectionName } =
    useContext(userContext);
  const inputRef = useRef('');

  const [text, setText] = useState('');

  const dummy = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(collection(db, `${collectionName}`), {
      message: `${inputRef.current.value}`,
      photo: `${user.photo}`,
      name: `${user.name}`,
      email: `${user.email}`,
      time: Math.floor(new Date().getTime() / 1000),
    });

    setText('');
  };

  useEffect(() => {
    if (dummy.current) {
      dummy?.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <>
      {isLoggedIn ? (
        <div className={styles.chatScreenContainer}>
          <div className={styles.messagesContainer}>
            <h1 className={styles.collectionName}>
              #{' '}
              {collectionName.charAt(0).toUpperCase() + collectionName.slice(1)}
            </h1>
            {messages.length > 0 &&
              messages
                .sort(function (x, y) {
                  return x.time - y.time;
                })
                .map((message, index) => (
                  <div
                    key={index}
                    className={
                      message.email === user.email
                        ? styles.myMessage
                        : styles.message
                    }
                  >
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
            <form onSubmit={handleSubmit} className={styles.chatForm}>
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
      ) : (
        <BackgroundVideo />
      )}
    </>
  );
};

export default ChatScreen;
