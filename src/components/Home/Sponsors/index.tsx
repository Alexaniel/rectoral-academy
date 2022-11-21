import { useTranslation } from 'react-i18next';
import { Text } from '@fluentui/react/lib/Text';
import { Image, IImageProps } from '@fluentui/react/lib/Image';
import {
    headerProps, descriptionProps,
} from '../utils/textElements';
import styles from '../styles.module.scss';
import IMAGES from '../../../constants/images';
import CloudIcons from './CloudIcons';

const Sponsors = () => {
    const { t } = useTranslation('home', { keyPrefix: 'SPONSORS' });

    const mapProps: Partial<IImageProps> = {
        src: IMAGES.illustrations.map,
        alt: 'latin america map',
        loading: 'lazy',
        width: 1080,
        height: 1080,
        styles: {
            root: {
                margin: 'auto',
                position: 'absolute',
                top: 120,
                left: 0,
                right: 0,
                zIndex: -1,
                opacity: '0.1 !important',
            },
        },
    };

    return (
        <div className={styles.sponsors}>
            <Image {...mapProps} className={styles.map} />
            <Text
                styles={headerProps}
                variant="xxLarge"
                block
            >
                {t('REGIONAL_PARTNERS')}
            </Text>

            <CloudIcons />
        </div>
    );
};

export default Sponsors;
