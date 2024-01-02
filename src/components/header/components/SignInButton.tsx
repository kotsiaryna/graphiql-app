import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
import { Path } from '../../../router/types';
import { CustomTooltip } from '../../customComponents/customTooltip';

export function SingnInButton() {
  return (
    <Stack spacing={2} direction="row">
      <CustomTooltip title="Sign In">
        <Link to={Path.SignIn}>
          <IconButton>
            <LoginIcon />
          </IconButton>
        </Link>
      </CustomTooltip>
    </Stack>
  );
}
