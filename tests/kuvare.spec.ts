import { test, expect } from '@playwright/test';

test('Kuvare Homepage', async ({ page }) => {
  // Navigate to the Kuvare website
  await page.goto('https://kuvare.com');

  // Check the page title
  await expect(page).toHaveTitle(/Kuvare/); // Update with actual title of Kuvare homepage
  });
