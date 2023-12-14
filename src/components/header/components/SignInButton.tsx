import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { Path } from '../../../router/types';

export function SingnInButton() {
  return (
    <Stack spacing={2} direction="row">
      <Tooltip title="Sign In">
        <Link to={Path.SignIn}>
          <IconButton>
            <LoginIcon />
          </IconButton>
        </Link>
      </Tooltip>
    </Stack>
  );
}
