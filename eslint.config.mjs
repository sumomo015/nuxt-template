// @ts-check

import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'
import tseslint from 'typescript-eslint'

import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt()
  .remove('nuxt/typescript/setup')
  .replace('nuxt/typescript/rules',
    // @ts-ignore
    ...tseslint
      .config(
        ...tseslint.configs.strictTypeChecked,
        ...tseslint.configs.stylisticTypeChecked,
      )
      .map(v => ({
        ...v,
        files: ['**/*.ts', '**/*.vue'],
      })),
    {
      files: ['**/*.ts', '**/*.vue'],
      rules: {
        'no-console': 'warn',
        '@typescript-eslint/restrict-template-expressions': [
          'error', { allowNumber: true },
        ],
      },
    })
  .override('nuxt/vue/setup', {
    files: ['**/*.vue', '**/*.ts'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  })
