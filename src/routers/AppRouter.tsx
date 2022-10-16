import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import DashboardRouter from './DashboardRouter';

import { Navbar } from '../components/Navbar';
import { Layout } from '../components/Layout';
import { Footer } from '../components/Footer';

export const AppRouter = () => (
  <Router>
    <Routes>
      <Route
        path="/*"
        element={(
          <>
            <Navbar />
            <Layout>
              <DashboardRouter />
            </Layout>
            <Footer />
          </>
        )}
      />
    </Routes>
  </Router>
);

export default AppRouter;
