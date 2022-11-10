import { Order } from '../enums/Order';

export interface IPaginatorType {
    limit: number;
    skip?: number;
    page?: number;
    startDate?: string;
    endDate?: string;
}

export interface IPaginatorQuery {
    limit?: number;
    page?: number;
    order?: Order;
    search?: string;
}
