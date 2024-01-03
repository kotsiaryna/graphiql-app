import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import { QueryEditor } from '../QueryEditor/QueryEditor';
import { selectRequest } from '../../../../redux/features/queryRequest/queryRequestSelector';
import { useAppDispatch } from '../../../../redux/hooks';
import { fetchQuery } from '../../../../redux/features/queryResponse/queryResponseSlice';
import { handlePrettify } from './handlePrettify';
import styles from './QueryEditorWrapper.module.scss';

export function QueryEditorWrapper() {
  const requestParams = useSelector(selectRequest);
  const dispatch = useAppDispatch();
  const [queryEditorValue, setQueryEditorValue] = useState('');

  const handleExecuteClick = async () => {
    dispatch(fetchQuery(requestParams));
  };

  const makePrettify = () => {
    const query = handlePrettify(requestParams.query);
    setQueryEditorValue(query);
  };

  return (
    <div className={styles.queryEditor__wrapper}>
      <div className={styles.toolbar}>
        <Tooltip title="Prettify" placement="right">
          <Button onClick={makePrettify}>
            <AutoFixHighIcon color="primary" />
          </Button>
        </Tooltip>

        <Tooltip title="Execute" placement="right">
          <Button onClick={handleExecuteClick}>
            <PlayCircleOutlineIcon color="primary" sx={{ fontSize: 30 }} />
          </Button>
        </Tooltip>
      </div>
      <QueryEditor initialValue={queryEditorValue} />
    </div>
  );
}
