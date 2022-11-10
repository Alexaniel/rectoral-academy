import { ICategory } from './category';
import { IStudyPlan } from './studyPlan';
import { ITeacher } from './teacher';

export interface ICurse {
  _id: string;
  modality: string;
  startDate: Date;
  endDate: Date;
  description: string;
  name: string;
  categoryID: ICategory;
  enrollmentData: {
    startDate: Date;
    endDate: Date;
    isNext: boolean;
  };
  targetAudience: Array<string>;
  teachers: Array<ITeacher>;
  methodology: string;
  inversion: number;
  createdAt: Date;
  offerType: string;
  offerPeriod: {
    startDate: Date;
    endDate: Date;
  };
  offerSubType: string;
  registeredBy: string;
  studyPlanID: IStudyPlan;
}
