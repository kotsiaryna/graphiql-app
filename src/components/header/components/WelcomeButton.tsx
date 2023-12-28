import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Path } from '../../../router/types';
import { LangContext } from '../../../context/langContext';
import { i18n } from '../../../data/localization';

export function WelcomeButton() {
  const { lang } = useContext(LangContext);
  return (
    <Stack spacing={2} direction="row">
      <Tooltip title={i18n[lang].welcome}>
        <Link to={Path.Welcome}>
          <IconButton>
            <WavingHandIcon />
          </IconButton>
        </Link>
      </Tooltip>
    </Stack>
  );
}
