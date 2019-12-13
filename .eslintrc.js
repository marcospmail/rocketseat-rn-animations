module.exports = {
    env: {
        es6: true,
    },
    extends: [
        'airbnb', 'prettier', 'prettier/react'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react', 'jsx-a11y', 'prettier'
    ],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
        'react/prefer-stateless-function': 0,
        'react/state-in-constructor': 'off',
        'react/jsx-props-no-spreading': 0,
        'no-underscore-dangle': 0
    },
};
