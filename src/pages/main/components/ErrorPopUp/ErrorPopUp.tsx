import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { Unstable_Popup as Popup } from '@mui/base/Unstable_Popup';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { selectSchemaResponse } from '../../../../redux/features/schema/schemaSelector';
import { selectQueryResponse } from '../../../../redux/features/queryResponse/queryResponseSelector';
import { deleteResponseError } from '../../../../redux/features/queryResponse/queryResponseSlice';
import { deleteSchemaError } from '../../../../redux/features/schema/schemaSlice';
import { useAppDispatch } from '../../../../redux/hooks';
import styles from './ErrorPopUp.module.scss';
import { LangContext } from '../../../../context/langContext';
import { l10n } from '../../../../data/localization';

export function ErrorPopUp() {
  const dispatch = useAppDispatch();

  const { errorMessage: schemaError } = useSelector(selectSchemaResponse);
  const { errorMessage: queryError } = useSelector(selectQueryResponse);

  const handleClickAway = () => {
    dispatch(deleteResponseError());
    dispatch(deleteSchemaError());
  };
  const { lang } = useContext(LangContext);
  return (
    <ClickAwayListener onClickAway={handleClickAway} mouseEvent="onMouseDown">
      <Popup open={!!(schemaError || queryError)} disablePortal>
        {schemaError && (
          <p
            className={styles.popup}
          >{`${l10n[lang].schemaError}: ${schemaError}`}</p>
        )}
        {queryError && (
          <p
            className={styles.popup}
          >{`${l10n[lang].queryError}: ${queryError}`}</p>
        )}
      </Popup>
    </ClickAwayListener>
  );
}
