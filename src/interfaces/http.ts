import { IMeta } from './meta';

export interface IResponse<T> {
    data: T;
    statusCode: number;
    message: string;
    meta: IMeta;
}
