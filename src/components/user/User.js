import { useContext } from 'react';
import styles from './User.module.css';
import { userContext } from '../context/userContext';

const User = () => {
  const { user } = useContext(userContext);

  return (
    <div className={styles.userContainer}>
      <img className={styles.userImage} src={user.photo} alt='User profile' />

      <h2 className={styles.userName}>{user.name}</h2>
    </div>
  );
};

export default User;
