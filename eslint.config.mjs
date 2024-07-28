import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
).override('nuxt/typescript/rules', {
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'error',
  },
}).override('nuxt/javascript', {
  rules: {
    'no-console': 'warn',
  },
})
