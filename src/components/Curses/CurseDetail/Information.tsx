import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { Text } from '@fluentui/react/lib/Text';
import { labelProps, valueProps } from './elementsProperties';

import styles from '../styles.module.scss';

interface IInformationProps {
    createdAt: Date;
    modality: string;
    inversion: number;
    targetAudience: string[] | [];
    registeredBy: string;
    offerType: string;
    offerSubType: string;
    offerPeriod: {
        startDate: Date;
        endDate: Date;
    },
    enrollmentData: {
        startDate: Date;
        endDate: Date;
        isNext: boolean;
    }
}

const Information = ({
    createdAt,
    modality,
    inversion,
    targetAudience,
    registeredBy,
    offerType,
    offerSubType,
    offerPeriod,
    enrollmentData,
}: IInformationProps) => {
    const { t } = useTranslation('curses', { keyPrefix: 'DETAIL' });

    return (
        <div className={styles.information}>
            <Text
                variant="large"
                block
                styles={labelProps}
            >
                {t('MODALITY')}
            </Text>
            <Text
                variant="mediumPlus"
                block
                styles={valueProps}
            >
                {modality}
            </Text>
            <Text
                variant="large"
                block
                styles={labelProps}
            >
                {t('INVERSION')}
            </Text>
            <Text
                variant="mediumPlus"
                block
                styles={valueProps}
            >
                {inversion}
            </Text>

            <Text
                variant="large"
                block
                styles={labelProps}
            >
                {t('ENROLLMENT_DATE')}
            </Text>

            {
                enrollmentData?.isNext
                    ? (
                        <Text
                            variant="mediumPlus"
                            block
                            styles={valueProps}
                        >
                            {t('NOT_ENROLLMENT_DATE')}
                        </Text>
                    )
                    : (
                        <Text
                            variant="mediumPlus"
                            block
                            styles={valueProps}
                        >
                            {
                                `${moment(enrollmentData?.startDate).format('ll')} - 
                                ${moment(enrollmentData?.endDate).format('ll')}`
                            }
                        </Text>
                    )
            }

            <Text
                variant="large"
                block
                styles={labelProps}
            >
                {t('COURSE_START_DATE')}
            </Text>

            <Text
                variant="mediumPlus"
                block
                styles={valueProps}
            >
                {
                    `${moment(enrollmentData?.startDate).format('ll')}`
                }
            </Text>

        </div>
    );
};

export default Information;
