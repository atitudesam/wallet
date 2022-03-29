import RegisterForm from './RegisterForm';
import ErrorMessage from '../Layout/ErrorMessage';

const Register = () => {
  return (
    <>
    <div className="h-screen">
      <div className="min-h-full m-auto flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 shadow rounded-lg">
        <ErrorMessage />

          <div>
            <p className="text-center text-sm">Join our biggest wallet community today</p>
            <h2 className="mt-3 text-center text-3xl font-extrabold text-gray-900">Create an account</h2>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  </>
  );
};

export default Register;
