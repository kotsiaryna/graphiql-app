import { useSelector } from 'react-redux';
import styles from './DocExplorer.module.scss';
import { selectSchemaResponse } from '../../../../redux/features/schema/schemaSelector';

export function DocExplorer() {
  const { data } = useSelector(selectSchemaResponse); // todo parse data;
  return (
    <>
      {data && (
        <section className={styles.doc}>
          <h3 className={styles.doc__heading}>Docs</h3>

          <div className={styles.doc__data}>{JSON.stringify(data)}</div>
        </section>
      )}
      <p />
    </>
  );
}
