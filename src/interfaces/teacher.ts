import { IContact } from './contact';

export interface ITeacher {
    _id: string;
    names: string;
    lastName: string;
    curriculumURL: string;
    email: string;
    country: string;
    languages: Array<string>;
    isRectoralMember: boolean;
    jobPosition: string;
    synthesis: string;
    image: {
        original: string;
        thumbnail: string;
    },
    contact: IContact
}
