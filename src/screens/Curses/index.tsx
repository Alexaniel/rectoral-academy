import { useTranslation } from 'react-i18next';
import { BackButton } from '../../widgets/BackButton';
import { Header } from '../../widgets/Header';
import { ListCurses, Search } from './components';
import { CursesProvider } from './context/cursesContext';

const Curses = () => {
    const { t } = useTranslation('curses', { keyPrefix: 'CURSES' });

    return (
        <CursesProvider>
            <BackButton path="/" />
            <Header text={t('HEADER')} />
            <Search />
            <ListCurses />
        </CursesProvider>
    );
};

export default Curses;
