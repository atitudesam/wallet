import verifyToken from '../getInitialProps/verifyToken';
import Register from '../components/Register';
import Head from '../components/Layout/Head';

const RegisterPage = () => {
  return (
    <>
      <Head title="Register" />
      <div className="has-text-centered">
        <Register />
      </div>
    </>
  );
};

RegisterPage.getInitialProps = function (ctx) {
  verifyToken(ctx);
};

export default RegisterPage;

