import { Text, ITextProps } from '@fluentui/react/lib/Text';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation('shared');

  return (
    <div>
      <Text variant="mediumPlus" nowrap block>
        This page has layout config.
      </Text>
    </div>
  );
};

export default Home;
