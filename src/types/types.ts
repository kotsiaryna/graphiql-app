import * as yup from 'yup';
import {
  userCredentialsSchemaSignIn,
  userCredentialsSchemaSignUp,
} from '../utils/userCredentialsSchema';

export interface ValidSignUpData
  extends yup.InferType<typeof userCredentialsSchemaSignUp> {}
export interface ValidSignInData
  extends yup.InferType<typeof userCredentialsSchemaSignIn> {}

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
