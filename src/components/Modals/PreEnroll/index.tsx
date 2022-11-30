import {
    Divider,
    Form,
    Input,
    Typography,
    Row,
    Col,
    Button,
    notification,
} from 'antd';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { theme } from '../../../theme';

import PreEnroll from './PreEnroll';
import Academic from './Academic';
import styles from '../styles.module.scss';
import { createPreEnrollment } from '../../../api/forms';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const FormPreEnroll = () => {
    const { t } = useTranslation('forms', { keyPrefix: 'FORMS' });

    const [loading, setLoading] = useState<boolean>(false);

    const [form] = Form.useForm();

    const params = useParams();
    const { id } = params;

    const onSubmit = (values: any) => {
        const {
            institute, instituteType, jobPosition, designation, isMember,
            membership, countryCode, mobile, designationDuration,
        } = values;
        setLoading(true);
        const preEnroll = {
            ...values,
            isMember: isMember === 'YES',
            membership: isMember === 'YES' ? membership : null,
            fullMobile: `${countryCode}${mobile}`,
            academic: {
                institute,
                instituteType,
                jobPosition,
                designation,
                startDate: designationDuration[0],
                endDate: designationDuration[1],
            },
        };
        createPreEnrollment(preEnroll)
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
                <Form.Item hidden name="curseID" initialValue={id}>
                    <Input />
                </Form.Item>

                <Title level={2} style={{ color: theme.themePrimary }}>
                    {t('ENROLL')}
                </Title>

                <Paragraph>
                    {t('ENROLL_DESCRIPTION')}
                </Paragraph>

                <Divider />

                <Row gutter={[24, 32]} align="top" justify="start">
                    <Col xs={24} lg={12}>
                        <Title level={4} style={{ marginBottom: 24 }}>
                            {t('PERSONAL')}
                        </Title>
                        <PreEnroll />
                    </Col>
                    <Col xs={24} lg={12}>
                        <Title level={4} style={{ marginBottom: 24 }}>
                            {t('ACADEMIC')}
                        </Title>
                        <Academic />
                    </Col>
                    <Col xs={24}>
                        <Title level={4} style={{ marginBottom: 24 }}>
                            {t('MOTIVATION')}
                        </Title>
                        <Form.Item
                            label={t('INPUTS.ENROLL.MOTIVATION')}
                            name="motivation"
                        >
                            <TextArea
                                placeholder={t('INPUTS.ENROLL.MOTIVATION_PLACEHOLDER')}
                                maxLength={300}
                                showCount
                            />
                        </Form.Item>
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

export default FormPreEnroll;
