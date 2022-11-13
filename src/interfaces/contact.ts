export interface IContact {
    _id: string;
    mobile: string;
    countryCode: string;
    fullMobile: string;
    alternativeMobile?: string;
    socialMedia: {
        FB: string;
        TW: string;
        LN: string;
        IG: string;
    };
}
