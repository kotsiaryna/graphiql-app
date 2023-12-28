import styles from './ErrorPage.module.scss';

export function ErrorPage() {
  const reloadPage = (): void => {
    window.location.reload();
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
          onClick={reloadPage}
        >
          reload page
        </button>
      </div>
    </div>
  );
}
