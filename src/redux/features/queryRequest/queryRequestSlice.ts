import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface QueryRequestState {
  url: string;
  query: string;
  variables: string;
  headers: object;
}

const initialState: QueryRequestState = {
  url: '',
  query: '',
  variables: '',
  headers: {},
};

export const queryRequestSlice = createSlice({
  name: 'queryRequest',
  initialState,
  reducers: {
    addUrl: (state, action: PayloadAction<string>) => {
      return { ...state, url: action.payload };
    },
    addQuery: (state, action: PayloadAction<string>) => {
      return { ...state, query: action.payload };
    },
    addVariables: (state, action: PayloadAction<string>) => {
      return { ...state, variables: action.payload };
    },
    addHeaders: (state, action: PayloadAction<object>) => {
      return { ...state, headers: action.payload };
    },
  },
});

export const { addUrl, addHeaders, addVariables, addQuery } =
  queryRequestSlice.actions;

export default queryRequestSlice.reducer;
