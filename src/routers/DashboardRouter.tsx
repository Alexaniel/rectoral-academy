import {
  Routes,
  Route,
} from 'react-router-dom';

import Home from '../screens/Home';

const DashboardRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);

export default DashboardRouter;
