import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import { Path } from '../../../router/types';
import { CustomTooltip } from '../../customComponents/customTooltip';

export function SingnUpButton() {
  return (
    <Stack spacing={2} direction="row">
      <CustomTooltip title="Sign Up">
        <Link to={Path.SignUp}>
          <IconButton>
            <PersonIcon />
          </IconButton>
        </Link>
      </CustomTooltip>
    </Stack>
  );
}
