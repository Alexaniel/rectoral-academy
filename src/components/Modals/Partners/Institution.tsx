import { Form, Input, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import Country from '../../../widgets/Country';
import InstituteType from '../../../widgets/InstituteType';

const { Option } = Select;

const Institution = () => {
    const { t } = useTranslation('forms', { keyPrefix: 'FORMS.INPUTS' });
    const { t: tr } = useTranslation('forms', { keyPrefix: 'FORMS.RULES' });

    const RULES: any = [
        { required: true, message: tr('REQUIRED_FIELD') },
    ];

    const RULES_URL: any = [
        { required: true, message: tr('REQUIRED_FIELD') },
        { type: 'url', warningOnly: true, message: tr('INVALID_URL') },
        { type: 'string', min: 6, message: tr('MIN_LENGTH', { length: 6 }) },
    ];

    const RULES_EMAIL: any = [
        { required: true, message: tr('REQUIRED_FIELD') },
        { type: 'email', message: tr('INVALID_EMAIL') },
        { type: 'string', min: 3, message: tr('MIN_LENGTH', { length: 3 }) },
    ];

    return (
        <>
            <Form.Item
                label={t('INSTITUTION.NAME')}
                name="institutionName"
                rules={RULES}
            >
                <Input placeholder={t('INSTITUTION.NAME_PLACEHOLDER')} />
            </Form.Item>

            <Country />

            <InstituteType />

            <Form.Item
                label={t('INSTITUTION.WEBSITE')}
                name="institutionWebsite"
                rules={RULES_URL}
            >
                <Input
                    addonBefore="https://"
                    placeholder={t('INSTITUTION.WEBSITE_PLACEHOLDER')}
                />
            </Form.Item>

            <Form.Item
                label={t('INSTITUTION.EMAIL')}
                name="institutionEmail"
                rules={RULES_EMAIL}
            >
                <Input placeholder={t('INSTITUTION.EMAIL_PLACEHOLDER')} />
            </Form.Item>

        </>
    );
};

export default Institution;
