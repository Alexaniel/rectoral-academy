import { ReactNode } from 'react';
import { Row, Col, Avatar } from 'antd';
import { BiDirections } from 'react-icons/bi';
import { MdTrackChanges } from 'react-icons/md';
import { RiFocus2Line } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import { Image, IImageProps } from '@fluentui/react/lib/Image';
import { Text } from '@fluentui/react/lib/Text';
import {
    headerProps, labelProps,
} from '../utils/textElements';
import styles from '../styles.module.scss';
import IMAGES from '../../../constants/images';

const Sense = () => {
    const { t } = useTranslation('home', { keyPrefix: 'SENSE' });

    interface CardProps {
        title: string;
        image: ReactNode;
    }

    const CARDS: CardProps[] = [
        {
            title: t('NEW_SENSE'),
            image: <RiFocus2Line />,
        },
        {
            title: t('CHANGE_DIRECTION'),
            image: <BiDirections />,
        },
        {
            title: t('FULL_TURNAROUND'),
            image: <MdTrackChanges />,
        },
    ];

    const plotLinesProps: Partial<IImageProps> = {
        src: IMAGES.plots.lines,
        alt: 'plot lines',
        loading: 'lazy',
        width: 650,
        height: 650,
        styles: {
            root: {
                margin: '0 auto',
                position: 'absolute',
                top: -250,
                left: -32,
                zIndex: -1,
                opacity: '0.05 !important',
            },
        },
    };

    return (
        <div className={styles.sense}>

            <Text
                styles={headerProps}
                variant="xxLarge"
                block
            >
                {t('SENSE_180')}
            </Text>

            <Row gutter={[32, 24]}>
                {
                    CARDS.map((card) => (
                        <Col
                            key={card.title}
                            xs={24}
                            lg={8}
                        >
                            <div className={styles.card}>
                                <Avatar
                                    size={72}
                                    icon={card.image}
                                    className={styles.cardIcon}
                                />
                                <Text
                                    styles={labelProps}
                                    variant="xLarge"
                                    block
                                >
                                    {card.title}
                                </Text>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
};

export default Sense;
