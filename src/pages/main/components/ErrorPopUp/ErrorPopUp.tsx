import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { Unstable_Popup as Popup } from '@mui/base/Unstable_Popup';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ErrorPopUp.module.scss';
import { selectApiError } from '../../../../redux/features/apiError/apiErrorSelector';
import { deleteError } from '../../../../redux/features/apiError/apiError';

export function ErrorPopUp() {
  const { isApiError, errorMessage } = useSelector(selectApiError);

  const dispatch = useDispatch();

  const handleClickAway = () => {
    dispatch(deleteError());
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Popup open={isApiError} disablePortal>
        <div className={styles.popup}>{errorMessage}</div>
      </Popup>
    </ClickAwayListener>
  );
}
