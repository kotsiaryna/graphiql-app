import styles from './Viewer.module.scss';

export function Viewer() {
  const response = 'Here will be response from server'; // todo get and parse response from API
  return (
    <div className={styles.viewer}>
      <h3>Response Viewer</h3>
      <div>{response}</div>
    </div>
  );
}
