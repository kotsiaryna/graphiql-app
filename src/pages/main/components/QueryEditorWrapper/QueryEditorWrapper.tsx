import { QueryEditor } from '../QueryEditor/QueryEditor';
import styles from './QueryEditorWrapper.module.scss';

export function QueryEditorWrapper() {
  return (
    <div className={styles.queryEditor__wrapper}>
      <div className={styles.toolbar}>
        <button className={styles.toolbar__button} type="button">
          Prettify
        </button>
        <button className={styles.toolbar__button} type="button">
          Execute
        </button>
      </div>
      <QueryEditor />
    </div>
  );
}
