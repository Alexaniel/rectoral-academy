import { Form, Select, Avatar } from 'antd';
import { useTranslation } from 'react-i18next';
import { COUNTRIES } from '../../utils/countries';

const { Option } = Select;

const Country = () => {
    const { t } = useTranslation('forms', { keyPrefix: 'FORMS.INPUTS' });
    const { t: tr } = useTranslation('forms', { keyPrefix: 'FORMS.RULES' });

    const RULES = [{ required: true, message: tr('REQUIRED_FIELD') }];

    return (
        <Form.Item
            label={t('COUNTRY')}
            name="country"
            rules={RULES}
            initialValue="ECU"
        >
            <Select
                placeholder={t('COUNTRY_PLACEHOLDER')}
                showSearch
                defaultValue="ECU"
            >
                {
                    COUNTRIES.map((country, index) => (
                        <Option value={country.code} key={index}>
                            <Avatar
                                src={country.flag}
                                style={{
                                    marginRight: 8,
                                    width: 32,
                                    height: 20,
                                }}
                                shape="square"
                            />
                            {country.name}
                        </Option>
                    ))
                }
            </Select>
        </Form.Item>
    );
};

export default Country;
