export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

export const parseString = (string: string, name: string) => {
  try {
    return JSON.parse(string);
  } catch (error) {
    throw new ValidationError(`Invalid syntax of ${name}`);
  }
};
