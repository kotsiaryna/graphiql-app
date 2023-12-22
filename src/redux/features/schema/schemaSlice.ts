import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSchema } from '../../../api/getSchema';

export const fetchSchema = createAsyncThunk('schema/fetch', getSchema);
interface SchemaResponse {
  data: object | null;
  errorMessage: string | null;
}
const initialState: SchemaResponse = {
  data: null,
  errorMessage: null,
};

export const schemaSlice = createSlice({
  name: 'schema',
  initialState,
  reducers: {
    deleteSchema: (state) => {
      state.data = null;
    },
    deleteSchemaError: (state) => {
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSchema.fulfilled, (state, action) => {
      if (typeof action.payload === 'string') {
        state.errorMessage = action.payload;
        state.data = null;
      } else {
        state.data = action.payload;
        state.errorMessage = null;
      }
    });
  },
});

export const { deleteSchema, deleteSchemaError } = schemaSlice.actions;

export default schemaSlice.reducer;
