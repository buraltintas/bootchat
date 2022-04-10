import styles from './BackgroundVideo.module.css';
import video from './video.mp4';

const BackgroundVideo = () => {
  return (
    <div className={styles.videoContainer}>
      <video
        className={styles.video}
        autoPlay
        loop
        muted
        playInBackground={true}
        playWhenInactive={true}
        ignoreSilentSwitch='ignores'
        playsInline
      >
        <source src={video} type='video/mp4' />
      </video>
    </div>
  );
};

export default BackgroundVideo;
