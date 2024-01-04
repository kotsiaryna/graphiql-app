import { useNavigate } from 'react-router-dom';
import { Path } from '../../router/types';
import styles from './Page404.module.scss';

export function Page404() {
  const navigate = useNavigate();

  const redirectToWelcome = () => {
    navigate(Path.Welcome);
  };

  return (
    <div className={styles.page404}>
      <div>
        <h1 className={styles.title}>404</h1>
        <h3 className={styles.subtitle}>page not found</h3>
      </div>

      <div className={styles.ghostContainer}>
        <div className={styles.ghostTentacles}>
          <div className={styles.ghostTentacles__first} />
          <div className={styles.ghostTentacles__second} />
          <div className={styles.ghostTentacles__third} />
          <div className={styles.ghostTentacles__fourth} />
        </div>

        <div className={styles.ghostBody}>
          <div className={styles.ghostBody__face}>
            <div className={styles.ghostBody__eye} />
            <div className={styles.ghostBody__eyeRight} />
            <div className={styles.ghostBody__mouth} />
          </div>
        </div>

        <div className={styles.ghostContainer__shadow} />
      </div>

      <p className={styles.message}>Boo, looks like a ghost stole this page!</p>
      <div className={styles.btnWrapper}>
        <button
          type="button"
          className={styles.btn}
          onClick={redirectToWelcome}
        >
          go to welcome page
        </button>
      </div>
    </div>
  );
}
