/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { minimalSetup } from 'codemirror';
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { json } from '@codemirror/lang-json';
import { selectQueryResponse } from '../../../../redux/features/queryResponse/queryResponseSelector';
import styles from './Viewer.module.scss';

export function Viewer() {
  const { response } = useSelector(selectQueryResponse);
  const { data, errors } = response;
  const viewerRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<EditorView>();

  useEffect(() => {
    if (!viewerRef.current) return;
    const state = EditorState.create({
      doc: '',
      extensions: [
        minimalSetup,
        EditorState.readOnly.of(true),
        EditorView.lineWrapping,
        json(),
      ],
    });

    const editor = new EditorView({
      state,
      parent: viewerRef.current,
    });
    setView(editor);
    return () => {
      editor.destroy();
      setView(undefined);
    };
  }, []);

  useEffect(() => {
    if (view) {
      view.dispatch({
        changes: {
          from: 0,
          to: view.state.doc.length,
          insert: JSON.stringify(data || errors, null, 2),
        },
      });
    }
  }, [errors, data]);

  return <div className={styles.viewer} ref={viewerRef} />;
}
