import axios from 'axios';
import { QueryResponse } from '../types/types';
import { ValidationError, parseString } from '../utils/validateRequest';

// todo export interface from types!
interface QueryRequest {
  url: string;
  query: string;
  variables?: string;
  headers?: string;
}

type QueryFn = ({
  url,
  query,
  variables,
  headers,
}: QueryRequest) => Promise<string | QueryResponse>;

export const getQuery: QueryFn = async ({ url, query, variables, headers }) => {
  try {
    const parsedVariables = variables
      ? parseString(variables, 'variables')
      : {};
    const parsedHeaders = headers ? parseString(headers, 'headers') : {};

    const body = { query, variables: parsedVariables };

    const { data } = await axios.post<QueryResponse>(url, body, {
      headers: { ...parsedHeaders, 'Content-Type': 'application/json' },
      validateStatus: (status) => status < 500,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    }
    if (error instanceof ValidationError) return error.message;
    return 'An unexpected error occurred';
  }
};
