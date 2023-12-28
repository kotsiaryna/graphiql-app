/* eslint-disable react/jsx-props-no-spreading */
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import styles from './SignUp.module.scss';
import { Path } from '../../router/types';
import { auth, registerWithEmailAndPassword } from '../../firebase';
import { ValidSignUpData } from '../../types/types';
import { userCredentialsSchemaSignUp } from '../../utils/userCredentialsSchema';
import { LangContext } from '../../context/langContext';
import { i18n } from '../../data/localization';

export function SignUp() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isLoading },
  } = useForm<ValidSignUpData>({
    mode: 'onTouched',
    resolver: yupResolver(userCredentialsSchemaSignUp),
  });

  const togglePasswordVisibility = (): void => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit: SubmitHandler<ValidSignUpData> = ({
    name,
    email,
    password,
  }) => {
    registerWithEmailAndPassword(name, email, password)
      .then(() => setIsEmailError(false))
      .catch(() => setIsEmailError(true));
    if (user) navigate(Path.Main);
  };
  const { lang } = useContext(LangContext);

  return (
    <section className={styles.sign_up_section}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('name')}
          id="nameForm"
          label={i18n[lang].name}
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
          label={i18n[lang].email}
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
          label={i18n[lang].password}
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
        {isEmailError && (
          <p className={styles.error_message}>{i18n[lang].regError}</p>
        )}
        <div className={styles.button_wrapper}>
          <Button
            type="submit"
            variant="contained"
            disabled={!isDirty || !isValid || isLoading}
          >
            {i18n[lang].reg}
          </Button>
          <Link to={Path.SignIn}>
            <Button>{i18n[lang].logNow}</Button>
          </Link>
        </div>
      </form>
    </section>
  );
}
