import styles from './queryEditor.module.scss';

export function QueryEditor() {
  return (
    <div className={styles.queryEditor}>
      Type your query here. CodeMirror is waiting for us
    </div>
  );
}
