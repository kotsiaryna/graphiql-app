import * as Yup from 'yup';

const nameValidation = Yup.string()
  .required('Name is required field')
  .matches(
    /^[A-Z][a-z]*$/,
    'Name must start with an uppercase letter and only contain letters'
  )
  .min(4, 'Name must contain at least 4 letters');

const emailValidation = Yup.string()
  .required('Email is required field')
  .email('Invalid email address');

const passwordValidation = Yup.string()
  .required('Password is required field')
  .min(8, 'Password must contain at least 8 symbols')
  .matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=])/,
    'Password must contain at least one number, one uppercase letter, one lowercase letter, and one special character(!@#$%^&+=)'
  );

const userCredentialsSchemaSignUp = Yup.object().shape({
  name: nameValidation,
  email: emailValidation,
  password: passwordValidation,
});

const userCredentialsSchemaSignIn = Yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
});

export { userCredentialsSchemaSignUp, userCredentialsSchemaSignIn };
