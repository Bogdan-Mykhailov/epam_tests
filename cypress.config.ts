import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.epam.com/',
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    viewportWidth: 1280,
    viewportHeight: 920,
    defaultCommandTimeout: 10000,
    retries: {
      runMode: 2,
      openMode: 0,
    },
  },
})
