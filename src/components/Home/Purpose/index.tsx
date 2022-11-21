import { Row, Col } from 'antd';
import { Trans, useTranslation } from 'react-i18next';
import { Text } from '@fluentui/react/lib/Text';
import { Image, IImageProps } from '@fluentui/react/lib/Image';
import { headerProps } from '../utils/textElements';
import CloudText from './CloudText';
import IMAGES from '../../../constants/images';
import styles from '../styles.module.scss';

const Purpose = () => {
    const { t } = useTranslation('home', { keyPrefix: 'PURPOSE' });

    const imageProps: Partial<IImageProps> = {
        src: IMAGES.illustrations.books_graduate,
        alt: 'illustration books and graduate gap',
        loading: 'lazy',
        width: 184,
        height: 184,
        styles: {
            root: {
                margin: '0 auto',
            },
        },
    };

    const plotHalfProps: Partial<IImageProps> = {
        src: IMAGES.plots.plot_half,
        alt: 'plot half',
        loading: 'lazy',
        width: 350,
        height: 350,
        styles: {
            root: {
                margin: '0 auto',
                position: 'absolute',
                bottom: 0,
                right: -32,
                zIndex: -1,
                opacity: '0.05 !important',
            },
        },
    };

    return (
        <div className={styles.purpose}>
            <Image {...plotHalfProps} />
            <Row gutter={[32, 24]} align="middle">
                <Col xs={24} lg={12} className={styles.contMessage}>
                    <Text
                        style={{ textAlign: 'left' }}
                        styles={headerProps}
                        variant="xxLarge"
                        block
                    >
                        {t('HEADER')}
                    </Text>

                    <span className={styles.message}>
                        <Trans t={t} i18nKey="MESSAGE" components={{ b: <b /> }} />
                    </span>

                </Col>
                <Col xs={24} lg={12}>
                    <CloudText />
                </Col>
            </Row>

        </div>
    );
};

export default Purpose;
