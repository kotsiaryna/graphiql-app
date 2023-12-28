/* eslint-disable react/jsx-props-no-spreading */
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { ValidSignInData } from '../../types/types';
import { auth, logInWithEmailAndPassword } from '../../firebase';
import { Path } from '../../router/types';
import styles from './SignIn.module.scss';
import { userCredentialsSchemaSignIn } from '../../utils/userCredentialsSchema';
import { LangContext } from '../../context/langContext';
import { i18n } from '../../data/localization';

export function SignIn() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isLoading },
  } = useForm<ValidSignInData>({
    mode: 'onTouched',
    resolver: yupResolver(userCredentialsSchemaSignIn),
  });

  const togglePasswordVisibility = (): void => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit: SubmitHandler<ValidSignInData> = ({ email, password }) => {
    logInWithEmailAndPassword(email, password)
      .then(() => setIsLoginError(false))
      .catch(() => setIsLoginError(true));
    if (user) navigate(Path.Main);
  };

  const { lang } = useContext(LangContext);

  return (
    <section className={styles.sign_up_section}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
        {isLoginError && (
          <p className={styles.error_message}>{i18n[lang].loginError}</p>
        )}
        <div className={styles.button_wrapper}>
          <Button
            type="submit"
            variant="contained"
            disabled={!isDirty || !isValid || isLoading}
          >
            {i18n[lang].login}
          </Button>
          <Link to={Path.SignUp}>
            <Button>{i18n[lang].regNow}</Button>
          </Link>
        </div>
      </form>
    </section>
  );
}
