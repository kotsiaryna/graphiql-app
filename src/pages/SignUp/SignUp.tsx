/* eslint-disable react/jsx-props-no-spreading */
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IconButton, InputAdornment } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import styles from './SignUp.module.scss';
import { Path } from '../../router/types';
import { registerWithEmailAndPassword } from '../../firebase';
import { ValidSignUpData } from '../../types/types';
import { userCredentialsSchemaSignUp } from '../../utils/userCredentialsSchema';
import { CustomTextField } from '../../components/customComponents/customTextField';
import { LangContext } from '../../context/langContext';
import { l10n } from '../../data/localization';

export function SignUp() {
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
      .then(() => navigate(Path.Main))
      .catch(() => setIsEmailError(true));
  };
  const { lang } = useContext(LangContext);

  return (
    <section className={styles.sign_up_section}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <CustomTextField
          {...register('name')}
          id="nameForm"
          label={l10n[lang].name}
          name="name"
          error={!!errors.name?.message}
          helperText={errors && errors.name?.message}
          autoComplete="name"
          variant="outlined"
          margin="none"
          fullWidth
        />
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
        {isEmailError && (
          <p className={styles.error_message}>{l10n[lang].regError}</p>
        )}
        <div className={styles.button_wrapper}>
          <button
            type="submit"
            className={styles.button}
            disabled={!isDirty || !isValid || isLoading}
          >
            {l10n[lang].reg}
          </button>
          <Link to={Path.SignIn} className={styles.link}>
            {l10n[lang].logNow}
          </Link>
        </div>
      </form>
    </section>
  );
}
