import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    // Configure your E2E tests here
    // baseUrl: 'https://www.epam.com/',
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}"
  },
})
