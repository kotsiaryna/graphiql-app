import axios from 'axios';
import { QueryResponse } from '../types/types';

// todo export interface from types!
interface QueryRequest {
  url: string;
  query: string;
  variables?: string;
  headers?: object;
}

type QueryFn = ({
  url,
  query,
  variables,
  headers,
}: QueryRequest) => Promise<string | QueryResponse>;

export const getQuery: QueryFn = async ({ url, query, variables, headers }) => {
  const body = { query, variables };

  try {
    const { data } = await axios.post<QueryResponse>(url, body, {
      headers: { ...headers, 'Content-Type': 'application/json' },
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    }
    return 'An unexpected error occurred';
  }
};
