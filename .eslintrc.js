// Config taken from: https://codeburst.io/from-eslint-to-tslint-and-back-again-bf259c2e7437
// See link for reference as this includes some compilaced config to get airbnb + react +
// typescript working nicely together.

module.exports = {
  env: {
    browser: true,
    'jest/globals': true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:jest/recommended',
    'plugin:jest/style',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'no-else-return': 'off',
    'no-param-reassign': 'off',
    radix: ['error', 'as-needed'],
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': ['error', { html: 'ignore' }],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true
      }
    ]
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        paths: 'src',
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};
