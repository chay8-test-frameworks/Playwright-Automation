
import {test, expect} from '@playwright/test';

test('Drag and Drop Test', async ({page}) => {
  // Navigate to the drag and drop page
  await page.goto('https://testautomationpractice.blogspot.com/');
  expect (await page.getByText('Data Entry Form').isVisible()).toBeTruthy();
  const tagetLocator = page.locator('#droppable').first();
  //Get backgroundcolor before drag and drop
    const beforeDragAndDrop = await tagetLocator.evaluate((element) => {
        return window.getComputedStyle(element).backgroundColor;
    });
    console.log('Background color before drag and drop:', beforeDragAndDrop);
  // Perform drag and drop action
  await page.locator('#draggable').first().dragTo(page.locator('#droppable').first());

    // Get background color after drag and drop 
    const afterDragAndDrop = await tagetLocator.evaluate((element) => {
        return window.getComputedStyle(element).backgroundColor;
    });
    console.log('Background color after drag and drop:', afterDragAndDrop);

    expect(beforeDragAndDrop).not.toBe(afterDragAndDrop);
});