import { useTranslation } from 'react-i18next';
import { Text } from '@fluentui/react/lib/Text';
import { Row, Col, Avatar } from 'antd';
import {
    headerProps, descriptionProps, labelProps,
} from '../utils/textElements';
import { MEMBERSHIPS } from '../../../constants/memberships';
import styles from '../styles.module.scss';

const Target = () => {
    const { t } = useTranslation('home', { keyPrefix: 'TARGET' });
    const { t: tm } = useTranslation('shared', { keyPrefix: 'MEMBERSHIP' });

    return (
        <div className={styles.target}>
            <Text
                styles={headerProps}
                variant="xxLarge"
                block
            >
                {t('AUDIENCE')}
            </Text>
            <Row gutter={[32, 24]}>
                {
                    MEMBERSHIPS.map((membership) => (
                        <Col
                            key={membership.code}
                            xs={24}
                            lg={8}
                        >
                            <div
                                style={{ borderColor: membership.color }}
                                className={styles.membership}
                            >
                                <Avatar
                                    size={64}
                                    src={membership.image}
                                    shape="square"
                                    className={styles.membershipIcon}
                                />

                                <Text
                                    style={{
                                        color: membership.color,
                                        margin: '16px 0',
                                    }}
                                    styles={labelProps}
                                    variant="large"
                                    block
                                >
                                    {`${tm('CATEGORY')} ${membership.name}`}
                                </Text>
                                <Text
                                    styles={descriptionProps}
                                    variant="large"
                                    block
                                >
                                    {tm(membership.purpose)}
                                </Text>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
};

export default Target;
