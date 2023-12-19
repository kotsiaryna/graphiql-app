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
