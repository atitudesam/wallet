import Head from './Head/';
import Navbar from './Navbar';

const ProtectedLayout = ({ children, title }) => {
  return (
    <div>
      <Head title={title} />
      {/* <Navbar /> */}
      <Navbar>
          <main>
            {children}
          </main>
      </Navbar>
    </div>
  );
};

export default ProtectedLayout;
