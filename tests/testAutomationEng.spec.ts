import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    // Navigate to the Kuvaire homepage
    await page.goto('https://kuvare.com/');
    
    // Click through the navigation links
    await page.getByRole('link', { name: 'CAREERS' }).click();
    await page.getByRole('link', { name: 'Job Postings' }).click();
    
    // Click on the "Test Automation Engineer" job posting
    await page.getByRole('link', { name: 'Test Automation Engineer', exact: true }).click();
    
    // Use a more specific locator for the heading element
    await expect(page.locator('h2.elementor-heading-title')).toBeVisible();
  });

  