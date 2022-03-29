import verifyToken from '../getInitialProps/verifyToken';

import ProtectedLayout from '../components/ProtectedLayout/';
import Dashboard from '../components/Dashboard/';

const DashboardPage = () => (
  <ProtectedLayout title="Dashboard">
    <Dashboard />
  </ProtectedLayout>
);

DashboardPage.getInitialProps = function (ctx) {
  verifyToken(ctx);
};

export default DashboardPage;
