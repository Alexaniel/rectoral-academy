import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Purpose from '../screens/Purpose';
import Sense from '../screens/Sense';
import Training from '../screens/Training';
import Target from '../screens/Target';

import DashboardRouter from './DashboardRouter';

import { Layout } from '../components/Layout';

export const AppRouter = () => (
  <Router>
    <Routes>
      <Route
        path="/purpose"
        element={(
          <Layout>
            <Purpose />
          </Layout>
        )}
      />
      <Route
        path="/sense-180"
        element={(
          <Layout>
            <Sense />
          </Layout>
        )}
      />
      <Route
        path="/training-gap"
        element={(
          <Layout>
            <Training />
          </Layout>
        )}
      />
      <Route
        path="/target"
        element={(
          <Layout>
            <Target />
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
