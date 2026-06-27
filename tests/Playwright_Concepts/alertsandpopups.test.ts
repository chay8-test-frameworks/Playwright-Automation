
import { test, expect } from '@playwright/test';

//simple alert
test('Alerts and Popups Test', async ({ page }) => {
  // Navigate to the initial page
  await page.goto('https://testautomationpractice.blogspot.com/');
  expect (await page.getByText('Data Entry Form').isVisible()).toBeTruthy();

  //In Playwright, Alerts are handled as events. Events happens instantly, so we must start 
  //listening events before triggering them.
  page.on('dialog', async dialog => {
    console.log('Dialog message:', dialog.message());
    await dialog.accept();
  });

    // Trigger an alert
    await page.locator('button[onclick="myFunctionAlert()"]').click();
});

//Confirmation alert
test('Confirmation Alert Test', async ({ page }) => {
  // Navigate to the initial page
  await page.goto('https://testautomationpractice.blogspot.com/');
  expect (await page.getByText('Data Entry Form').isVisible()).toBeTruthy();

  page.on('dialog', async dialog => {
    console.log('Dialog message:', dialog.message());
    // await dialog.dismiss();
    await dialog.accept();
  });

  await page.locator('button[onclick="myFunctionConfirm()"]').click();
});

//prompt alert
test('Prompt Alert Test', async ({ page }) => {
  // Navigate to the initial page
  await page.goto('https://testautomationpractice.blogspot.com/');
  expect (await page.getByText('Data Entry Form').isVisible()).toBeTruthy();

  page.on('dialog', async dialog => {
    console.log('Dialog message:', dialog.message());
    // await dialog.accept();
    await dialog.accept('Playwright');  //sent text to prompt alert
});

  await page.locator('button[onclick="myFunctionPrompt()"]').click();
  //Assertion
  await expect(page.locator('#demo')).toContainText('Playwright');
});