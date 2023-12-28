/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
import { useEffect, useRef } from 'react';
import { basicSetup } from 'codemirror';
import { EditorState, Text } from '@codemirror/state';
import { EditorView, placeholder } from '@codemirror/view';
import { json } from '@codemirror/lang-json';
import { useAppDispatch } from '../../redux/hooks';
import { QueryParamsEditorProps } from './types';

export function QueryParamsEditor({
  setData,
  placeholderValue = '',
}: QueryParamsEditorProps) {
  const dispatch = useAppDispatch();
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const state = EditorState.create({
      doc: Text.of(['']),
      extensions: [
        basicSetup,
        json(),
        placeholder(placeholderValue),
        EditorView.updateListener.of((e) => {
          dispatch(setData(e.state.doc.toString()));
        }),
      ],
    });

    const editorView = new EditorView({
      state,
      parent: editorRef.current,
    });

    return () => {
      editorView.destroy();
    };
  }, []);

  return <div ref={editorRef} />;
}
