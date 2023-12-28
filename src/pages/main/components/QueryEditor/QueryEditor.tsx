import { QueryParamsEditor } from '../../../../components/QueryParamsEditor/QueryParamsEditor';
import { addQuery } from '../../../../redux/features/queryRequest/queryRequestSlice';
import styles from './QueryEditor.module.scss';

export function QueryEditor() {
  return (
    <div className={styles.queryEditor}>
      <QueryParamsEditor setData={addQuery} />
    </div>
  );
}
