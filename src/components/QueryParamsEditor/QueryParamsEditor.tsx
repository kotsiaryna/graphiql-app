/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { basicSetup } from 'codemirror';
import { EditorState, Text } from '@codemirror/state';
import { EditorView, placeholder } from '@codemirror/view';
import { json } from '@codemirror/lang-json';
import { QueryParamsEditorProps } from './types';

export function QueryParamsEditor({
  setData,
  placeholderValue = '',
}: QueryParamsEditorProps) {
  const dispatch = useDispatch();
  const editorRef = useRef<HTMLDivElement>(null);

  const handleChange = (state: EditorState) => {
    const editorValue = state.doc.toString();
    dispatch(setData(editorValue));
  };

  useEffect(() => {
    if (!editorRef.current) return;

    const state = EditorState.create({
      doc: Text.of(['']),
      extensions: [basicSetup, json(), placeholder(placeholderValue)],
    });

    const editorView = new EditorView({
      state,
      parent: editorRef.current,
    });

    editorView.dom.addEventListener('keyup', () =>
      handleChange(editorView.state)
    );

    return () => {
      editorView.destroy();
    };
  }, []);

  return <div ref={editorRef} />;
}
