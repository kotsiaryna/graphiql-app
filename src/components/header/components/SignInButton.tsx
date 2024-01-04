import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Path } from '../../../router/types';
import { CustomTooltip } from '../../customComponents/customTooltip';
import { LangContext } from '../../../context/langContext';
import { l10n } from '../../../data/localization';


export function SignInButton() {
  const { lang } = useContext(LangContext);
  return (
    <Stack spacing={2} direction="row">
      <CustomTooltip title={l10n[lang].signIn}>
        <Link to={Path.SignIn}>
          <IconButton>
            <LoginIcon />
          </IconButton>
        </Link>
      </CustomTooltip>
    </Stack>
  );
}
