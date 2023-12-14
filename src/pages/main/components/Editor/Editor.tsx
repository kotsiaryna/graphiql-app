import { QueryEditorWrapper } from '../QueryEditorWrapper/QueryEditorWrapper';
import { QueryToolbar } from '../QueryToolbar/QueryToolbar';
import { Viewer } from '../Viewer/Viewer';
import styles from './Editor.module.scss';

export function Editor() {
  return (
    <div className={styles.editor}>
      <QueryEditorWrapper />
      <QueryToolbar />
      <Viewer />
    </div>
  );
}
