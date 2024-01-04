import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Path } from '../../../router/types';
import { l10n } from '../../../data/localization';
import { LangContext } from '../../../context/langContext';

export function HomeButton() {
  const { lang } = useContext(LangContext);
  return (
    <Stack spacing={2} direction="row">
      <Tooltip title={l10n[lang].main}>
        <Link to={Path.Main}>
          <IconButton>
            <HomeIcon />
          </IconButton>
        </Link>
      </Tooltip>
    </Stack>
  );
}
