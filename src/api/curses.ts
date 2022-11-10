import axios from 'axios';
import { IPaginatorQuery } from '../interfaces';
import { DASHBOARD_API } from './service';

export const getCurses = (paginator: IPaginatorQuery) => {
    const query: any = { ...paginator };
    const urlParams = new URLSearchParams(query).toString();
    const url = `${DASHBOARD_API}/curses?${urlParams}`;
    const response = axios.get(url);
    return response;
};

export const getCategories = () => {
    const url = `${DASHBOARD_API}/category`;
    const response = axios.get(url);
    return response;
};

export const getCurseById = (id: string) => {
    const url = `${DASHBOARD_API}/curses/${id}`;
    const response = axios.get(url);
    return response;
};
