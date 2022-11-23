import { Image, IImageProps } from '@fluentui/react/lib/Image';
import { Text } from '@fluentui/react/lib/Text';
import {
    IPersonaSharedProps, Persona, PersonaSize,
} from '@fluentui/react/lib/Persona';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ITeacher } from '../../../interfaces';
import { theme } from '../../../theme';
import { Contact } from '../../../widgets/Contact';
import { descriptionProps, labelProps, valueProps } from '../elementsProperties';
import { getLanguages } from '../../../utils/dates';
import styles from '../styles.module.scss';

interface TeacherProps {
    teacher: ITeacher;
    index: number;
}

interface ILanguage {
    name: string;
    nativeName: string;
    code: string;
}

const Teacher = ({ teacher, index }: TeacherProps) => {
    const { t } = useTranslation('curses', { keyPrefix: 'DETAIL' });

    const { academic, contact } = teacher;

    const imageProps: Partial<IImageProps> = {
        src: teacher.image.original,
        alt: teacher?.name,
        loading: 'lazy',
        width: 45,
        height: 45,
    };

    const personaWithInitials: IPersonaSharedProps = {
        secondaryText: academic?.jobPosition,
        text: teacher?.name,
        imageInitials: teacher?.name?.charAt(0),
    };

    const [languages, setLanguages] = useState<ILanguage[]>([]);

    const fetchLanguages = async () => {
        const response = getLanguages(academic?.languages);
        setLanguages(response);
    };

    useEffect(() => {
        fetchLanguages();
    }, []);

    return (
        <div className={styles.teacher}>
            {
                teacher?.image?.original
                    ? (
                        <Image {...imageProps} />
                    ) : (
                        <Persona
                            {...personaWithInitials}
                            initialsColor={theme.themePrimary}
                            size={PersonaSize.size72}
                        />
                    )
            }

            <Contact
                data={teacher?.contact}
                email={teacher?.email}
            />

            <Text variant="large" block styles={descriptionProps}>
                {academic?.biography}
            </Text>

            <div className={styles.languages}>
                <Text
                    variant="large"
                    block
                    styles={labelProps}
                >
                    {`${t('LANGUAGES')}: `}
                </Text>
                {
                    languages && (
                        languages.map((language) => (
                            <Text
                                className={styles.language}
                                styles={valueProps}
                                variant="mediumPlus"
                                block

                            >
                                {`${t(language.code)}`}
                            </Text>
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default Teacher;
