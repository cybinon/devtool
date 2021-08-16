// eslint-disable-next-line no-undef
module.exports = {
    root         : true,
    parser       : '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020, // enable parsing latest ECMAScript
        sourceType : 'module', // allow use of imports
    },
    plugins: ['@typescript-eslint', 'jest'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
    ],
    rules: {
        // here add any ESlint rules to overwrite those
        // from the recommended extensions
        'key-spacing'               : [1, { align: 'colon' }],
        'jest/no-disabled-tests'    : 'warn',
        'jest/no-focused-tests'     : 'error',
        'jest/no-identical-title'   : 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect'         : 'error',
        'comma-spacing'             : [1, {before: false, after: true}],
        'quote-props'               : ['error', 'as-needed'],
        quotes                      : ['error', 'single'], 
        'no-unused-vars'            : [
            1,
            { vars: 'local', args: 'none', ignoreRestSiblings: true }
          ],
    },
    settings: {
        jest: {
            version: 'latest',
        },
    },
    env: {
        jest: true,
    },
};
