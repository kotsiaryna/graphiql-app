import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface QueryRequestState {
  url: string;
  query: string;
  variables: string;
  headers: string;
}

const initialState: QueryRequestState = {
  url: '',
  query: '',
  variables: '',
  headers: '',
};

export const queryRequestSlice = createSlice({
  name: 'queryRequest',
  initialState,
  reducers: {
    addUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
    addQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    addVariables: (state, action: PayloadAction<string>) => {
      state.variables = action.payload;
    },
    addHeaders: (state, action: PayloadAction<string>) => {
      state.headers = action.payload;
    },
  },
});

export const { addUrl, addHeaders, addVariables, addQuery } =
  queryRequestSlice.actions;
