import { configureStore } from '@reduxjs/toolkit';
import { queryRequestSlice } from './features/queryRequest/queryRequestSlice';
import { queryResponseSlice } from './features/queryResponse/queryResponseSlice';
import { schemaSlice } from './features/schema/schemaSlice';

export const store = configureStore({
  reducer: {
    queryRequest: queryRequestSlice.reducer,
    queryResponse: queryResponseSlice.reducer,
    schema: schemaSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
