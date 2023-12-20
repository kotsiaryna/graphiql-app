import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { QueryResponse } from '../../../types/types';

const initialState: QueryResponse = {
  data: {},
  errors: [{ message: '' }],
};

export const queryResponseSlice = createSlice({
  name: 'queryResponse',
  initialState,
  reducers: {
    saveResponse: (_state, action: PayloadAction<QueryResponse>) => {
      return action.payload;
    },
  },
});

export const { saveResponse } = queryResponseSlice.actions;

export default queryResponseSlice.reducer;
