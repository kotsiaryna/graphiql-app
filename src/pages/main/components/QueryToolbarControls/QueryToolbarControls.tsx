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
      <button
        className={styles.queryToolbarControls__button}
        type="button"
        onClick={changeEditorVisibility}
      >
        {isShowEditor ? 'Hide editor' : 'Show editor'}
      </button>
    </div>
  );
}
