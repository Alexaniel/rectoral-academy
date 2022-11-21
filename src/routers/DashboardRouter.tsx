import {
    Routes,
    Route,
} from 'react-router-dom';

import Home from '../screens/Home';
import Target from '../screens/Target';
import Curses from '../screens/Curses';
import Partners from '../screens/Partners';
import CurseDetail from '../components/Curses/CurseDetail';

const DashboardRouter = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/target" element={<Target />} />
        <Route path="/curses" element={<Curses />} />
        <Route path="/curses/:id" element={<CurseDetail />} />
        <Route path="/partners" element={<Partners />} />
    </Routes>
);

export default DashboardRouter;
