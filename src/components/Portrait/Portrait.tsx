import IMAGES from '../../constants/images';
import styles from './styles.module.scss';

const Portrait = () => (
  <div className={styles.portrait}>
    <div
      className={styles.__image}
      style={{
        backgroundImage: `url(${IMAGES.portrait.main})`,
      }}
    />
    <h1>Portrait</h1>
  </div>
);

export default Portrait;
