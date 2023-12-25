export interface AuthorData {
  name: string;
  githubName: string;
  githubUrl: string;
}

export type QueryError = {
  message: string;
  locations?: [{ line: number; column: number }];
};
export interface QueryResponse {
  data?: object;
  errors?: QueryError[];
}
export interface QueryRequest {
  url: string;
  query: string;
  variables?: string;
  headers?: object;
}

export type SchemaType = {
  data: {
    __schema: {
      types: [object];
    };
  };
};
