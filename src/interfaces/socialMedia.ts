export interface ISocialMedia {
    keyName: string;
    name: string;
    link: string;
}

export interface ISocialMediaList {
    [key: string]: ISocialMedia;
}
