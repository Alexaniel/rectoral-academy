import { PrimaryButton } from '@fluentui/react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation('shared');

  return (
    <div>
      {t('HOME')}
      <br />
      <PrimaryButton text="Primary" onClick={() => alert('fluentUI Configurated')} />
    </div>
  );
};

export default Home;
