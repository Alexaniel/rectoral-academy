import countries from '../constants/countries.json';

const getLanguages = (languages: string[]) => {
    const newLanguages: any = [];
    countries.forEach((country) => {
        if (languages.includes(country.alpha3Code)) {
            newLanguages.push({
                name: country.name,
                nativeName: country.nativeName,
                code: country.alpha3Code,
            });
        }
    });
    return newLanguages;
};

const getCountry = (name: string) => {
    console.log({ name });
};

export { getLanguages, getCountry };
