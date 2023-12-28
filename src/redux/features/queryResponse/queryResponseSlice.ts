import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { QueryRequest, QueryResponse } from '../../../types/types';
import { ValidationError, parseString } from '../../../utils/validateRequest';

export const fetchQuery = createAsyncThunk<
  QueryResponse,
  QueryRequest,
  { rejectValue: string }
>(
  'queryResponse/fetch',
  async ({ url, query, variables, headers }, { rejectWithValue }) => {
    try {
      const parsedVariables = variables
        ? parseString(variables, 'variables')
        : {};
      const parsedHeaders = headers ? parseString(headers, 'headers') : {};

      const body = { query, variables: parsedVariables };
      const { data } = await axios.post<QueryResponse>(url, body, {
        headers: { ...parsedHeaders, 'Content-Type': 'application/json' },
        validateStatus: (status) => status < 500,
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
      if (error instanceof ValidationError)
        return rejectWithValue(error.message);
      return rejectWithValue('An unexpected error occurred');
    }
  }
);

type InitStateType = {
  response: QueryResponse;
  errorMessage: string | undefined;
};

const initialState: InitStateType = {
  response: {},
  errorMessage: undefined,
};

export const queryResponseSlice = createSlice({
  name: 'queryResponse',
  initialState,
  reducers: {
    deleteResponse: (state) => {
      state.response = {};
    },
    deleteResponseError: (state) => {
      state.errorMessage = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuery.fulfilled, (state, action) => {
        state.response = action.payload;
        state.errorMessage = undefined;
      })
      .addCase(fetchQuery.rejected, (state, action) => {
        state.response = {};
        state.errorMessage = action.payload;
      });
  },
});

export const { deleteResponse, deleteResponseError } =
  queryResponseSlice.actions;

export default queryResponseSlice.reducer;
