import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Text } from '@fluentui/react/lib/Text';
import { Image, IImageProps } from '@fluentui/react/lib/Image';
import { headerProps } from '../utils/textElements';
import styles from '../styles.module.scss';
import IMAGES from '../../../constants/images';
import CloudIcons from './CloudIcons';
import ModalWrapper from '../../Modals';
import FormPartner from '../../Modals/Partners';

const Sponsors = () => {
    const { t } = useTranslation('home', { keyPrefix: 'SPONSORS' });

    const [visible, setVisible] = useState<boolean>(false);

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
            <ModalWrapper
                visible={visible}
                onCancel={() => setVisible(false)}
            >
                <FormPartner />
            </ModalWrapper>
            <Image {...mapProps} className={styles.map} />
            <Text
                styles={headerProps}
                variant="xxLarge"
                block
            >
                {t('REGIONAL_PARTNERS')}
            </Text>

            <span
                className={styles.message}
                onClick={() => setVisible(true)}
            >
                <Trans
                    t={t}
                    i18nKey="BECOME_A_SPONSOR"
                    components={{
                        b: <b className={styles.link} />,
                    }}
                />
            </span>

            <CloudIcons />
        </div>
    );
};

export default Sponsors;
