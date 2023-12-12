import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { Path } from '../../../router/types';

export function SignOutButton() {
  return (
    <Stack spacing={2} direction="row">
      <Link to={Path.Welcome}>
        <IconButton>
          <LogoutIcon />
        </IconButton>
      </Link>
    </Stack>
  );
}
