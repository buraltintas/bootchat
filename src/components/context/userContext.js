import React, { useState } from 'react';
import { app } from '../firebase/firebase';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const userContext = React.createContext();

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInWithFirebase = () => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        handleLogin({
          name: result._tokenResponse.fullName,
          photo: result._tokenResponse.photoUrl,
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
      value={{ user, signInWithFirebase, isLoggedIn, handleLogout, isLoading }}
    >
      {children}
    </userContext.Provider>
  );
};

export { userContext, UserProvider };
