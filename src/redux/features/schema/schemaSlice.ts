/* eslint-disable no-underscore-dangle */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { SchemaType } from '../../../types/types';

const schemaQuery = {
  query: `{
    __schema {
      types {
        name
        kind
        }
      }
  }`,
};

export const fetchSchema = createAsyncThunk<
  SchemaType['data']['__schema'],
  string,
  { rejectValue: string }
>('schema/fetch', async (url, { rejectWithValue }) => {
  try {
    const { data } = await axios.post<SchemaType>(url, schemaQuery, {
      headers: { 'Content-Type': 'application/json' },
    });
    return data.data.__schema;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unexpected error occurred');
  }
});

interface SchemaResponse {
  data: SchemaType['data']['__schema'] | null;
  errorMessage: string | undefined;
}
const initialState: SchemaResponse = {
  data: null,
  errorMessage: undefined,
};

export const schemaSlice = createSlice({
  name: 'schema',
  initialState,
  reducers: {
    deleteSchema: (state) => {
      state.data = null;
    },
    deleteSchemaError: (state) => {
      state.errorMessage = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchema.fulfilled, (state, action) => {
        state.data = action.payload;
        state.errorMessage = undefined;
      })
      .addCase(fetchSchema.rejected, (state, action) => {
        state.data = null;
        state.errorMessage = action.payload;
      });
  },
});

export const { deleteSchema, deleteSchemaError } = schemaSlice.actions;
