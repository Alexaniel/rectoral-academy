import countries from '../constants/countries.json';
import { ICountry } from '../interfaces';

const DOMAINS = countries.reduce((acc: any, country: any) => [...acc, ...country.topLevelDomain], []);

const COUNTRIES: ICountry[] = countries.map((country: any) => ({
    name: country.name,
    nativeName: country.nativeName,
    code: country.alpha3Code,
    countryCode: country.callingCodes,
    domain: country.topLevelDomain,
    flag: country.flag,
}));

export { DOMAINS, COUNTRIES };
