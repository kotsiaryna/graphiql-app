import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';
import { useContext } from 'react';
import { QueryToolbarControlsProps } from './types';
import styles from './QueryToolbarControls.module.scss';
import { LangContext } from '../../../../context/langContext';
import { l10n } from '../../../../data/localization';

export function QueryToolbarControls({
  activeEditor,
  setActiveEditor,
  changeEditorVisibility,
  isShowEditor,
}: QueryToolbarControlsProps) {
  const { lang } = useContext(LangContext);
  return (
    <div className={styles.queryToolbarControls}>
      <div className={styles.editorButtons}>
        <button
          className={
            activeEditor === 'Variables' ? styles.activeButton : styles.button
          }
          type="button"
          onClick={() => setActiveEditor('Variables')}
        >
          {l10n[lang].vars}
        </button>
        <button
          className={
            activeEditor === 'Headers' ? styles.activeButton : styles.button
          }
          type="button"
          onClick={() => setActiveEditor('Headers')}
        >
          {l10n[lang].headers}
        </button>
      </div>

      <IconButton disableRipple edge="end" onClick={changeEditorVisibility}>
        {isShowEditor ? (
          <KeyboardArrowDownIcon fontSize="medium" color="primary" />
        ) : (
          <KeyboardArrowUpIcon fontSize="medium" color="primary" />
        )}
      </IconButton>
    </div>
  );
}
