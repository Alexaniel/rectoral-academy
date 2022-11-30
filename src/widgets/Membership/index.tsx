import { Form, Select, Avatar } from 'antd';
import { useTranslation } from 'react-i18next';
import { MEMBERSHIPS } from '../../constants/memberships';

const { Option } = Select;

interface MembershipProps {
    disabled?: boolean;
}

const Membership = ({ disabled }: MembershipProps) => {
    const { t } = useTranslation('forms', { keyPrefix: 'FORMS.INPUTS' });
    const { t: tr } = useTranslation('forms', { keyPrefix: 'FORMS.RULES' });

    const RULES = [{ required: true, message: tr('REQUIRED_FIELD') }];

    return (
        <Form.Item
            label={t('MEMBERSHIP')}
            name="membership"
            rules={RULES}
            initialValue="GOLD"
        >
            <Select
                disabled={disabled}
                placeholder={t('MEMBERSHIP_PLACEHOLDER')}
                showSearch
                defaultValue="GOLD"
            >
                {
                    MEMBERSHIPS.map((membership, index) => (
                        <Option value={membership.keyName} key={index}>
                            <Avatar
                                className="category"
                                src={membership.image}
                                style={{
                                    marginRight: 4,
                                    width: 32,
                                    height: 20,
                                }}
                                shape="square"
                            />
                            {`${t('CATEGORY')} ${membership.name}`}
                        </Option>
                    ))
                }
            </Select>
        </Form.Item>
    );
};

export default Membership;
