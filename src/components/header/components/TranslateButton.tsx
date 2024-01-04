import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import TranslateIcon from '@mui/icons-material/Translate';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { LangContext } from '../../../context/langContext';
import { l10n } from '../../../data/localization';

export function TranslateButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const enSelected = React.useRef(true);
  const ruSelected = React.useRef(false);

  const { lang, setLang } = React.useContext(LangContext);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage: React.MouseEventHandler<HTMLElement> = (e) => {
    const langValue = e.currentTarget.innerText;
    if (setLang) {
      switch (langValue) {
        case 'EN':
        case 'АНГЛ':
          ruSelected.current = false;
          enSelected.current = true;
          setLang('en');
          break;
        case 'RU':
        case 'РУС':
          ruSelected.current = true;
          enSelected.current = false;
          setLang('ru');
          break;
        default:
          ruSelected.current = false;
          enSelected.current = true;
      }
    }
    handleClose();
  };

  return (
    <div>
      <Stack spacing={2} direction="row">
        <Tooltip title={l10n[lang].translate}>
          <IconButton
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <TranslateIcon />
          </IconButton>
        </Tooltip>
      </Stack>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem selected={enSelected.current} onClick={changeLanguage}>
          {l10n[lang].en}
        </MenuItem>
        <MenuItem selected={ruSelected.current} onClick={changeLanguage}>
          {l10n[lang].ru}
        </MenuItem>
      </Menu>
    </div>
  );
}
