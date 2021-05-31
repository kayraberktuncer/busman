module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/prop-types': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/state-in-constructor': 'off',
  },
}
