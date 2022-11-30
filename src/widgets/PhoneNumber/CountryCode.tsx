import { Form, Select, Avatar } from 'antd';
import { useTranslation } from 'react-i18next';
import { COUNTRIES } from '../../utils/countries';

const { Option } = Select;

const CountryCode = () => {
    const { t } = useTranslation('forms', { keyPrefix: 'FORMS.INPUTS' });
    const { t: tr } = useTranslation('forms', { keyPrefix: 'FORMS.RULES' });

    const RULES = [{ required: true, message: tr('REQUIRED_FIELD') }];

    return (
        <Form.Item
            label={t('COUNTRY_CODE')}
            initialValue="+593"
            name="countryCode"
            rules={RULES}
        >
            <Select
                placeholder={t('COUNTRY_CODE_PLACEHOLDER')}
                defaultValue="+593"
                showSearch
            >
                {
                    COUNTRIES.map((country, index) => (
                        <Option
                            value={`+${country.countryCode[0]}`}
                            key={index}
                        >
                            <Avatar
                                src={country.flag}
                                style={{
                                    marginRight: 8,
                                    width: 32,
                                    height: 20,
                                }}
                                shape="square"
                            />
                            {`+${country.countryCode[0]}`}
                        </Option>
                    ))
                }
            </Select>
        </Form.Item>
    );
};

export default CountryCode;
