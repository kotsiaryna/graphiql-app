import { useEffect, useRef, useState } from 'react';
import { QueryParamsEditor } from '../../../../components/QueryParamsEditor/QueryParamsEditor';
import {
  addVariables,
  addHeaders,
} from '../../../../redux/features/queryRequest/queryRequestSlice';
import styles from './QueryToolbar.module.scss';

export function QueryToolbar() {
  const varEditorRef = useRef<HTMLDivElement>(null);
  const headersEditorRef = useRef<HTMLDivElement>(null);
  const [activeEditor, setActiveEditor] = useState('Variables');

  useEffect(() => {
    if (activeEditor === 'Variables') {
      varEditorRef.current!.hidden = false;
      headersEditorRef.current!.hidden = true;
    } else {
      varEditorRef.current!.hidden = true;
      headersEditorRef.current!.hidden = false;
    }
  });

  return (
    <div className={styles.queryToolbar}>
      <div className={styles.queryToolbar__heading}>
        <button
          className={
            activeEditor === 'Variables'
              ? styles.queryToolbar__activeButton
              : styles.queryToolbar__button
          }
          type="button"
          onClick={() => setActiveEditor('Variables')}
        >
          Variables
        </button>
        <button
          className={
            activeEditor === 'Headers'
              ? styles.queryToolbar__activeButton
              : styles.queryToolbar__button
          }
          type="button"
          onClick={() => setActiveEditor('Headers')}
        >
          Headers
        </button>
      </div>

      <div className={styles.queryToolbar__editor} ref={varEditorRef}>
        <QueryParamsEditor setData={addVariables} />
      </div>

      <div
        className={styles.queryToolbar__editor}
        ref={headersEditorRef}
        hidden
      >
        <QueryParamsEditor
          setData={addHeaders}
          placeholderValue={'{\n "key": "value" \n}'}
        />
      </div>
    </div>
  );
}
