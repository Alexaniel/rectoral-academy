module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:react/jsx-runtime',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'linebreak-style': ['error', (process.platform === 'win32' ? 'windows' : 'unix')],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        indent: [1, 4],
        'no-undef': 0,
        'react/jsx-indent': [1, 4],
        'react/jsx-indent-props': [1, 4],
        'no-unused-expressions': 0,
        'no-nested-ternary': 0,
        'import/no-extraneous-dependencies': 0,
        'react/jsx-no-constructed-context-values': 0,
        'react/jsx-props-no-spreading': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'react/jsx-filename-extension': [2, { extensions: ['.ts', '.tsx'] }],
        'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
        'import/prefer-default-export': 'off',
        'default-param-last': 0,
        'no-case-declarations': 0,
        'no-underscore-dangle': 0,
        'max-len': [1, 160, 2, { ignoreUrls: true }],
        'no-unused-vars': 0,
        'no-shadow': 0,
        'react/require-default-props': 0,
        'no-param-reassign': 0,
        'react/no-array-index-key': 0,
        'jsx-a11y/anchor-is-valid': 0,
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': [
                '.ts',
                '.tsx',
            ],
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
            alias: {
                map: [
                    ['@/components', './src/components'],
                    ['@/types', './src/types'],
                    ['@/const', './src/const'],
                    ['@/api', './src/api'],
                    ['@/styles', './src/styles'],
                    ['@/screens', './src/screens'],
                ],
                extensions: ['.ts', '.js', '.json', '.tsx'],
            },
        },
    },
};
