import { ICloud, Cloud } from 'react-icon-cloud';
import { SPONSORS } from '../../../constants/sponsors';
import styles from '../styles.module.scss';

export const cloudProps: Omit<ICloud, 'children'> = {
    containerProps: {
        style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            paddingTop: 40,
        },
    },
    options: {
        clickToFront: 500,
        depth: 1,
        imageScale: 1,
        initial: [0.1, -0.1],
        outlineColour: '#0000',
        reverse: true,
        tooltip: 'native',
        tooltipDelay: 0,
        wheelZoom: false,
    },
};

const CloudIcons = () => (
    <div className={styles.cloudIcons}>
        <Cloud {...cloudProps}>
            {
                SPONSORS.map((sponsor) => (
                    <a
                        key={sponsor.name}
                        href={sponsor.url}
                        title={sponsor.name}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            width="164px"
                            height="164px"
                            alt={sponsor.name}
                            src={sponsor.icon}
                        />
                    </a>
                ))
            }
        </Cloud>
    </div>
);

export default CloudIcons;
