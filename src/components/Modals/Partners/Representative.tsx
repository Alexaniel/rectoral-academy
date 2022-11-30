import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import PhoneNumber from '../../../widgets/PhoneNumber';

const Representative = () => {
    const { t } = useTranslation('forms', { keyPrefix: 'FORMS.INPUTS' });
    const { t: tr } = useTranslation('forms', { keyPrefix: 'FORMS.RULES' });

    const RULES: any = [
        { required: true, message: tr('REQUIRED_FIELD') },
    ];

    const RULES_EMAIL: any = [
        { required: true, message: tr('REQUIRED_FIELD') },
        { type: 'email', message: tr('INVALID_EMAIL') },
        { type: 'string', min: 3, message: tr('MIN_LENGTH', { length: 3 }) },
    ];

    return (
        <>
            <Form.Item
                label={t('REPRESENTATIVE.NAMES')}
                name="representativeNames"
                rules={RULES}
            >
                <Input placeholder={t('REPRESENTATIVE.NAMES_PLACEHOLDER')} />
            </Form.Item>
            <Form.Item
                label={t('EMAIL')}
                name="representativeEmail"
                rules={RULES_EMAIL}
            >
                <Input placeholder={t('EMAIL_PLACEHOLDER')} />
            </Form.Item>

            <PhoneNumber />
        </>
    );
};

export default Representative;
