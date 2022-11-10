import {
    Row, Col, Input, Space, Dropdown,
} from 'antd';
import {
    useCallback, useContext, useEffect, useState,
} from 'react';
import { debounce } from 'lodash';
import { BsSearch } from 'react-icons/bs';
import { BiFilter } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import { Text, ITextStyles } from '@fluentui/react/lib/Text';
import { theme } from '../../../theme';

import { CursesContext } from '../../../screens/Curses/context/cursesContext';
import Filters from '../Filters';
import styles from '../styles.module.scss';

const textProps: Partial<ITextStyles> = {
    root: {
        fontWeight: 700,
        color: theme.neutralTertiary,
        textAlign: 'center',
    },
};

const Search = () => {
    const { t } = useTranslation('curses', { keyPrefix: 'SEARCH' });

    const {
        fetchCurses,
        fetchCategories,
        search,
        setSearch,
        category,
        modality,
        offerSubType,
    } = useContext(CursesContext);

    const styleFilter: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    };

    const fetchDebounced = useCallback<any>(debounce(fetchCurses, 500), []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearch(value);
        fetchDebounced(value, category, modality, offerSubType);
    };

    useEffect(() => {
        fetchDebounced(search, category, modality, offerSubType);
        fetchCategories();
    }, []);

    return (
        <div className={styles.search}>
            <Space direction="vertical" size={16}>
                <Text
                    variant="xLarge"
                    styles={textProps}
                    block
                >
                    { t('SUBHEADER') }
                </Text>

                <Row justify="center" align="middle">
                    <Col span={21}>
                        <Input
                            size="large"
                            placeholder="Search curse"
                            prefix={<BsSearch size="20px" style={{ marginRight: '8px' }} color="#525F7F" />}
                            onChange={handleSearch}
                            value={search}
                            allowClear
                        />
                    </Col>
                    <Col span={3} style={styleFilter}>
                        <Dropdown
                            placement="bottomRight"
                            overlay={<Filters />}
                            trigger={['click']}
                            // @ts-ignore
                            onClick={
                                (e: React.ChangeEvent<HTMLInputElement>) => {
                                    e.stopPropagation();
                                }
                            }
                        >
                            <BiFilter size={36} color="#1b4484" />
                        </Dropdown>
                    </Col>
                </Row>
            </Space>
        </div>
    );
};

export default Search;
