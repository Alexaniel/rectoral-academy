import { Row, Col, Space } from 'antd';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Text } from '@fluentui/react/lib/Text';

import { getCurseById } from '../../../api/curses';
import { ICurse } from '../../../interfaces';
import { BackButton } from '../../../widgets/BackButton';
import { Subheader } from '../../../widgets/Subheader';
import { categoryProps, descriptionProps, labelProps } from '../elementsProperties';

import Description from './Description';
import Information from './Information';
import TeacherList from './TeacherList';
import StudyPlan from './StudyPlan';

import styles from '../styles.module.scss';

const CurseDetail = () => {
    const { t } = useTranslation('curses', { keyPrefix: 'DETAIL' });
    const [curse, setCurse] = useState<ICurse>({} as ICurse);
    const [loading, setLoading] = useState<boolean>(true);

    const typeProgram = t(curse?.offerType);
    const subTypeProgram = t(curse?.offerSubType);

    const params = useParams();
    const { id } = params;

    const fetchCurseDetail = async (curseId: string) => {
        const { data } = await getCurseById(curseId);
        setCurse(data);
        setLoading(false);
    };

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        fetchCurseDetail(id);
    }, [id]);

    return (
        loading
            ? (
                <div className={styles.loadingCurses}>
                    {t('GETTING_CURSE')}
                </div>
            )
            : (
                <div className={styles.curseDetail}>
                    <Space direction="vertical" size={16}>
                        <BackButton path="/curses" />
                        <Subheader text={curse?.name} />
                    </Space>

                    <Description
                        description={curse?.description}
                        typeProgram={typeProgram}
                        subTypeProgram={subTypeProgram}
                    />

                    <Row
                        align="top"
                        style={{
                            width: '100%',
                            margin: '32px 0',
                        }}
                    >
                        <Col xs={24} lg={16} xl={18}>
                            <TeacherList teachers={curse?.teachers} />
                        </Col>
                        <Col xs={24} lg={8} xl={6}>
                            <Information
                                modality={curse.modality}
                                inversion={curse.inversion}
                                enrollmentData={curse.enrollmentData}
                            />
                        </Col>

                    </Row>

                    <Text styles={labelProps} variant="xxLarge" block>
                        {t('SYLLABUS')}
                    </Text>

                    <StudyPlan studyPlan={curse?.studyPlanID} />

                    <Text styles={labelProps} variant="xxLarge" block>
                        {t('METHODOLOGY')}
                    </Text>

                    <Text variant="large" block styles={descriptionProps}>
                        {curse?.methodology}
                    </Text>

                    <Text
                        styles={labelProps}
                        variant="xxLarge"
                        block
                    >
                        {t('PROFILE_OF_GRADUATION')}
                    </Text>

                    <Text
                        styles={labelProps}
                        variant="xxLarge"
                        block
                    >
                        {t('RELATED_CURSES')}
                    </Text>

                    <Text
                        styles={labelProps}
                        variant="xxLarge"
                        block
                    >
                        {t('APPLY_TO_CURSE')}
                    </Text>
                </div>
            )
    );
};

export default CurseDetail;
