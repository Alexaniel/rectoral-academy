import { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';

const Loading = () => {
    const { t } = useTranslation('shared');

    const loadingStyles: CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '20px',
    };

    return (
        <div style={loadingStyles}>
            {t('LOADING')}
        </div>
    );
};

export default Loading;
