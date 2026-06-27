
import { test, expect } from '@playwright/test';

test('Hide and Show Example', async ({ page }) => {
  // await page.goto('/practice');
  await page.goto('https://www.letskodeit.com/practice');
  await expect(page).toHaveTitle(/Practice Page/);
  await expect(page.locator('#hide-textbox')).toBeVisible();
  await page.locator('#hide-textbox').click();
  await expect(page.locator('#displayed-text')).toBeHidden();
  await page.locator('#show-textbox').click();
  await expect(page.locator('#displayed-text')).toBeVisible();
});