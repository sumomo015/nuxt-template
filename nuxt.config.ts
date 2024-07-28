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
    '@nuxt/image',
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
  image: {
    format: ['avif'],
    dir: 'assets/images',
  },
  security: {
    removeLoggers: false,
    rateLimiter: false,
    xssValidator: false,
    requestSizeLimiter: false,
  },
})
