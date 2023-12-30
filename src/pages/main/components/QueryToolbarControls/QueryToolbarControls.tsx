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
          Variables
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
          Headers
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
