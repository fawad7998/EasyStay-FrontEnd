//sections
import RegisterForm from '@sections/auth/register/Form';

const RegisterPage = () => {
  return (
    <>
      <div className="container">
        <div className="login-wrapper-flex">
          <RegisterForm isAdmin={true} />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
