import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { Unstable_Popup as Popup } from '@mui/base/Unstable_Popup';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './ErrorPopUp.module.scss';
import { selectApiError } from '../../../../redux/features/apiError/apiErrorSelector';

export function ErrorPopUp() {
  const { isApiError } = useSelector(selectApiError);
  const [open, setOpen] = useState(isApiError);

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Popup open={open} disablePortal>
        <p className={styles.popup}>Network error</p>
      </Popup>
    </ClickAwayListener>
  );
}
