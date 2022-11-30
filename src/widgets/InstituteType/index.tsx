import { Form, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { TYPES } from '../../constants/institute';

const { Option } = Select;

const InstituteType = () => {
    const { t } = useTranslation('forms', { keyPrefix: 'FORMS.INPUTS' });
    const { t: tr } = useTranslation('forms', { keyPrefix: 'FORMS.RULES' });

    const RULES = [{ required: true, message: tr('REQUIRED_FIELD') }];

    return (
        <Form.Item
            label={t('INSTITUTE_TYPE')}
            name="instituteType"
            initialValue="IES_PUBLIC"
            rules={RULES}
        >
            <Select
                placeholder={t('INSTITUTE_TYPE')}
                defaultValue="IES_PUBLIC"
            >
                {
                    TYPES.map((type, index) => (
                        <Option value={type} key={index}>
                            {t(`INSTITUTE_TYPES.${type}`)}
                        </Option>
                    ))
                }
            </Select>
        </Form.Item>
    );
};

export default InstituteType;
