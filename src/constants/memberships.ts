import { TYPES_MEMBERSHIPS } from '../enums/Memberships';
import { IMembership } from '../interfaces';
import IMAGES from './images';

export const NAMES = {
    GOLD: TYPES_MEMBERSHIPS.GOLD,
    PLATINUM: TYPES_MEMBERSHIPS.PLATINUM,
    DIAMOND: TYPES_MEMBERSHIPS.DIAMOND,
};

export const MEMBERSHIPS: IMembership[] = [
    {
        keyName: 'GOLD',
        name: 'Gold',
        image: IMAGES.memberships.gold,
        code: 0,
        color: '#AD9434',
        purpose: 'GOLD.PURPOSE',
    },
    {
        keyName: 'PLATINUM',
        name: 'Platinum',
        image: IMAGES.memberships.platinum,
        code: 1,
        color: '#3E3E3E',
        purpose: 'PLATINUM.PURPOSE',
    },
    {
        keyName: 'DIAMOND',
        name: 'Diamond',
        image: IMAGES.memberships.diamond,
        code: 2,
        color: '#4F88EC',
        purpose: 'DIAMOND.PURPOSE',
    },
];
