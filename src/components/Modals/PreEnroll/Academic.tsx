import { Form, Input, DatePicker } from 'antd';
import { useTranslation } from 'react-i18next';
import InstituteType from '../../../widgets/InstituteType';

const { RangePicker } = DatePicker;

const Academic = () => {
    const { t } = useTranslation('forms', { keyPrefix: 'FORMS.INPUTS' });
    const { t: tr } = useTranslation('forms', { keyPrefix: 'FORMS.RULES' });

    const RULES: any = [
        { required: true, message: tr('REQUIRED_FIELD') },
    ];

    return (
        <>
            <Form.Item
                label={t('INSTITUTE')}
                name="institute"
                rules={RULES}
            >
                <Input placeholder={t('INSTITUTE_PLACEHOLDER')} />
            </Form.Item>

            <InstituteType />

            <Form.Item
                label={t('ENROLL.JOB_POSITION')}
                name="jobPosition"
                rules={RULES}
            >
                <Input placeholder={t('ENROLL.JOB_POSITION_PLACEHOLDER')} />
            </Form.Item>

            <Form.Item
                label={t('ENROLL.DESIGNATION')}
                name="designation"
                rules={RULES}
            >
                <Input placeholder={t('ENROLL.DESIGNATION_PLACEHOLDER')} />
            </Form.Item>

            <Form.Item
                label={t('ENROLL.DESIGNATION_DURATION')}
                name="designationDuration"
                rules={RULES}
            >
                <RangePicker />
            </Form.Item>
        </>
    );
};

export default Academic;
