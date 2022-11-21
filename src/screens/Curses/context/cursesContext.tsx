import {
    createContext, useMemo, useState,
} from 'react';
import {
    getCategories, getCurses,
} from '../../../api/curses';
import { ICurse, ICategory } from '../../../interfaces';

interface ICursesContext {
    curses: ICurse[];
    categories: ICategory[];
    category: string;
    search: string;
    error: string;
    loading: boolean;
    offerSubType: string[];
    modality: string[];
    setOfferSubType: (value: string[]) => void;
    setModality: (value: string[]) => void;
    fetchCurses: () => void;
    fetchCategories: () => void;
    setCategory: (value: string) => void;
    setSearch: (value: string) => void;
}

const initialContext = {
    curses: [],
    categories: [],
    category: '',
    search: '',
    error: '',
    loading: false,
    offerSubType: [],
    modality: [],
    setOfferSubType: () => {},
    setModality: () => {},
    fetchCurses: () => {},
    fetchCategories: () => {},
    setCategory: () => {},
    setSearch: () => {},
};

export const CursesContext = createContext<ICursesContext>(initialContext);

export const CursesProvider = ({ children }: { children: any }) => {
    const [curses, setCurses] = useState<ICurse[]>(initialContext.curses);
    const [categories, setCategories] = useState<ICurse[]>(initialContext.categories);
    const [category, setCategory] = useState<string>(initialContext.category);
    const [search, setSearch] = useState<string>(initialContext.search);
    const [loading, setLoading] = useState<boolean>(initialContext.loading);
    const [offerSubType, setOfferSubType] = useState<string[]>(initialContext.offerSubType);
    const [modality, setModality] = useState<string[]>(initialContext.modality);
    const [error, setError] = useState<string>(initialContext.error);

    const fetchCategories = async () => {
        getCategories()
            .then(({ data }) => setCategories(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    };

    const fetchCurses = async (
        search: string,
        category?: string,
        modality?: string[],
        offerSubType?: string[],
    ) => {
        setLoading(true);
        const query: any = {
            search, category, modality, offerSubType,
        };

        if (!search) delete query.search;
        if (!category) delete query.category;
        if (!modality || modality?.length < 0) delete query.modality;
        if (!offerSubType || offerSubType?.length < 0) delete query.offerSubType;

        getCurses(query)
            .then(({ data }) => setCurses(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    };

    const cursesProviderValue = useMemo(() => ({
        curses,
        categories,
        category,
        loading,
        error,
        offerSubType,
        modality,
        setOfferSubType,
        setModality,
        fetchCurses,
        fetchCategories,
        setCategory,
        setSearch,
    }), [curses, loading, error]);

    return (
        <CursesContext.Provider
            // @ts-ignore
            value={cursesProviderValue}
        >
            {children}
        </CursesContext.Provider>
    );
};
