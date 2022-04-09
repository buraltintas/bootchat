import styles from './Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <p>
        &copy; {year}{' '}
        <a
          className={styles.link}
          href='https://github.com/yigitcandonmez'
          rel='noreferrer'
          target='_blank'
        >
          Yiğitcan Dönmez
        </a>{' '}
        &{' '}
        <a
          className={styles.link}
          href='https://github.com/buraltintas'
          rel='noreferrer'
          target='_blank'
        >
          Burak Altıntaş
        </a>
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
