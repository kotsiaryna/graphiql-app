import styles from './DocExplorer.module.scss';

export function DocExplorer() {
  const isError = false; // todo receive error state from api response
  const data = 'Here will be GraphQL Schema'; // todo receive data from api response and parse;
  return (
    <section className={styles.doc}>
      <h3 className={styles.doc__heading}>Docs</h3>
      {isError && <p className={styles.doc__error}>Error fetching schema</p>}
      {data && <div className={styles.doc__data}>{data}</div>}
    </section>
  );
}
