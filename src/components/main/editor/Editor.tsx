import { QueryEditorWrapper } from './queryEditor/QueryEditorWrapper';
import { QueryToolbar } from './QueryToolbar';
import { Viewer } from './Viewer';
import styles from './editor.module.scss';

export function Editor() {
  return (
    <div className={styles.editor}>
      <QueryEditorWrapper />
      <QueryToolbar />
      <Viewer />
    </div>
  );
}
