
import { test, expect } from '@playwright/test';

test('New Tab and Child Tab Test', async ({ page }) => {
  // Navigate to the initial page
  await page.goto('https://testautomationpractice.blogspot.com/');
  expect (await page.getByText('Data Entry Form').isVisible()).toBeTruthy();

    // Open a new tab
    const [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        page.click('button[onclick="myFunction()"]'),
    ]);

    // Wait for the new tab to load
    await newTab.waitForLoadState();
    expect(await newTab.title()).toBe('SDET-QA Blog');
});