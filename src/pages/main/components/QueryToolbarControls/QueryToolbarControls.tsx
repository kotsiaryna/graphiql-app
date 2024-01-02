import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';
import { QueryToolbarControlsProps } from './types';
import styles from './QueryToolbarControls.module.scss';

export function QueryToolbarControls({
  activeEditor,
  setActiveEditor,
  changeEditorVisibility,
  isShowEditor,
}: QueryToolbarControlsProps) {
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
          Variables
        </button>
        <button
          className={
            activeEditor === 'Headers' ? styles.activeButton : styles.button
          }
          type="button"
          onClick={() => setActiveEditor('Headers')}
        >
          Headers
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
