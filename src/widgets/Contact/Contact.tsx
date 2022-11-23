import {
    Space, message, Row, Col,
} from 'antd';
import { useTranslation } from 'react-i18next';
import {
    AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiFillPhone,
    AiTwotoneMail,
} from 'react-icons/ai';
import { Text } from '@fluentui/react/lib/Text';
import { IContact } from '../../interfaces';
import { valueProps } from '../../components/Curses/elementsProperties';

import styles from './styles.module.scss';

interface ContactProps {
    data: IContact;
    email: string;
}

interface IElements {
    [key: string]: {
        key: string;
        keyName: string;
        name: string;
        link: string;
        icon: JSX.Element;
    };
}

const Contact = ({ data, email }: ContactProps) => {
    const { t } = useTranslation('shared', { keyPrefix: 'CONTACT' });

    const ELEMENTS: IElements = {
        FB: {
            key: 'FB',
            name: 'Facebook',
            keyName: 'FACEBOOK',
            link: data.socialMedia.FB,
            icon: <AiFillFacebook className={styles.socialIcon} />,
        },
        TW: {
            key: 'TW',
            name: 'Twitter',
            keyName: 'TWITTER',
            link: data.socialMedia.TW,
            icon: <AiFillTwitterSquare className={styles.socialIcon} />,
        },
        LN: {
            key: 'LN',
            name: 'Linkedin',
            keyName: 'LINKEDIN',
            link: data.socialMedia.LN,
            icon: <AiFillLinkedin className={styles.socialIcon} />,
        },
        IG: {
            key: 'IG',
            name: 'Instagram',
            keyName: 'INSTAGRAM',
            link: data.socialMedia.IG,
            icon: <AiFillInstagram className={styles.socialIcon} />,
        },
    };

    const SOCIAL_MEDIA_LIST = [...Object.values(ELEMENTS)];

    const handleAction = (value: string) => {
        if (!value || value === '') {
            message.warning({ content: t('NO_AVAILABLE') });
        } else {
            window.open(value, '_blank');
        }
    };

    return (
        <div className={styles.contact}>
            <Row gutter={[16, 16]} style={{ width: '100%' }}>
                <Col xs={24} md={12}>
                    <Space
                        className={styles.containerIcon}
                        direction="horizontal"
                        size={8}
                        onClick={() => handleAction(`https://wa.me/${data.fullMobile}`)}
                    >
                        <AiFillPhone className={styles.socialIcon} />
                        <span className={styles.text}>
                            {`${data.countryCode} ${data.mobile}`}
                        </span>
                    </Space>
                    <Space
                        className={styles.containerIcon}
                        direction="horizontal"
                        size={8}
                        onClick={() => handleAction(email)}
                    >
                        <AiTwotoneMail className={styles.socialIcon} />
                        <span className={styles.text}>
                            {email}
                        </span>
                    </Space>
                </Col>
                <Col xs={24} md={12}>
                    <div className={styles.socialMedia}>
                        {
                            SOCIAL_MEDIA_LIST.map((item) => (
                                <div
                                    className={styles.icon}
                                    onClick={() => handleAction(item.link)}
                                >
                                    {item.icon}
                                </div>
                            ))
                        }
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;
