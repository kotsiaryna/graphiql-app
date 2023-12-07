import { useState } from 'react';
import styles from './inputEndpoint.module.scss';

function InputApi() {
  const [value, setValue] = useState('');
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };
  const handleClick = () => {};

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

export default InputApi;
