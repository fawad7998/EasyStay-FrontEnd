import Image from 'next/image';
import {useRouter} from 'next/router';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {registerUser} from 'src/redux/slices/user';
import {useDispatch, useSelector} from 'react-redux';
const RegisterForm = ({isAdmin}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const RegisterSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().min(8).max(20).required('Password is required'),
    phoneNumber: Yup.string()
      .required('Phone number is required')
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(11, 'Phone number must be exactly 11 digits')
      .max(11, 'Phone number must be exactly 11 digits'),
  });

  const RegisterAdminSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().min(8).max(20).required('Password is required'),
    phoneNumber: Yup.string()
      .required('Phone number is required')
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(11, 'Phone number must be exactly 11 digits')
      .max(11, 'Phone number must be exactly 11 digits'),
    city: Yup.string().required('City is required'),
    organizationName: Yup.string().required('Organization name is required'),
  });

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(!isAdmin ? RegisterSchema : RegisterAdminSchema),
  });

  const onSubmit = async (data) => {
    try {
      data.isAdmin = isAdmin ? true : false;
      await dispatch(registerUser(data));
      router.push('/dashboard/offerings');
    } catch (error) {
      console.log('Error Registering User');
    }
  };
  return (
    <>
      <div className="login-wrapper-contents login-padding section-bg-2">
        <h2 className="single-title">Welcome!</h2>
        <p className="sigle-para mt-2">Register to Continue</p>
        <form
          className="login-wrapper-contents-form custom-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="single-input mt-2">
            <label className="label-title mb-2">
              {' '}
              {isAdmin ? 'Your Name' : 'Name'}{' '}
            </label>
            <input
              {...register('name')}
              className="form--control"
              type="text"
              placeholder="Enter Your Name"
            />
            <p className="form-field-error">{errors?.name?.message}</p>
          </div>
          <div
            className="single-input mt-2"
            style={{display: isAdmin ? '' : 'none'}}
          >
            <label className="label-title mb-2"> Organization Name </label>
            <input
              className="form--control"
              type="text"
              placeholder="Enter Your Organization Name"
              {...register('organizationName')}
            />
            <p className="form-field-error">
              {errors?.organizationName?.message}
            </p>
          </div>
          <div className="single-input mt-2">
            <label className="label-title mb-2">
              {' '}
              {isAdmin ? 'Organization Email' : 'Your Email'}{' '}
            </label>
            <input
              {...register('email')}
              className="form--control"
              type="text"
              placeholder="Enter Your Email"
            />
            <p className="form-field-error">{errors?.email?.message}</p>
          </div>
          <div className="single-input mt-2">
            <label className="label-title mb-2"> Phone No. </label>
            <input
              className="form--control"
              type="text"
              placeholder="Enter Your Number"
              {...register('phoneNumber')}
            />
            <p className="form-field-error">{errors?.phoneNumber?.message}</p>
          </div>
          <div
            className="single-input mt-2"
            style={{display: isAdmin ? '' : 'none'}}
          >
            <label className="label-title mb-2"> City </label>
            <input
              className="form--control"
              type="text"
              placeholder="Enter Your City"
              {...register('city')}
            />
            <p className="form-field-error">{errors?.city?.message}</p>
          </div>

          <div className="single-input mt-2">
            <label className="label-title mb-2"> Password </label>
            <input
              className="form--control"
              type="password"
              placeholder="Enter Your Password"
              {...register('password')}
            />
            <p className="form-field-error">{errors?.password?.message}</p>
          </div>

          <button className="submit-btn w-100 mt-2" type="submit">
            Sign Up Now
          </button>
          <span
            style={{display: isAdmin ? 'none' : ''}}
            className="account color-light mt-3"
          >
            Already have an account?
            <a
              className="color-one"
              style={{cursor: 'pointer'}}
              onClick={() => router.push('/auth/login')}
            >
              {' '}
              Sign In Now{' '}
            </a>
          </span>
        </form>
        <div
          className="single-checkbox mt-3"
          style={{display: isAdmin ? 'none' : ''}}
        >
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
        <div
          className="login-bottom-contents"
          style={{display: isAdmin ? 'none' : ''}}
        >
          <div className="or-contents mb-2">
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

export default RegisterForm;
