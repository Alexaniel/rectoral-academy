import { Collapse } from 'antd';
import { Text } from '@fluentui/react/lib/Text';
import { useTranslation } from 'react-i18next';
import { IStudyPlan } from '../../../interfaces';
import { descriptionProps, labelProps } from '../elementsProperties';
import styles from '../styles.module.scss';

const { Panel } = Collapse;

interface StudyPlanProps {
    studyPlan: IStudyPlan;
}
const StudyPlan = ({ studyPlan }: StudyPlanProps) => {
    const { t } = useTranslation('curses', { keyPrefix: 'DETAIL' });

    return (
        <Collapse
            ghost
            className={styles.studyPlan}
            defaultActiveKey={['0']}
        >
            {
                studyPlan?.modules.map((moduleData, index) => (
                    <Panel
                        key={index}
                        header={(
                            <Text
                                styles={labelProps}
                                variant="large"
                                block
                            >
                                {`${t('MODULE')} ${index + 1} - ${moduleData.topic}`}
                            </Text>
                        )}
                        className={styles.module}
                    >
                        <Text
                            styles={descriptionProps}
                            variant="mediumPlus"
                            block
                        >
                            {moduleData.description}
                        </Text>
                    </Panel>
                ))
            }
        </Collapse>
    );
};

export default StudyPlan;
