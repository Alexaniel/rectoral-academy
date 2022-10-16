import { Navbar } from '../components/Navbar';
import { Portrait } from '../components/Portrait';
import { Slides } from '../components/Slides';
import { Sense } from '../components/Sense';
import { Training } from '../components/Training';
import { Purpose } from '../components/Purpose';
import { Target } from '../components/Target';
import { Sponsors } from '../components/Sponsors';

import styles from '../components/Layout/styles.module.scss';

const Home = () => (
  <div className={styles.layout}>
    <Navbar />
    <Portrait />
    <Slides />
    <Sense />
    <Purpose />
    <Target />
    <Training />
    <Sponsors />
  </div>
);

export default Home;
