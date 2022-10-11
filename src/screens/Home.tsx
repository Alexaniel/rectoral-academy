import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';

const Home = () => {
  const { t } = useTranslation('shared');

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Home;
