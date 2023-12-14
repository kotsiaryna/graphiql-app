import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { Path } from '../../../router/types';

export function HomeButton() {
  return (
    <Stack spacing={2} direction="row">
      <Tooltip title="Main">
        <Link to={Path.Main}>
          <IconButton>
            <HomeIcon />
          </IconButton>
        </Link>
      </Tooltip>
    </Stack>
  );
}
