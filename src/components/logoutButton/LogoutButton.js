import { useContext } from 'react';
import styles from './LogoutButton.module.css';
import { userContext } from '../context/userContext';

const LogoutButton = () => {
  const { handleLogout } = useContext(userContext);

  return (
    <div className={styles.logoutButtonContainer}>
      <button onClick={() => handleLogout()} className={styles.logoutButton}>
        Çıkış yap
      </button>
    </div>
  );
};

export default LogoutButton;
