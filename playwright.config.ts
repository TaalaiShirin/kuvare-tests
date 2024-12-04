// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true,  // Ensure tests run in headless mode (useful for CI)
    screenshot: 'on-failure',  // Capture a screenshot on failure
    video: 'retain-on-failure', // Capture video on failure
  },
  reporter: [
    ['html', { outputFolder: 'test-results', open: 'never' }],  // Save HTML report in 'test-results'
  ],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },  // Run tests on Chromium browser
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },  // Run tests on Firefox browser
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },  // Run tests on WebKit browser
    // },
  ],
});
