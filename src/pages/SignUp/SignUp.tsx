/* eslint-disable react/jsx-props-no-spreading */
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import styles from './SignUp.module.scss';
import { Path } from '../../router/types';
import { auth, registerWithEmailAndPassword } from '../../firebase';
import { ValidSignUpData } from '../../types/types';
import { userCredentialsSchemaSignUp } from '../../utils/userCredentialsSchema';

export function SignUp() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isLoading },
  } = useForm<ValidSignUpData>({
    mode: 'onTouched',
    resolver: yupResolver(userCredentialsSchemaSignUp),
  });

  useEffect(() => {
    if (loading) return;
    if (user) navigate(Path.Main);
  }, [user, loading, navigate]);

  const togglePasswordVisibility = (): void => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit: SubmitHandler<ValidSignUpData> = ({
    name,
    email,
    password,
  }) => {
    registerWithEmailAndPassword(name, email, password);
    if (user) navigate(Path.Main);
  };

  return (
    <section className={styles.sign_up_section}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('name')}
          id="nameForm"
          label="Name"
          name="name"
          error={!!errors.name?.message}
          helperText={errors && errors.name?.message}
          autoComplete="name"
          variant="outlined"
          margin="none"
          fullWidth
        />
        <TextField
          {...register('email')}
          id="emailForm"
          label="Email"
          name="email"
          error={!!errors.email?.message}
          helperText={errors && errors.email?.message}
          autoComplete="email"
          variant="outlined"
          margin="none"
          fullWidth
        />
        <TextField
          {...register('password')}
          id="passwordForm"
          label="Password"
          name="password"
          error={!!errors.password?.message}
          helperText={errors && errors.password?.message}
          autoComplete="password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility}>
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          margin="none"
          fullWidth
        />
        <div className={styles.button_wrapper}>
          <Button
            type="submit"
            variant="contained"
            disabled={!isDirty || !isValid || isLoading}
          >
            Register
          </Button>
          <Link to={Path.SignIn}>
            <Button>Already have an account? Login now</Button>
          </Link>
        </div>
      </form>
    </section>
  );
}
