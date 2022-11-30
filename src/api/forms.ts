import axios from 'axios';
import { ContactDto, PartnerDto, PreEnrollmentDto } from '../dtos/forms.dto';
import { DASHBOARD_API } from './service';

export const createContact = (data: ContactDto): Promise<ContactDto> => {
    const url = `${DASHBOARD_API}/forms/contact-academy`;
    const response: any = axios.post(url, data);
    return response;
};

export const createPartner = (data: PartnerDto): Promise<PartnerDto> => {
    const url = `${DASHBOARD_API}/forms/partner-academy`;
    const response: any = axios.post(url, data);
    return response;
};

export const createPreEnrollment = (data: PreEnrollmentDto): Promise<PreEnrollmentDto> => {
    const url = `${DASHBOARD_API}/forms/pre-enrollment`;
    const response: any = axios.post(url, data);
    return response;
};
