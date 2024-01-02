import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Path } from '../../../router/types';
import { LangContext } from '../../../context/langContext';
import { l10n } from '../../../data/localization';

export function SignUpButton() {
  const { lang } = useContext(LangContext);
  return (
    <Stack spacing={2} direction="row">
      <Tooltip title={l10n[lang].signUp}>
        <Link to={Path.SignUp}>
          <IconButton>
            <PersonIcon />
          </IconButton>
        </Link>
      </Tooltip>
    </Stack>
  );
}
