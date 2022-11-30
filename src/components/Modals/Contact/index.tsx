import {
    Divider,
    Form,
    Typography,
    Row,
    Col,
    Button,
    notification,
} from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { theme } from '../../../theme';
import { createContact } from '../../../api/forms';

import Contact from './Contact';

import styles from '../styles.module.scss';

const { Title, Paragraph } = Typography;

const FormContact = () => {
    const { t } = useTranslation('forms', { keyPrefix: 'FORMS' });

    const [loading, setLoading] = useState<boolean>(false);

    const [form] = Form.useForm();

    const onSubmit = (values: any) => {
        const { countryCode, mobile } = values;
        setLoading(true);
        const contact = {
            ...values,
            fullMobile: `${countryCode}${mobile}`,
        };
        createContact(contact)
            .then(() => {
                form.resetFields();
                notification.success({
                    message: t('RESPONSES.SUCCESS'),
                    description: t('RESPONSES.SUCCESS_DESCRIPTION'),
                });
            })
            .catch((error: any) => {
                const description = error?.response?.data?.message;
                notification.error({
                    message: t('RESPONSES.ERROR'),
                    description,
                });
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className={styles.containerForm}>

            <Form
                layout="vertical"
                form={form}
                className={styles.form}
                onFinish={onSubmit}
            >
                <Title level={2} style={{ color: theme.themePrimary }}>
                    {t('CONTACT')}
                </Title>

                <Paragraph>
                    {t('CONTACT_DESCRIPTION')}
                </Paragraph>

                <Divider />

                <Row gutter={[24, 32]} align="top" justify="start">
                    <Col span={24}>
                        <Contact />
                    </Col>
                </Row>

                <Divider />

                <Button
                    block
                    type="primary"
                    loading={loading}
                    htmlType="submit"
                >
                    {t('ACTIONS.SEND')}
                </Button>

            </Form>
        </div>
    );
};

export default FormContact;
