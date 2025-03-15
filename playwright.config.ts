import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['line'], // Reporter de consola
    ['allure-playwright', { outputFolder: 'allure-results' }], // Reporter de Allure
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  use: {
    baseURL: '',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Computadora',
      testMatch: "/*.spec.ts",
      use: { ...devices['Desktop Chrome'] },
    },
/*
    {
      name: 'Iphone',
      testMatch: "/*.spec.ts",
      use: { ...devices['iPhone 12'] },
    },

    {
      name: 'iPad',
      testMatch: "/*.spec.ts",
      use: { ...devices['iPad (gen 7)'] },
    },
    */
    {
      name: 'API Tests',
      testMatch: 'APITests/**/*',
      use: {
        baseURL: 'https://api.github.com',
        extraHTTPHeaders: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `token ${process.env.API_TOKEN}`,
        }
      }
    },
  ],
});