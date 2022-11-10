import { useTranslation } from 'react-i18next';

const Loading = () => {
    const { t } = useTranslation('shared');
    return (
        <div>
            {t('LOADING')}
        </div>
    );
};

export default Loading;
