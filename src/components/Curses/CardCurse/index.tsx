import moment from 'moment';
import { Text, ITextStyles } from '@fluentui/react/lib/Text';
import {
    DocumentCard,
    DocumentCardActivity,
    DocumentCardDetails,
    IDocumentCardActivityPerson,
    DocumentCardImage,
} from '@fluentui/react/lib/DocumentCard';

import { ImageFit } from '@fluentui/react/lib/Image';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICurse } from '../../../interfaces';

import IMAGES from '../../../constants/images';

import styles from '../styles.module.scss';

const textProps: Partial<ITextStyles> = {
    root: {
        fontWeight: 600,
    },
};

interface ICardCurseProps {
  item: ICurse;
}

const CardCurse = ({ item }: ICardCurseProps) => {
    const [people, setPeople] = useState<IDocumentCardActivityPerson[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        setPeople([
            {
                name: item.registeredBy,
                profileImageSrc: '',
                initials: item.registeredBy[0],
            },
        ]);
    }, [item]);

    return (
        <DocumentCard
            aria-label={item.name}
            className={styles.cardCurse}
            onClick={() => navigate(`/curses/${item._id}`)}
        >
            <DocumentCardImage
                height={175}
                imageFit={ImageFit.cover}
                imageSrc={IMAGES.curses.card_curse}
            />
            <DocumentCardDetails>
                <div style={{ padding: '8px 16px' }}>
                    <Text
                        variant="large"
                        block
                        nowrap
                        styles={textProps}
                    >
                        {item.name}
                    </Text>
                    <Text
                        variant="medium"
                        block
                        nowrap
                    >
                        {item.description}
                    </Text>
                </div>
            </DocumentCardDetails>
            <DocumentCardActivity
                activity={
                    moment(item.createdAt).format('ll')
                }
                people={people}
            />
        </DocumentCard>
    );
};

export default CardCurse;
