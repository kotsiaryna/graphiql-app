import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { QueryEditor } from '../QueryEditor/QueryEditor';
import { selectRequest } from '../../../../redux/features/queryRequest/queryRequestSelector';
import { useAppDispatch } from '../../../../redux/hooks';
import { fetchQuery } from '../../../../redux/features/queryResponse/queryResponseSlice';
import styles from './QueryEditorWrapper.module.scss';
import { CustomTooltip } from '../../../../utils/customTooltip';

export function QueryEditorWrapper() {
  const requestParams = useSelector(selectRequest);
  const dispatch = useAppDispatch();

  const handleExecuteClick = async () => {
    dispatch(fetchQuery(requestParams));
  };

  return (
    <div className={styles.queryEditor__wrapper}>
      <div className={styles.toolbar}>
        <CustomTooltip title="Prettify" placement="right">
          <Button>
            <AutoFixHighIcon color="primary" />
          </Button>
        </CustomTooltip>

        <CustomTooltip title="Execute" placement="right">
          <Button onClick={handleExecuteClick}>
            <PlayCircleOutlineIcon color="primary" sx={{ fontSize: 30 }} />
          </Button>
        </CustomTooltip>
      </div>
      <QueryEditor />
    </div>
  );
}
