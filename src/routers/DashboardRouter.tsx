import {
    Routes,
    Route,
} from 'react-router-dom';

import Home from '../screens/Home';
import Curses from '../screens/Curses';
import CurseDetail from '../components/Curses/CurseDetail';

const DashboardRouter = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curses" element={<Curses />} />
        <Route path="/curses/:id" element={<CurseDetail />} />
    </Routes>
);

export default DashboardRouter;
