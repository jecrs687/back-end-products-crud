/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "@infra/(.*)":["<rootDir>/src/infra/$1"],
    "@api/(.*)":["<rootDir>/src/api/$1"],
    "@domain/(.*)":["<rootDir>/src/domain/$1"],
    "@db":["<rootDir>/src/infra/configs/db.ts"],
  }
};