import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Path } from '../../../router/types';
import { CustomTooltip } from '../../customComponents/customTooltip';
import { l10n } from '../../../data/localization';
import { LangContext } from '../../../context/langContext';

export function HomeButton() {
  const { lang } = useContext(LangContext);
  return (
    <Stack spacing={2} direction="row">
      <CustomTooltip title={l10n[lang].main}>
        <Link to={Path.Main}>
          <IconButton>
            <HomeIcon />
          </IconButton>
        </Link>
      </CustomTooltip>
    </Stack>
  );
}
