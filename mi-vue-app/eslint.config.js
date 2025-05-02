import js from '@eslint/js';
import vue from 'eslint-plugin-vue';

export default [
  js.configs.recommended,
  {
    files: ['**/*.vue', '**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      vue,
    },
    rules: {
      'vue/no-unused-vars': 'warn', // Aquí agregas reglas personalizadas
    },
  },
];
