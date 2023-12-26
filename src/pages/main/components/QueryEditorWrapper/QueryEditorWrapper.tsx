import { useSelector } from 'react-redux';
import { QueryEditor } from '../QueryEditor/QueryEditor';
import { selectRequest } from '../../../../redux/features/queryRequest/queryRequestSelector';
import { useAppDispatch } from '../../../../redux/hooks';
import { fetchQuery } from '../../../../redux/features/queryResponse/queryResponseSlice';
import styles from './QueryEditorWrapper.module.scss';

export function QueryEditorWrapper() {
  const requestParams = useSelector(selectRequest);
  const dispatch = useAppDispatch();

  const handleExecuteClick = async () => {
    dispatch(fetchQuery(requestParams));
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
