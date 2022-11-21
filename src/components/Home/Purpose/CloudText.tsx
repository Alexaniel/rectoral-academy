import TagCloud from 'react-tag-cloud';
import { useTranslation } from 'react-i18next';
import styles from '../styles.module.scss';

const CloudText = () => {
    const { t } = useTranslation('home', { keyPrefix: 'PURPOSE.TAGS' });

    interface ITag {
        value: string;
        styles: string;
    }

    const TAGS: ITag[] = [
        {
            value: t('HUMANIZATION'),
            styles: 'largeProps',
        },
        {
            value: t('EDUCATION'),
            styles: 'mediumProps',
        },
        {
            value: t('BOARD'),
            styles: 'smallProps',
        },
        {
            value: t('HIGHER_EDUCATION'),
            styles: 'largeProps',
        },
        {
            value: t('REMEMBER'),
            styles: 'mediumProps',
        },
        {
            value: t('RESCUE'),
            styles: 'largeProps',
        },
        {
            value: t('RECONNECT'),
            styles: 'smallProps',
        },
        {
            value: t('MEANS'),
            styles: 'mediumProps',
        },
        {
            value: t('REINVENT'),
            styles: 'largeProps',
        },
        {
            value: t('ACkNOWLEDGES'),
            styles: 'smallProps',
        },
    ];
    return (
        <div className={styles.cloudText}>
            <TagCloud
                style={{
                    fontFamily: 'sans-serif',
                    fontSize: 32,
                    fontWeight: 'bold',
                    padding: 8,
                    /* @ts-ignore */
                    width: '100%',
                    height: '100%',
                }}
            >

                {
                    TAGS.map((tag: ITag) => (
                        <span
                            key={tag.value}
                            className={styles[tag.styles]}
                        >
                            {tag.value}
                        </span>
                    ))
                }
            </TagCloud>
        </div>
    );
};

export default CloudText;
