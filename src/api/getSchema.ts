/* eslint-disable no-underscore-dangle */
import axios from 'axios';

type SchemaType = {
  data: {
    __schema: {
      types: [object];
    };
  };
};

type SchemaFn = (
  url: string
) => Promise<string | SchemaType['data']['__schema']>;

const schemaQuery = {
  query: `{
    __schema {
      types {
        name
        kind
        description
        fields {
          name
          description
          type {
            name
            kind
          }
        }
      }
    }
  }`,
};

// type for url Request<'url'>
export const getSchema: SchemaFn = async (url) => {
  try {
    const { data } = await axios.post<SchemaType>(url, schemaQuery, {
      headers: { 'Content-Type': 'application/json' },
    });
    return data.data.__schema;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    }
    return 'An unexpected error occurred';
  }
};
