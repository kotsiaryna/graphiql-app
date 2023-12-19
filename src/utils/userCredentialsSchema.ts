import * as Yup from 'yup';

const userCredentialsSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required field')
    .email('Invalid email address'),
  password: Yup.string()
    .required('Password is required field')
    .min(8, 'Password must contain at least 8 symbols')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=])/,
      'Password must contain at least one number, one uppercase letter, one lowercase letter, and one special character(!@#$%^&+=)'
    ),
});

export { userCredentialsSchema };
