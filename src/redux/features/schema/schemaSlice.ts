import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface SchemaResponse {
  data: object | null;
}
const initialState: SchemaResponse = {
  data: null,
};

export const schemaSlice = createSlice({
  name: 'schema',
  initialState,
  reducers: {
    saveSchema: (state, action: PayloadAction<SchemaResponse['data']>) => {
      state.data = action.payload;
    },
    deleteSchema: (state) => {
      state.data = null;
    },
  },
});

export const { saveSchema, deleteSchema } = schemaSlice.actions;

export default schemaSlice.reducer;
