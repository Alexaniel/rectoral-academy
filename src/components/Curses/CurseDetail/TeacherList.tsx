import { Carousel } from 'antd';
import { Text } from '@fluentui/react/lib/Text';
import { useTranslation } from 'react-i18next';
import { ITeacher } from '../../../interfaces';
import Teacher from './Teacher';
import styles from '../styles.module.scss';
import { labelProps } from '../elementsProperties';

interface TeachersProps {
    teachers: ITeacher[];
}

const TeacherList = ({ teachers }: TeachersProps) => {
    const { t } = useTranslation('curses', { keyPrefix: 'DETAIL' });

    return (
        <>
            <Text
                styles={labelProps}
                style={{ marginBottom: 24 }}
                variant="xxLarge"
                block
            >
                {`${t('MENTORS')} (${teachers?.length || 0})`}
            </Text>
            <Carousel
                dots
                autoplay
                dotPosition="bottom"
                className={styles.teachersList}
                pauseOnDotsHover
            >
                {
                    teachers?.map((teacher, index) => (
                        <Teacher
                            key={teacher?._id}
                            index={index}
                            teacher={teacher}
                        />
                    ))
                }
            </Carousel>
        </>
    );
};

export default TeacherList;
