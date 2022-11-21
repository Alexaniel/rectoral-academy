import { Space, message } from 'antd';
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
            icon: <AiFillFacebook />,
        },
        TW: {
            key: 'TW',
            name: 'Twitter',
            keyName: 'TWITTER',
            link: data.socialMedia.TW,
            icon: <AiFillTwitterSquare />,
        },
        LN: {
            key: 'LN',
            name: 'Linkedin',
            keyName: 'LINKEDIN',
            link: data.socialMedia.LN,
            icon: <AiFillLinkedin />,
        },
        IG: {
            key: 'IG',
            name: 'Instagram',
            keyName: 'INSTAGRAM',
            link: data.socialMedia.IG,
            icon: <AiFillInstagram />,
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
            <Space direction="horizontal" size={16}>
                <Space
                    className={styles.socialIcon}
                    direction="horizontal"
                    size={8}
                    onClick={() => handleAction(`https://wa.me/${data.fullMobile}`)}
                >
                    <AiFillPhone style={{ verticalAlign: 'middle', marginTop: 4 }} />
                    <Text variant="large" styles={valueProps}>
                        {`${data.countryCode} ${data.mobile}`}
                    </Text>
                </Space>
                <Space
                    className={styles.socialIcon}
                    direction="horizontal"
                    size={8}
                    onClick={() => handleAction(email)}
                >
                    <AiTwotoneMail style={{ verticalAlign: 'middle', marginTop: 4 }} />
                    <Text variant="large" styles={valueProps}>
                        {email}
                    </Text>
                </Space>
            </Space>
            <div className={styles.socialMedia}>
                {
                    SOCIAL_MEDIA_LIST.map((item) => (
                        <div
                            className={styles.socialIcon}
                            onClick={() => handleAction(item.link)}
                        >
                            {item.icon}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Contact;
