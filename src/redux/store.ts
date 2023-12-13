import { configureStore } from '@reduxjs/toolkit';
import queryRequestReducer from './features/queryRequest/queryRequestSlice';
import queryResponseReducer from './features/queryResponse/queryResponseSlice';

export const store = configureStore({
  reducer: {
    queryRequest: queryRequestReducer,
    queryResponse: queryResponseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
