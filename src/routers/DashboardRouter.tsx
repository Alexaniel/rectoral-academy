import {
  Routes,
  Route,
} from 'react-router-dom';

import Home from '../screens/Home';
import Curses from '../screens/Curses';

const DashboardRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/curses" element={<Curses />} />
  </Routes>
);

export default DashboardRouter;
