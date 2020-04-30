module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
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
  plugins: [
    'react',
  ],
  rules: {
    indent: [2],
    "eol-last":["error", "always"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "global-require": 0,
    "jsx-a11y/alt-text": 0,
    "react/prop-types": 0,
    "react/destructuring-assignment": 0
  },
};
