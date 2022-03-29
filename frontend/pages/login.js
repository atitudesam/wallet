import verifyToken from '../getInitialProps/verifyToken';
import Login from '../components/Login';
import Head from '../components/Layout/Head';

const LoginPage = () => {
  return (
    <>
      <Head title="Sign In" />
      <div className="has-text-centered">
        <Login />
      </div>
    </>
  );
};

LoginPage.getInitialProps = function (ctx) {
  verifyToken(ctx);
};

export default LoginPage;
