const transformPartner = (values: any) => {
    const {
        country, institutionName, instituteType, institutionWebsite, institutionEmail,
        representativeNames, representativeEmail, countryCode, mobile,
        programName, programDescription, programModality, programTarget, programDuration, programHours,
    } = values;
    const data = {
        institution: {
            name: institutionName,
            country,
            type: instituteType,
            website: institutionWebsite,
            email: institutionEmail,
        },
        representative: {
            names: representativeNames,
            countryCode,
            mobile,
            fullMobile: `${countryCode}${mobile}`,
            email: representativeEmail,
        },
        program: {
            name: programName,
            description: programDescription,
            modality: programModality,
            target: programTarget,
            startDate: programDuration[0],
            endDate: programDuration[1],
            schedule: programHours,

        },
    };

    return data;
};

export { transformPartner };
