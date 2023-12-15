import { configureStore } from '@reduxjs/toolkit';
import queryRequestReducer from './features/queryRequest/queryRequestSlice';
import queryResponseReducer from './features/queryResponse/queryResponseSlice';
import schemaReducer from './features/schema/schemaSlice';

export const store = configureStore({
  reducer: {
    queryRequest: queryRequestReducer,
    queryResponse: queryResponseReducer,
    schema: schemaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
