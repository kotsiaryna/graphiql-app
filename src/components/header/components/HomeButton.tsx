import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { Path } from '../../../router/types';
import { CustomTooltip } from '../../customComponents/customTooltip';

export function HomeButton() {
  return (
    <Stack spacing={2} direction="row">
      <CustomTooltip title="Main">
        <Link to={Path.Main}>
          <IconButton>
            <HomeIcon />
          </IconButton>
        </Link>
      </CustomTooltip>
    </Stack>
  );
}
