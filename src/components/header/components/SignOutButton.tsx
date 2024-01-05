import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Path } from '../../../router/types';
import { logout } from '../../../firebase';
import { CustomTooltip } from '../../customComponents/customTooltip';
import { l10n } from '../../../data/localization';
import { LangContext } from '../../../context/langContext';

export function SignOutButton() {
  const { lang } = useContext(LangContext);
  return (
    <Stack spacing={2} direction="row">
      <CustomTooltip title={l10n[lang].signOut}>
        <Link to={Path.Welcome}>
          <IconButton onClick={logout}>
            <LogoutIcon />
          </IconButton>
        </Link>
      </CustomTooltip>
    </Stack>
  );
}
