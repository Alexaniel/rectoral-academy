import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { Text } from '@fluentui/react/lib/Text';
import { FontIcon } from '@fluentui/react/lib/Icon';
import { mergeStyles } from '@fluentui/react/lib/Styling';
import { labelProps, valueProps } from '../elementsProperties';

import styles from '../styles.module.scss';

interface IInformationProps {
    modality: string;
    inversion: number;
    enrollmentData: {
        startDate: Date;
        endDate: Date;
        isNext: boolean;
    }
}

const Information = ({
    modality,
    inversion,
    enrollmentData,
}: IInformationProps) => {
    const { t } = useTranslation('curses', { keyPrefix: 'DETAIL' });

    const iconClass = mergeStyles({
        fontSize: 20,
        height: 20,
        width: 20,
        margin: '0 8px 0 0',
    });

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
                variant="large"
                styles={valueProps}
            >
                <FontIcon
                    aria-label={modality}
                    iconName={modality === 'VIRTUAL' ? 'Telemarketer' : 'Teamwork'}
                    className={iconClass}
                />
                {t(modality)}
            </Text>
            <Text
                variant="large"
                block
                styles={labelProps}
            >
                {t('INVERSION')}
            </Text>
            <Text
                variant="large"
                styles={valueProps}
            >
                <FontIcon
                    aria-label="Money"
                    iconName="Money"
                    className={iconClass}
                />
                {`${inversion},00`}
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
                            variant="large"
                            styles={valueProps}
                        >
                            {t('NOT_ENROLLMENT_DATE')}
                        </Text>
                    )
                    : (
                        <Text
                            variant="large"
                            styles={valueProps}
                        >
                            <FontIcon
                                aria-label="InsertSignatureLine"
                                iconName="InsertSignatureLine"
                                className={iconClass}
                            />
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
                variant="large"
                styles={valueProps}
            >
                <FontIcon
                    aria-label="Calendar"
                    iconName="Calendar"
                    className={iconClass}
                />
                { `${moment(enrollmentData?.startDate).format('ll')}`}
            </Text>

        </div>
    );
};

export default Information;
