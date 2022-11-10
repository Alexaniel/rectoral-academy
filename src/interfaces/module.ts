export interface IModule {
    _id: string;
    description: string;
    duration: {
        startDate: Date;
        endDate: Date;
    };
    sources: {
        url: string;
        digital: Array<string>;
        library: Array<string>;
    },
    topic: string;
}
