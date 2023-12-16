import axios from 'axios';

// todo export interface from types!
interface QueryRequest {
  url: string;
  query: string;
  variables?: string;
  headers?: object;
}
export type QueryError = {
  message: string;
  locations?: [{ line: number; column: number }];
};
export interface QueryResponse {
  data?: object;
  errors?: QueryError[];
}

export const getQuery = async ({
  url,
  query,
  variables,
  headers,
}: QueryRequest) => {
  const body = { query, variables };

  try {
    const { data } = await axios.post<QueryResponse>(url, body, {
      headers: { ...headers, 'Content-Type': 'application/json' },
    });
    const { data: queryData, errors } = data;
    return queryData || errors;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    }
    return 'An unexpected error occurred';
  }
};
