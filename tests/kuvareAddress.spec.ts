import { test, expect } from '@playwright/test';

test('verify Kuvare address', async ({ page }) => {
  // Go to Kuvare homepage
  await page.goto('https://kuvare.com/');

  // Verify the address text is visible
  const addressText = '5600 North River RoadSuite';
  await expect(page.locator(`text=${addressText}`)).toBeVisible();

  // // Optionally click the address link or element if needed
  // await page.getByText(addressText).click();
});
