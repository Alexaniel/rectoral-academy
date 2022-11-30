import {
    Form, Input, Select, DatePicker, InputNumber, Space,
} from 'antd';
import { useTranslation } from 'react-i18next';
import { MODALITIES } from '../../../constants/modality';

const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

const Program = () => {
    const { t } = useTranslation('forms', { keyPrefix: 'FORMS.INPUTS' });
    const { t: tr } = useTranslation('forms', { keyPrefix: 'FORMS.RULES' });

    const RULES: any = [
        { required: true, message: tr('REQUIRED_FIELD') },
    ];

    const RULES_DESCRIPTION: any = [
        { type: 'string', max: 250, message: tr('MAX_LENGTH', { length: 250 }) },
    ];

    return (
        <>
            <Form.Item
                label={t('PROGRAM.NAME')}
                name="programName"
                rules={RULES}
            >
                <Input placeholder={t('PROGRAM.NAME_PLACEHOLDER')} />
            </Form.Item>

            <Form.Item
                label={t('PROGRAM.DESCRIPTION')}
                name="programDescription"
                rules={RULES_DESCRIPTION}
            >
                <TextArea placeholder={t('PROGRAM.DESCRIPTION_PLACEHOLDER')} maxLength={250} showCount />
            </Form.Item>

            <Form.Item
                label={t('PROGRAM.MODALITY')}
                name="programModality"
                initialValue="VIRTUAL"
                rules={RULES}
            >
                <Select
                    placeholder={t('PROGRAM.MODALITY_PLACEHOLDER')}
                    showSearch
                    defaultValue="VIRTUAL"
                >
                    {
                        MODALITIES.map((modality, index) => (
                            <Option value={modality} key={index}>
                                {t(`PROGRAM.${modality}`)}
                            </Option>
                        ))
                    }
                </Select>
            </Form.Item>

            <Form.Item
                label={t('PROGRAM.TARGET')}
                name="programTarget"
                rules={RULES}
            >
                <Input placeholder={t('PROGRAM.TARGET_PLACEHOLDER')} />
            </Form.Item>

            <Space size={[40, 0]} wrap>
                <Form.Item
                    label={t('PROGRAM.DURATION')}
                    name="programDuration"
                    rules={RULES}
                >
                    <RangePicker />
                </Form.Item>

                <Form.Item
                    label={t('PROGRAM.HOURS')}
                    name="programHours"
                    rules={RULES}
                >
                    <InputNumber min={0} placeholder="Ej. 8" />
                </Form.Item>
            </Space>

        </>
    );
};

export default Program;
