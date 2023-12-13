import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { Path } from '../../../router/types';

export function WelcomeButton() {
  return (
    <Stack spacing={2} direction="row">
      <Tooltip title="Welcome">
        <Link to={Path.Welcome}>
          <IconButton>
            <WavingHandIcon />
          </IconButton>
        </Link>
      </Tooltip>
    </Stack>
  );
}
