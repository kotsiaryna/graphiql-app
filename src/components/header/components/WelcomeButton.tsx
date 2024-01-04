import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Path } from '../../../router/types';
import { CustomTooltip } from '../../customComponents/customTooltip';
import { LangContext } from '../../../context/langContext';
import { l10n } from '../../../data/localization';

export function WelcomeButton() {
  const { lang } = useContext(LangContext);
  return (
    <Stack spacing={2} direction="row">
      <CustomTooltip title={l10n[lang].welcome}>
        <Link to={Path.Welcome}>
          <IconButton>
            <WavingHandIcon />
          </IconButton>
        </Link>
      </CustomTooltip>
    </Stack>
  );
}
