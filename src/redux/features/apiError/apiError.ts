import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ApiError {
  isApiError: boolean;
  errorMessage: string;
}
const initialState: ApiError = {
  isApiError: false,
  errorMessage: '',
};

export const apiErrorSlice = createSlice({
  name: 'apiError',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<ApiError['errorMessage']>) => {
      state.isApiError = true;
      state.errorMessage = action.payload;
    },
    deleteError: (state) => {
      state.isApiError = false;
      state.errorMessage = '';
    },
  },
});

export const { setError, deleteError } = apiErrorSlice.actions;

export default apiErrorSlice.reducer;
