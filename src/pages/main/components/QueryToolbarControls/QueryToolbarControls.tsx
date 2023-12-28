import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';
import { useContext } from 'react';
import { QueryToolbarControlsProps } from './types';
import styles from './QueryToolbarControls.module.scss';
import { LangContext } from '../../../../context/langContext';
import { i18n } from '../../../../data/localization';

export function QueryToolbarControls({
  activeEditor,
  setActiveEditor,
  changeEditorVisibility,
  isShowEditor,
}: QueryToolbarControlsProps) {
  const { lang } = useContext(LangContext);
  return (
    <div className={styles.queryToolbarControls}>
      <div className={styles.queryToolbarControls__editorButtons}>
        <button
          className={
            activeEditor === 'Variables'
              ? styles.queryToolbarControls__activeButton
              : styles.queryToolbarControls__button
          }
          type="button"
          onClick={() => setActiveEditor('Variables')}
        >
          {i18n[lang].vars}
        </button>
        <button
          className={
            activeEditor === 'Headers'
              ? styles.queryToolbarControls__activeButton
              : styles.queryToolbarControls__button
          }
          type="button"
          onClick={() => setActiveEditor('Headers')}
        >
          {i18n[lang].headers}
        </button>
      </div>

      <IconButton disableRipple edge="end" onClick={changeEditorVisibility}>
        {isShowEditor ? (
          <KeyboardArrowDownIcon fontSize="medium" />
        ) : (
          <KeyboardArrowUpIcon fontSize="medium" />
        )}
      </IconButton>
    </div>
  );
}
