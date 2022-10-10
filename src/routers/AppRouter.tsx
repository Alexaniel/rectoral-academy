import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Onboarding from '../screens/Onboarding';

import DashboardRouter from './DashboardRouter';

import { Layout } from '../components/Layout';

export const AppRouter = () => (
  <Router>
    <Routes>
      <Route
        path="/login"
        element={(
          <Login />
        )}
      />
      <Route
        path="/signup"
        element={(
          <Signup />
        )}
      />
      <Route
        path="/onboarding"
        element={(
          <Navigate to="/onboarding/create-account" />
        )}
      />
      <Route
        path="/onboarding/*"
        element={(
          <Onboarding />
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
