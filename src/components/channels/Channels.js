import styles from './Channels.module.css';

const Channels = () => {
  return (
    <div className={styles.channelsContainer}>
      <div className={styles.channelName}>
        <p className={styles.hash}>#</p>{' '}
        <h2 className={styles.channelTitle}>Genel</h2>
      </div>
      <div className={styles.channelName}>
        <p className={styles.hash}>#</p> <h2>Duyurular</h2>
      </div>
      <div className={styles.channelName}>
        <p className={styles.hash}>#</p> <h2>Ödevler</h2>
      </div>
      <div className={styles.channelName}>
        <p className={styles.hash}>#</p> <h2>Projeler</h2>
      </div>
      <div className={styles.channelName}>
        <p className={styles.hash}>#</p> <h2>Soru-cevap</h2>
      </div>
      <div className={styles.channelName}>
        <p className={styles.hash}>#</p> <h2>Goygoy</h2>
      </div>
    </div>
  );
};

export default Channels;
