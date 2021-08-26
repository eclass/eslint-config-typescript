module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:node/recommended',
    'plugin:promise/recommended',
    'plugin:security/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:array-func/all',
    'plugin:sonarjs/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'promise',
    'security',
    'eslint-comments',
    'array-func',
    'sonarjs',
    '@typescript-eslint/eslint-plugin'
  ],
  rules: {
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
    'no-console': ['error'],
    'no-nested-ternary': 'error',
    'require-await': 'error',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-missing-import': 'off',
    'node/no-unpublished-import': 'off',
    'node/no-extraneous-import': 'off'
  }
}
