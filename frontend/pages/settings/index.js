import verifyToken from '../../getInitialProps/verifyToken';

import ProtectedLayout from '../../components/ProtectedLayout/';
import Settings from '../../components/Settings/';

const SettingsPage = () => (
  <ProtectedLayout title="Settings">
    <Settings />
  </ProtectedLayout>
);

SettingsPage.getInitialProps = function (ctx) {
  verifyToken(ctx);
};

export default SettingsPage;
