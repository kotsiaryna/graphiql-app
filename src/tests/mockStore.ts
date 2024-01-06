import { configureStore } from '@reduxjs/toolkit';
import { queryRequestSlice } from '../redux/features/queryRequest/queryRequestSlice';
import { queryResponseSlice } from '../redux/features/queryResponse/queryResponseSlice';
import { schemaSlice } from '../redux/features/schema/schemaSlice';
import { RootState } from '../redux/store';

export const init = {
  queryRequest: {
    url: '',
    query: '',
    variables: '',
    headers: '',
  },
  queryResponse: {
    response: {},
    errorMessage: '',
  },
  schema: {
    data: null,
    errorMessage: '',
  },
};

export const setupStore = (preloadedState?: RootState) =>
  configureStore({
    reducer: {
      queryRequest: queryRequestSlice.reducer,
      queryResponse: queryResponseSlice.reducer,
      schema: schemaSlice.reducer,
    },
    preloadedState,
  });
