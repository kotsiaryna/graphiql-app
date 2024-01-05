import { QueryParamsEditor } from '../../../../components/QueryParamsEditor/QueryParamsEditor';
import { addQuery } from '../../../../redux/features/queryRequest/queryRequestSlice';
import { QueryEditorProps } from './types';
import styles from './QueryEditor.module.scss';

export function QueryEditor({ initialValue }: QueryEditorProps) {
  return (
    <div className={styles.queryEditor}>
      <QueryParamsEditor setData={addQuery} initialValue={initialValue} />
    </div>
  );
}
