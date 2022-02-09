import LoginForm from './LoginForm';

const Login = () => (
  <>
  <div className="h-screen">
      <div className="min-h-full m-auto flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 shadow rounded-lg">
          <div>
            <p className="text-center text-sm">Welcome back. Please login to your account.</p>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign In</h2>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
    {/* <h3 className="title is-3">Login</h3>
    <LoginForm /> */}
  </>
);

export default Login;
