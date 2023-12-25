import { useNavigate } from 'react-router-dom';
import { Path } from '../../router/types';
import styles from './ErrorPage.module.scss';

export function ErrorPage() {
  const navigate = useNavigate();

  const redirectToWelcome = () => {
    navigate(Path.Welcome);
  };

  return (
    <div className={styles.errorPage}>
      <h3 className={styles.errorPage__message}>
        OOPS! Something went wrong...
      </h3>

      <div className={styles.errorPage__btnWrapper}>
        <button
          type="button"
          className={styles.errorPage__btn}
          onClick={redirectToWelcome}
        >
          go to welcome page
        </button>
      </div>
    </div>
  );
}
