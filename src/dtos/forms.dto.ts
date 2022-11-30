export interface ContactDto {
    name: string;
    lastname: string;
    email: string;
    mobile: string;
    countryCode: string;
    fullMobile: string;
    topic: string;
    textMessage: string;
}

export interface PartnerDto {
    institution: {
        name: string;
        country: string;
        website: string;
        email: string;
        type: string;
    },
    representative: {
        names: string;
        countryCode: string;
        mobile: string;
        fullMobile: string;
        email: string;
    },
    program: {
        name: string;
        modality: string;
        description: string;
        target: string;
        startDate: Date;
        endDate: Date;
        schedule: number;
    }
}

export interface PreEnrollmentDto {
    name: string;
    lastName: string;
    email: string;
    mobile: string;
    countryCode: string;
    fullMobile: string;
    country: string;
    isMember: boolean;
    membership: string;
    motivation: string;
    academic: {
        jobPosition: string;
        institute: string;
        instituteType: string;
        designation: string;
    },
    curseID: string;
}
