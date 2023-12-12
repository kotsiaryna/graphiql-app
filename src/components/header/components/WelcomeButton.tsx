import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { Link } from 'react-router-dom';
import { Path } from '../../../router/types';

export function WelcomeButton() {
  return (
    <Stack spacing={2} direction="row">
      <Link to={Path.Welcome}>
        <IconButton>
          <WavingHandIcon />
        </IconButton>
      </Link>
    </Stack>
  );
}
