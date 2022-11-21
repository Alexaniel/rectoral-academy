import { Select, Space } from 'antd';
import { debounce } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useCallback, useContext } from 'react';
import { Text, ITextStyles } from '@fluentui/react/lib/Text';
import { CursesContext } from '../../../screens/Curses/context/cursesContext';
import { theme } from '../../../theme';

import styles from '../styles.module.scss';

interface Option {
    value: string;
    label: string;
    children?: Option[];
}

const textProps: Partial<ITextStyles> = {
    root: {
        fontWeight: 700,
        color: theme.themePrimary,
        textAlign: 'left',
    },
};

const Filters = () => {
    const { t } = useTranslation('curses', { keyPrefix: 'SEARCH' });

    const {
        fetchCurses,
        categories,
        category,
        search,
        setCategory,
        modality,
        setModality,
        offerSubType,
        setOfferSubType,
    } = useContext(CursesContext);

    const offerSubTypes: Option[] = [
        {
            value: 'DIPLOMATE',
            label: 'Diplomados',
        },
        {
            value: 'MASTERCLASS',
            label: 'Masterclass',
        },
        {
            value: 'MASTER',
            label: 'Master',
        },
        {
            value: 'PhD',
            label: 'Doctorado',
        },
    ];

    const modalities: Option[] = [
        {
            value: 'PRESENCIAL',
            label: 'Presencial',
        },
        {
            value: 'VIRTUAL',
            label: 'Virtual',
        },
    ];

    const fetchDebounced = useCallback<any>(debounce(fetchCurses, 500), []);

    const onChangeProgram = (value: any) => {
        setOfferSubType(value);
        fetchDebounced(search, category, modality, value);
    };

    const onChangeModality = (value: any) => {
        setModality(value);
        fetchDebounced(search, category, value, offerSubType);
    };

    const onChangeCategory = (value: any) => {
        setCategory(value);
        fetchDebounced(search, value, modality, offerSubType);
    };

    return (
        <div className={styles.filters}>
            <Space direction="vertical" size={16} style={{ width: '100%' }}>
                <Text
                    variant="mediumPlus"
                    block
                    styles={textProps}
                >
                    { t('TYPE') }
                </Text>
                <Select
                    className={styles.formSelect}
                    placeholder={t('SELECT_TYPE')}
                    onChange={onChangeProgram}
                    allowClear
                >
                    {offerSubTypes.map((item) => (
                        <Select.Option key={item.value} value={item.value}>
                            {item.label}
                        </Select.Option>
                    ))}
                </Select>
                <Text
                    variant="mediumPlus"
                    block
                    styles={textProps}
                >
                    { t('MODALITY') }
                </Text>
                <Select
                    className={styles.formSelect}
                    placeholder={t('SELECT_MODALITY')}
                    onChange={onChangeModality}
                    allowClear
                >
                    {modalities.map((item) => (
                        <Select.Option key={item.value} value={item.value}>
                            {item.label}
                        </Select.Option>
                    ))}
                </Select>
                <Text
                    variant="mediumPlus"
                    block
                    styles={textProps}
                >
                    { t('CATEGORY') }
                </Text>
                <Select
                    className={styles.formSelect}
                    placeholder={t('SELECT_CATEGORY')}
                    onChange={onChangeCategory}
                    allowClear
                >
                    {categories.map((item) => (
                        <Select.Option key={item.keyName} value={item.keyName}>
                            {item.defaultName}
                        </Select.Option>
                    ))}
                </Select>
            </Space>
        </div>
    );
};

export default Filters;
