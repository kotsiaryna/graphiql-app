import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

export interface QueryParamsEditorProps {
  setData: ActionCreatorWithPayload<
    string,
    'queryRequest/addVariables' | 'queryRequest/addHeaders'
  >;
  placeholderValue?: string;
}
