import { useContext } from 'react';
import { userContext } from '../context/userContext';
import styles from './Channels.module.css';

const Channels = () => {
  const { getCollectionName, menuOpenHandler } = useContext(userContext);

  return (
    <div className={styles.channelsContainer}>
      <div
        onClick={() => {
          getCollectionName('sohbet');
          menuOpenHandler();
        }}
        className={styles.channelName}
      >
        <p className={styles.hash}>#</p>{' '}
        <h2 className={styles.channelTitle}>Sohbet</h2>
      </div>
      <div
        onClick={() => {
          getCollectionName('not paylaşımı');
          menuOpenHandler();
        }}
        className={styles.channelName}
      >
        <p className={styles.hash}>#</p> <h2>Not Paylaşımı</h2>
      </div>
      <div
        onClick={() => {
          getCollectionName('test ve geliştirme');
          menuOpenHandler();
        }}
        className={styles.channelName}
      >
        <p className={styles.hash}>#</p> <h2>Test & Geliştirme</h2>
      </div>
    </div>
  );
};

export default Channels;
