
import { test, expect } from '@playwright/test';

test('Radios Example', async ({ page }) => {
  await page.goto('/practice');
  await expect(page.locator('#bmwradio')).toBeVisible();
  await page.locator('#bmwradio').check();
  await expect(page.locator('#bmwradio')).toBeChecked();
});

test('Checkboxes Example', async ({ page }) => {
  await page.goto('/practice');
  await expect(page.locator('#bmwcheck')).toBeVisible();
  await page.locator('#bmwcheck').check();
  await expect(page.locator('#bmwcheck')).toBeChecked();
  await page.locator('#bmwcheck').uncheck();
  await expect(page.locator('#bmwcheck')).not.toBeChecked();
});