import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';

const Mobile = () => {
    const { t } = useTranslation('forms', { keyPrefix: 'FORMS.INPUTS' });
    const { t: tr } = useTranslation('forms', { keyPrefix: 'FORMS.RULES' });

    const RULES = [{ required: true, message: tr('REQUIRED_FIELD') }];

    return (
        <Form.Item
            label={t('MOBILE')}
            name="mobile"
            rules={RULES}
        >
            <Input placeholder={t('MOBILE_PLACEHOLDER')} />
        </Form.Item>
    );
};

export default Mobile;
