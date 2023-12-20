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
