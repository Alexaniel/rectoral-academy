import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Curses from '../screens/Curses';
import DashboardRouter from './DashboardRouter';

import { Layout } from '../components/Layout';
import { Footer } from '../components/Footer';

export const AppRouter = () => (
  <Router>
    <Routes>
      <Route
        path="/curses"
        element={(
          <Layout>
            <Curses />
          </Layout>
        )}
      />
      <Route
        path="/*"
        element={(
          <Layout>
            <DashboardRouter />
          </Layout>
        )}
      />
    </Routes>
  </Router>
);

export default AppRouter;
