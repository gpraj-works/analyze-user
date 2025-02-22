import pluginJs from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    { languageOptions: { globals: globals.node } },
    { plugins: { prettier }, rules: { 'prettier/prettier': 'error' } },
    { ignores: ['demo/**/*'] },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];
