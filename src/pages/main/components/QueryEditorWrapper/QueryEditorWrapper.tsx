import { useDispatch, useSelector } from 'react-redux';
import { getQuery } from '../../../../api/getQuery';
import { QueryEditor } from '../QueryEditor/QueryEditor';
import styles from './QueryEditorWrapper.module.scss';
import { selectRequest } from '../../../../redux/features/queryRequest/queryRequestSelector';
import { setError } from '../../../../redux/features/apiError/apiError';
import { saveResponse } from '../../../../redux/features/queryResponse/queryResponseSlice';

export function QueryEditorWrapper() {
  const requestParams = useSelector(selectRequest);
  const dispatch = useDispatch();

  const handleExecuteClick = async () => {
    const response = await getQuery(requestParams);
    if (typeof response === 'string') {
      dispatch(setError(response));
    } else {
      dispatch(saveResponse(response));
    }
  };
  return (
    <div className={styles.queryEditor__wrapper}>
      <div className={styles.toolbar}>
        <button className={styles.toolbar__button} type="button">
          Prettify
        </button>
        <button
          className={styles.toolbar__button}
          type="button"
          onClick={handleExecuteClick}
        >
          Execute
        </button>
      </div>
      <QueryEditor />
    </div>
  );
}
