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
import { transformPartner } from '../../../utils/forms';
import { theme } from '../../../theme';

import Institution from './Institution';
import Representative from './Representative';
import Program from './Program';

import { createPartner } from '../../../api/forms';

import styles from '../styles.module.scss';

const { Title, Paragraph } = Typography;

const FormPartner = () => {
    const { t } = useTranslation('forms', { keyPrefix: 'FORMS' });

    const [loading, setLoading] = useState<boolean>(false);

    const [form] = Form.useForm();

    const onSubmit = (values: any) => {
        setLoading(true);
        createPartner(transformPartner(values))
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
                    {t('PARTNERS')}
                </Title>

                <Paragraph>
                    {t('PARTNERS_DESCRIPTION')}
                </Paragraph>

                <Divider />

                <Row gutter={[24, 32]} align="top" justify="start">
                    <Col xs={24} lg={12}>
                        <Title level={4} style={{ marginBottom: 24 }}>
                            {t('INSTITUTION')}
                        </Title>
                        <Institution />
                    </Col>
                    <Col xs={24} lg={12}>
                        <Title level={4} style={{ marginBottom: 24 }}>
                            {t('REPRESENTATIVE')}
                        </Title>
                        <Representative />
                    </Col>
                    <Col xs={24}>
                        <Title level={4} style={{ marginBottom: 24 }}>
                            {t('PROGRAM')}
                        </Title>
                        <Program />
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

export default FormPartner;
