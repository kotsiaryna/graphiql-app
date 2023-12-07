/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testRegex: '((\\.|/*.)(test))\\.tsx?$',
  moduleNameMapper: {
    '^.+\\.(css|scss|png)$': 'babel-jest',
  },
};
