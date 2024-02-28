import { useSelector } from 'react-redux';
import styles from './DocExplorer.module.scss';
import { selectSchemaResponse } from '../../../../redux/features/schema/schemaSelector';

export function DocExplorer() {
  const { data } = useSelector(selectSchemaResponse);

  return (
    data && (
      <section className={styles.doc}>
        <h3 className={styles.heading}>Docs</h3>
        <ul className={styles.data}>
          {data.types.map((type) => {
            return (
              <li key={type.name}>
                <span className={styles.name}>{type.name}</span>
                <span>{`: ${type.kind}`}</span>
              </li>
            );
          })}
        </ul>
      </section>
    )
  );
}
