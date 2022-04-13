import React, { useEffect, useState } from 'react';
import { app } from '../firebase/firebase';
import { collection, getFirestore, onSnapshot } from 'firebase/firestore';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const userContext = React.createContext();

const db = getFirestore(app);

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [collectionName, setCollectionName] = useState('sohbet');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const getCollectionName = (text) => {
    setCollectionName(text);
  };

  const menuOpenHandler = (e) => {
    setIsMenuOpen(e ? e : (prev) => !prev);
  };

  useEffect(() => {
    onSnapshot(collection(db, `${collectionName}`), (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, [collectionName]);

  const signInWithFirebase = () => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        handleLogin({
          name: result._tokenResponse.fullName,
          photo: result._tokenResponse.photoUrl,
          email: result._tokenResponse.email,
        });
        setIsLoading(false);
      })
      .catch((err) => {
        alert('Bir şeyler ters gitti :( Yeniden deneyin.', err);
        setIsLoading(false);
      });
  };

  const handleLogout = () => {
    signOut(auth);
    setIsLoggedIn(false);
    setUser({});
  };

  const handleLogin = (user) => {
    if (user.name && user.photo) {
      setIsLoggedIn(true);
      setUser(user);
    }
  };

  return (
    <userContext.Provider
      value={{
        user,
        signInWithFirebase,
        isLoggedIn,
        handleLogout,
        isLoading,
        messages,
        collectionName,
        getCollectionName,
        isMenuOpen,
        menuOpenHandler,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export { userContext, UserProvider };
