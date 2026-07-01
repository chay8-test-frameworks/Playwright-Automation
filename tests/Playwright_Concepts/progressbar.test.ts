
import { test, expect } from '@playwright/test';

test('Validate Progress bar', async({page})=> {
    await page.goto('https://demoqa.com/progress-bar');
    await expect(page.locator('#startStopButton')).toBeVisible();
    await page.locator('#startStopButton').click();
    const progressBar = page.locator('div[role="progressbar"]');

    while (true) {
        const count = await progressBar.getAttribute('aria-valuenow');
        // console.log(count);
        if(count === '80') {
            console.log(count)
            break;
            
        }
    }

    await page.locator('#startStopButton').click();
    await page.pause();
});