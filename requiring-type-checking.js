module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json'
  },
  extends: [
    './base',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ]
}
