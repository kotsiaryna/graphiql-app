import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { QueryResponse } from '../../../types/types';
import { getQuery } from '../../../api/getQuery';

export const fetchQuery = createAsyncThunk('queryResponse/fetch', getQuery);

type InitStateType = {
  response: QueryResponse;
  errorMessage: string | null;
};

const initialState: InitStateType = {
  response: {},
  errorMessage: null,
};

export const queryResponseSlice = createSlice({
  name: 'queryResponse',
  initialState,
  reducers: {
    deleteResponse: (state) => {
      state.response = {};
    },
    deleteResponseError: (state) => {
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuery.fulfilled, (state, action) => {
      if (typeof action.payload === 'string') {
        state.response = {};
        state.errorMessage = action.payload;
      } else {
        state.response = action.payload;
        state.errorMessage = null;
      }
    });
  },
});

export const { deleteResponse, deleteResponseError } =
  queryResponseSlice.actions;

export default queryResponseSlice.reducer;
