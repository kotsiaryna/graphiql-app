import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './InputEndpoint.module.scss';
import { getSchema } from '../../../../api/getSchema';
import { setError } from '../../../../redux/features/apiError/apiError';
import {
  deleteSchema,
  saveSchema,
} from '../../../../redux/features/schema/schemaSlice';
import { addUrl } from '../../../../redux/features/queryRequest/queryRequestSlice';

export function InputApi() {
  const [value, setValue] = useState('');
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };
  const dispatch = useDispatch();

  const handleClick = async () => {
    const result = await getSchema(value);
    if (typeof result === 'string') {
      dispatch(setError(result));
      dispatch(deleteSchema());
    } else {
      dispatch(saveSchema(result));
      dispatch(addUrl(value));
    }
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
