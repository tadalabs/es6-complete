module.exports = {
    extends: ['eslint:recommended', 'prettier'],
    plugins: ['prettier'], 
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module"
    },
    globals: {},
    rules: {
        'prettier/prettier': [ 
            'error', {
                singleQuote: true
        }],
        eqeqeq: ['error', 'always']
    },
};
