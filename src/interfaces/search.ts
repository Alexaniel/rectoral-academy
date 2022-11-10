import { IPaginatorQuery } from './paginator';

export interface ISearch {
    paginator?: IPaginatorQuery;
    search?: string | null;
}
