import { Space } from 'antd';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Text } from '@fluentui/react/lib/Text';

import { getCurseById } from '../../../api/curses';
import { ICurse } from '../../../interfaces';
import { BackButton } from '../../../widgets/BackButton';
import { Subheader } from '../../../widgets/Subheader';
import { categoryProps, descriptionProps, labelProps } from './elementsProperties';

import Information from './Information';
import StudyPlan from './StudyPlan';

import styles from '../styles.module.scss';

const CurseDetail = () => {
    const { t } = useTranslation('curses', { keyPrefix: 'DETAIL' });
    const [curse, setCurse] = useState<ICurse>({} as ICurse);

    const params = useParams();
    const { id } = params;

    const fetchCurseDetail = async (curseId: string) => {
        const { data } = await getCurseById(curseId);
        setCurse(data);
    };

    useEffect(() => {
        if (!id) return;
        fetchCurseDetail(id);
    }, [id]);

    return (
        <div className={styles.curseDetail}>
            <Space direction="vertical" size={16}>
                <BackButton path="/curses" />
                <Subheader text={curse?.name} />
            </Space>
            <Text
                styles={labelProps}
                style={{ marginTop: 16 }}
                variant="medium"
                block
            >
                {`${curse?.offerType} / ${curse?.offerSubType}`}
            </Text>
            <Text
                styles={categoryProps}
                variant="mediumPlus"
                block
            >
                {curse?.categoryID?.keyName}
            </Text>

            <Text
                variant="large"
                block
                styles={descriptionProps}
            >
                {curse?.description}
            </Text>

            <Information
                createdAt={curse.createdAt}
                modality={curse.modality}
                inversion={curse.inversion}
                targetAudience={curse.targetAudience}
                registeredBy={curse.registeredBy}
                offerType={curse.offerType}
                offerSubType={curse.offerSubType}
                offerPeriod={curse.offerPeriod}
                enrollmentData={curse.enrollmentData}
            />

            <Text
                styles={labelProps}
                variant="xxLarge"
                block
            >
                {t('SYLLABUS')}
            </Text>

            <StudyPlan
                studyPlan={curse?.studyPlanID}
            />

            <Text
                styles={labelProps}
                variant="xxLarge"
                block
            >
                {t('METHODOLOGY')}
            </Text>

            <Text
                variant="large"
                block
                styles={descriptionProps}
            >
                {curse?.methodology}
            </Text>

            <Text
                styles={labelProps}
                variant="xxLarge"
                block
            >
                {t('PROFILE_OF_GRADUATION')}
            </Text>
        </div>
    );
};

export default CurseDetail;
