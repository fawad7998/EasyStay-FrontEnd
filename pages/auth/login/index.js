//sections
import LoginForm from '@sections/auth/login/Form';
import Image from 'next/image';
const LoginPage = () => {
  return (
    <>
      <div className="container">
        <div className="login-wrapper-flex">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
