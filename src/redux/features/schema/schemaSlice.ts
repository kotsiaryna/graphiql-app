import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { QueryResponse } from '../../../types/types';

const initialState: QueryResponse = {
  data: {},
  errors: [{ message: '' }],
};

export const schemaSlice = createSlice({
  name: 'schema',
  initialState,
  reducers: {
    saveSchemaResponse: (_state, action: PayloadAction<QueryResponse>) => {
      return action.payload;
    },
  },
});

export const { saveSchemaResponse } = schemaSlice.actions;

export default schemaSlice.reducer;
