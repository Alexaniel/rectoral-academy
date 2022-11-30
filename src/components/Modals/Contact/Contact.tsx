import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import Country from '../../../widgets/Country';
import PhoneNumber from '../../../widgets/PhoneNumber';

const { TextArea } = Input;

const Contact = () => {
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
                label={t('NAME')}
                name="name"
                rules={RULES}
            >
                <Input placeholder={t('NAME_PLACEHOLDER')} />
            </Form.Item>
            <Form.Item
                label={t('LAST_NAME')}
                name="lastName"
                rules={RULES}
            >
                <Input placeholder={t('LAST_NAME_PLACEHOLDER')} />
            </Form.Item>
            <Form.Item
                label={t('EMAIL')}
                name="email"
                rules={RULES_EMAIL}
            >
                <Input placeholder={t('EMAIL_PLACEHOLDER')} />
            </Form.Item>

            <Country />

            <PhoneNumber />

            <Form.Item
                label={t('CONTACT.TOPIC')}
                name="topic"
                rules={RULES}
            >
                <Input placeholder={t('CONTACT.TOPIC_PLACEHOLDER')} />
            </Form.Item>

            <Form.Item
                label={t('CONTACT.MESSAGE')}
                name="textMessage"
                rules={RULES}
            >
                <TextArea placeholder={t('CONTACT.MESSAGE_PLACEHOLDER')} />
            </Form.Item>
        </>
    );
};

export default Contact;
