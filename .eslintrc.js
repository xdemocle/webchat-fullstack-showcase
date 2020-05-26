module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'react/display-name': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
}
