/* eslint-disable react/jsx-props-no-spreading */
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IconButton, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { ValidSignInData } from '../../types/types';
import { logInWithEmailAndPassword } from '../../firebase';
import { Path } from '../../router/types';
import styles from './SignIn.module.scss';
import { userCredentialsSchemaSignIn } from '../../utils/userCredentialsSchema';
import { CustomTextField } from '../../components/customComponents/customTextField';
import { LangContext } from '../../context/langContext';
import { l10n } from '../../data/localization';

export function SignIn() {
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
      .then(() => navigate(Path.Main))
      .catch(() => setIsLoginError(true));
  };

  const { lang } = useContext(LangContext);

  return (
    <section className={styles.sign_up_section}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <CustomTextField
          {...register('email')}
          id="emailForm"
          label={l10n[lang].email}
          name="email"
          error={!!errors.email?.message}
          helperText={errors && errors.email?.message}
          autoComplete="email"
          variant="outlined"
          margin="none"
          fullWidth
        />
        <CustomTextField
          {...register('password')}
          id="passwordForm"
          label={l10n[lang].password}
          name="password"
          error={!!errors.password?.message}
          helperText={errors && errors.password?.message}
          autoComplete="password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} color="primary">
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
          <p className={styles.error_message}>{l10n[lang].loginError}</p>
        )}
        <div className={styles.button_wrapper}>
          <button
            type="submit"
            className={styles.button}
            disabled={!isDirty || !isValid || isLoading}
          >
            {l10n[lang].login}
          </button>
          <Link className={styles.link} to={Path.SignUp}>
            {l10n[lang].regNow}
          </Link>
        </div>
      </form>
    </section>
  );
}
