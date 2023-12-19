import { useRef } from 'react';
import styles from './QueryToolbar.module.scss';

export function QueryToolbar() {
  const varEditorRef = useRef<HTMLDivElement>(null);
  const headersEditorRef = useRef<HTMLDivElement>(null);

  const toggleEditor = () => {
    if (varEditorRef.current) {
      varEditorRef.current.hidden = !varEditorRef.current.hidden;
    }
    if (headersEditorRef.current) {
      headersEditorRef.current.hidden = !headersEditorRef.current.hidden;
    }
  };

  return (
    <div className={styles.queryToolbar}>
      <div className={styles.queryToolbar__heading}>
        <button
          className={styles.queryToolbar__button}
          type="button"
          onClick={toggleEditor}
        >
          Variables
        </button>
        <button
          className={styles.queryToolbar__button}
          type="button"
          onClick={toggleEditor}
        >
          Headers
        </button>
      </div>
      <div className={styles.queryToolbar__editor} ref={varEditorRef} hidden>
        Editor for variables
      </div>
      <div className={styles.queryToolbar__editor} ref={headersEditorRef}>
        Editor for headers
      </div>
    </div>
  );
}
