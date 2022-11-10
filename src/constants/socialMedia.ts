export interface ISocialMedia {
  keyName: string;
  name: string;
  link: string;
}

export interface ISocialMediaList {
  [key: string]: ISocialMedia
}

export const NAMES = {
    FACEBOOK: 'FACEBOOK',
    TWITTER: 'TWITTER',
    LINKEDIN: 'LINKEDIN',
    INSTAGRAM: 'INSTAGRAM',
    YOUTUBE: 'YOUTUBE',
};

export const SOCIAL_MEDIA_ELEMENTS: ISocialMediaList = {
    [NAMES.FACEBOOK]: {
        keyName: 'FACEBOOK',
        name: 'Facebook',
        link: 'https://www.facebook.com/rectoralboardinstitute',
    },
    [NAMES.TWITTER]: {
        keyName: 'TWITTER',
        name: 'Twitter',
        link: 'https://twitter.com/RectoralBoard?s=20',
    },
    [NAMES.LINKEDIN]: {
        keyName: 'LINKEDIN',
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/company/rectoralboardinstitute/',
    },
    [NAMES.INSTAGRAM]: {
        keyName: 'INSTAGRAM',
        name: 'Instagram',
        link: 'https://www.instagram.com/rectoralboardinstitute/',
    },
    [NAMES.YOUTUBE]: {
        keyName: 'YOUTUBE',
        name: 'YouTube',
        link: 'https://www.youtube.com/channel/UCpMRSFSFp5eWEuxHEYuRzeA',
    },
};

export const SOCIAL_MEDIA_LIST = [...Object.values(SOCIAL_MEDIA_ELEMENTS)];
