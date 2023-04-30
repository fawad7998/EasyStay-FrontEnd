import Image from 'next/image';
import {useRouter} from 'next/router';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {loginUser} from 'src/redux/slices/user';
import {useDispatch, useSelector} from 'react-redux';
const LoginForm = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const LoginSchema = Yup.object({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().min(8).max(20).required('Password is required'),
  });

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = async (data) => {
    try {
      await dispatch(loginUser(data));
      router.push('/dashboard');
    } catch (error) {
      console.log('Error Signing In User');
    }
  };
  return (
    <>
      <div className="login-wrapper-contents login-padding section-bg-2">
        <h2 className="single-title">Welcome Back!</h2>
        <p className="sigle-para mt-2">Login to Continue</p>
        <form
          className="login-wrapper-contents-form custom-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="single-input mt-4">
            <label className="label-title mb-3"> Email Or User Name </label>
            <input
              {...register('email')}
              className="form--control"
              type="text"
              placeholder="Email Or User Name"
            />
            <p className="form-field-error">{errors?.email?.message}</p>
          </div>
          <div className="single-input mt-4">
            <label className="label-title mb-3"> Password </label>
            <input
              {...register('password')}
              className="form--control"
              type="password"
              placeholder="Type Password"
            />
            <p className="form-field-error">{errors?.password?.message}</p>
          </div>
          <button className="submit-btn w-100 mt-4" type="submit">
            Sign In Now
          </button>
          <span className="account color-light mt-3">
            Don't have an account?
            <a
              className="color-one"
              style={{cursor: 'pointer'}}
              onClick={() => router.push('/auth/register')}
            >
              {' '}
              SignUp Now{' '}
            </a>
          </span>
        </form>
        <div className="single-checkbox mt-3">
          <div className="checkbox-inline">
            <input className="check-input" type="checkbox" id="check15" />
            <label className="checkbox-label" htmlFor="check15">
              Remember Me
            </label>
          </div>
          <div className="forgot-password">
            <a href="forgot_password.html" className="forgot-btn color-one">
              Forgot Password
            </a>
          </div>
        </div>
        <div className="login-bottom-contents">
          <div className="or-contents mb-3">
            <span className="or-contents-para"> Or </span>
          </div>
          <div className="login-others">
            <div className="login-others-single">
              <a
                href="javascript:void(0)"
                className="login-others-single-btn w-100"
              >
                <Image
                  height={20}
                  width={20}
                  src="/img/single-page/google.png"
                  alt=""
                />
                <span className="login-para"> Sign In With Google </span>
              </a>
            </div>
            <div className="login-others-single">
              <a
                href="javascript:void(0)"
                className="login-others-single-btn w-100"
              >
                <Image
                  height={20}
                  width={20}
                  src="/img/single-page/facebook.png"
                  alt=""
                />
                <span className="login-para"> Sign In With facebook </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
