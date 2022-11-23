import { IContact } from './contact';

export interface IAcademic {
    jobPosition: string;
    institute: string;
    instituteType: string;
    designation: string;
    biography: string;
    curriculum: string;
    languages: Array<string>;
}

export interface ITeacher {
    _id: string;
    name: string;
    lastName: string;
    email: string;
    country: string;
    image: {
        original: string;
        thumbnail: string;
    },
    contact: IContact;
    role: Array<string>;
    academic: IAcademic;
}
