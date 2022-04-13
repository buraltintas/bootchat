import { useContext } from 'react';
import { userContext } from '../context/userContext';

import styles from './Logo.module.css';

const Logo = () => {
  const { isMenuOpen, menuOpenHandler, isLoggedIn } = useContext(userContext);

  return (
    <div className={styles.logoContainer}>
      <svg
        className={styles.logoIcon}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth='2'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
        />
      </svg>
      <h1 className={styles.logoName}>BootChat</h1>

      {isLoggedIn && !isMenuOpen && (
        <svg
          onClick={menuOpenHandler}
          className={`${styles.menuIcon} ${isMenuOpen && styles.closeMenuIcon}`}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fill-rule='evenodd'
            d='M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z'
            clip-rule='evenodd'
          />
          <path
            fill-rule='evenodd'
            d='M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z'
            clip-rule='evenodd'
          />
        </svg>
      )}
    </div>
  );
};

export default Logo;
