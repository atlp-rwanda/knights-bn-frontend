module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['plugin:react/recommended',
    'airbnb-base',
    'airbnb/rules/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint", 
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: [2],
    'eol-last': ['error', 'always'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'global-require': 0,
    'jsx-a11y/alt-text': 0,
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'no-nested-ternary': 0,
    'react/jsx-props-no-spreading': 0,
    "no-unused-expressions": 0,
    "no-useless-return": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/button-has-type": 0,
    "no-undef": 0,
    "import/no-extraneous-dependencies": 0,
    "react/no-access-state-in-setstate": 0,
    "react/no-did-update-set-state": 0,
    "consistent-return": 0,
    "no-unused-vars": 0,
    "no-alert": 0
  },
};
