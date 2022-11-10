import { IModule } from './module';

export interface IStudyPlan {
    _id: string;
    name: string;
    modules: Array<IModule>;
}
