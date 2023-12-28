import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Path } from '../../../router/types';
import { logout } from '../../../firebase';
import { i18n } from '../../../data/localization';
import { LangContext } from '../../../context/langContext';

export function SignOutButton() {
  const { lang } = useContext(LangContext);
  return (
    <Stack spacing={2} direction="row">
      <Tooltip title={i18n[lang].signOut}>
        <Link to={Path.Welcome}>
          <IconButton onClick={logout}>
            <LogoutIcon />
          </IconButton>
        </Link>
      </Tooltip>
    </Stack>
  );
}
