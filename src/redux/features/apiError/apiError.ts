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
    setError: (_state, action: PayloadAction<ApiError['errorMessage']>) => {
      return { isApiError: true, errorMessage: action.payload };
    },
    deleteError: () => {
      return { isApiError: false, errorMessage: '' };
    },
  },
});

export const { setError, deleteError } = apiErrorSlice.actions;

export default apiErrorSlice.reducer;
