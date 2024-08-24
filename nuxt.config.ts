export default defineNuxtConfig({
  builder: 'vite',
  nitro: { compressPublicAssets: true },
  router: { options: { scrollBehaviorType: 'smooth' } },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    'nuxt-security',
  ],
  typescript: {
    tsConfig: {
      compilerOptions: { noUncheckedIndexedAccess: true },
    },
  },
  eslint: {
    config: {
      typescript: { strict: true },
      stylistic: true,
    },
  },
  security: {
    headers: {
      crossOriginEmbedderPolicy: import.meta.env.PROD ? 'require-corp' : 'unsafe-none',
    },
    removeLoggers: false,
    rateLimiter: false,
    xssValidator: false,
    requestSizeLimiter: false,
  },
})
