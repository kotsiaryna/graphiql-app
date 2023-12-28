import { ErrorMessageProps } from './types';
import styles from './ErrorMessage.module.scss';

export function ErrorMessage({
  redirectName,
  redirectFunction,
}: ErrorMessageProps) {
  return (
    <div className={styles.errorMessage}>
      <h3 className={styles.errorMessage__message}>
        OOPS! Something went wrong...
      </h3>

      <div className={styles.errorMessage__btnWrapper}>
        <button
          type="button"
          className={styles.errorMessage__btn}
          onClick={redirectFunction}
        >
          {redirectName}
        </button>
      </div>
    </div>
  );
}
