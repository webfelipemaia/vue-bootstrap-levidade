module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    extends: [
      'plugin:vue/vue3-recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    rules: {
      // suas regras aqui, se quiser
    },
  };
  