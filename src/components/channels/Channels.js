import { useContext } from 'react';
import { userContext } from '../context/userContext';
import styles from './Channels.module.css';

const Channels = () => {
  const { getCollectionName, collectionName, menuOpenHandler } =
    useContext(userContext);

  return (
    <div className={styles.channelsContainer}>
      <div
        onClick={() => {
          getCollectionName('sohbet');
          menuOpenHandler();
        }}
        className={`${styles.channelName} ${
          collectionName === 'sohbet' && styles.active
        }`}
      >
        <p className={styles.hash}>#</p>{' '}
        <h2 className={styles.channelTitle}>Sohbet</h2>
      </div>
      <div
        onClick={() => {
          getCollectionName('not paylaşımı');
          menuOpenHandler();
        }}
        className={`${styles.channelName} ${
          collectionName === 'not paylaşımı' && styles.active
        }`}
      >
        <p className={styles.hash}>#</p> <h2>Not Paylaşımı</h2>
      </div>
      <div
        onClick={() => {
          getCollectionName('test ve geliştirme');
          menuOpenHandler();
        }}
        className={`${styles.channelName} ${
          collectionName === 'test ve geliştirme' && styles.active
        }`}
      >
        <p className={styles.hash}>#</p> <h2>Test & Geliştirme</h2>
      </div>
    </div>
  );
};

export default Channels;
