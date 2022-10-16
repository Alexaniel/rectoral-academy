import IMAGES from '../../constants/images';
import styles from './styles.module.scss';

const Slides = () => (
  <div className={styles.slides}>
    <div
      className={styles.__image}
      style={{
        backgroundImage: `url(${IMAGES.portrait.main})`,
      }}
    />
    <h1>Slides</h1>
  </div>
);

export default Slides;
