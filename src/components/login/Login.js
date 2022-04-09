import { useContext } from 'react';
import styles from './Login.module.css';

import { userContext } from '../context/userContext';
import LoadingSpinner from '../loadingSpinner/LoadingSpinner';

const Login = () => {
  const { signInWithFirebase, isLoading } = useContext(userContext);

  return (
    <div className={styles.login}>
      <h1>Hoş geldiniz</h1>
      {!isLoading && (
        <button
          className={styles.loginButton}
          onClick={() => signInWithFirebase()}
        >
          Google ile giriş yap
        </button>
      )}

      {isLoading && <LoadingSpinner />}
    </div>
  );
};

export default Login;
