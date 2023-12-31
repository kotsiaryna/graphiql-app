import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { Unstable_Popup as Popup } from '@mui/base/Unstable_Popup';
import { useSelector } from 'react-redux';
import { selectSchemaResponse } from '../../../../redux/features/schema/schemaSelector';
import { selectQueryResponse } from '../../../../redux/features/queryResponse/queryResponseSelector';
import { deleteResponseError } from '../../../../redux/features/queryResponse/queryResponseSlice';
import { deleteSchemaError } from '../../../../redux/features/schema/schemaSlice';
import { useAppDispatch } from '../../../../redux/hooks';
import styles from './ErrorPopUp.module.scss';

export function ErrorPopUp() {
  const dispatch = useAppDispatch();

  const { errorMessage: schemaError } = useSelector(selectSchemaResponse);
  const { errorMessage: queryError } = useSelector(selectQueryResponse);

  const handleClickAway = () => {
    dispatch(deleteResponseError());
    dispatch(deleteSchemaError());
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway} mouseEvent="onMouseDown">
      <Popup open={!!(schemaError || queryError)} disablePortal>
        {schemaError && (
          <p
            className={styles.popup}
          >{`Failed to fetch schema: ${schemaError}`}</p>
        )}
        {queryError && (
          <p
            className={styles.popup}
          >{`Failed to fetch query: ${queryError}`}</p>
        )}
      </Popup>
    </ClickAwayListener>
  );
}
