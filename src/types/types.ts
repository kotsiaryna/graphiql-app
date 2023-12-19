import * as yup from 'yup';
import { userCredentialsSchema } from '../utils/userCredentialsSchema';

export interface ValidFormData
  extends yup.InferType<typeof userCredentialsSchema> {}

export interface AuthorData {
  name: string;
  githubName: string;
  githubUrl: string;
}
