import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { Path } from '../../../router/types';
import { logout } from '../../../firebase';
import { CustomTooltip } from '../../customComponents/customTooltip';

export function SignOutButton() {
  return (
    <Stack spacing={2} direction="row">
      <CustomTooltip title="Sign Out">
        <Link to={Path.Welcome}>
          <IconButton onClick={logout}>
            <LogoutIcon />
          </IconButton>
        </Link>
      </CustomTooltip>
    </Stack>
  );
}
