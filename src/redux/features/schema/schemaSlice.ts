import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface SchemaResponse {
  data?: object;
  error?: string;
}
const initialState: SchemaResponse = {};

export const schemaSlice = createSlice({
  name: 'schema',
  initialState,
  reducers: {
    saveSchema: (_state, action: PayloadAction<SchemaResponse['data']>) => {
      return { data: action.payload };
    },
    saveError: (_state, action: PayloadAction<SchemaResponse['error']>) => {
      return { error: action.payload };
    },
  },
});

export const { saveSchema, saveError } = schemaSlice.actions;

export default schemaSlice.reducer;
