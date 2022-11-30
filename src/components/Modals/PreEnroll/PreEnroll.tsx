import { Form, Input, Select } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Country from '../../../widgets/Country';
import Membership from '../../../widgets/Membership';
import PhoneNumber from '../../../widgets/PhoneNumber';

const { Option } = Select;

const PreEnroll = () => {
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

    const [disabled, setDisabled] = useState<boolean>(false);

    const validateIsMember = (value: string) => {
        if (value === 'NO') {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    };

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
                label={t('ENROLL.IS_MEMBER')}
                name="isMember"
                rules={RULES}
                initialValue="YES"
            >
                <Select
                    placeholder={t('ENROLL.IS_MEMBER_PLACEHOLDER')}
                    onChange={validateIsMember}
                    defaultValue="YES"
                    showSearch
                >
                    <Option value="YES" key="YES">
                        {t('ENROLL.YES')}
                    </Option>
                    <Option value="NO" key="NO">
                        {t('ENROLL.NO')}
                    </Option>
                </Select>
            </Form.Item>

            <Membership disabled={disabled} />
        </>
    );
};

export default PreEnroll;
