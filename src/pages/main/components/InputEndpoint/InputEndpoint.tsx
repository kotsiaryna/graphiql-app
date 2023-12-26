import { useState } from 'react';
import {
  deleteSchema,
  fetchSchema,
} from '../../../../redux/features/schema/schemaSlice';
import { addUrl } from '../../../../redux/features/queryRequest/queryRequestSlice';
import { deleteResponse } from '../../../../redux/features/queryResponse/queryResponseSlice';
import { useAppDispatch } from '../../../../redux/hooks';
import styles from './InputEndpoint.module.scss';

export function InputApi() {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
    dispatch(addUrl(e.target.value));
  };

  const handleClick = async () => {
    dispatch(deleteResponse());
    dispatch(deleteSchema());
    dispatch(fetchSchema(value));
  };

  return (
    <section className={styles.endpoint}>
      <input
        className={styles.endpoint__input}
        value={value}
        placeholder="Type graphQL endpoint here..."
        onChange={handleChange}
      />
      <button
        className={styles.endpoint__button}
        type="button"
        onClick={handleClick}
      >
        GO!
      </button>
    </section>
  );
}
