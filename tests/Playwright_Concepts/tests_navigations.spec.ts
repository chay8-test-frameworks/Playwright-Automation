
import {test, expect} from '@playwright/test';

test("Navigate to the page", async ({page}) => {
    await page.goto("https://www.letskodeit.com/practice");
    await expect(page).toHaveTitle("Practice Page");
    await page.locator('#navbar-inverse-collapse a[href="/support"]').click();
    await expect(page).toHaveURL("https://www.letskodeit.com/support");
    expect(await page.title()).toBe("Support");

    //Navigations

    await page.reload();
    await expect(page.locator('h4.dynamic-heading')).toHaveText("Get in touch");
    await page.goBack();
    await expect(page.locator('h1')).toHaveText("Practice Page");
    await page.goForward();
    await expect(page.locator('h4.dynamic-heading')).toHaveText("Get in touch");
    
    await page.waitForURL("https://www.letskodeit.com/support");
    await page.waitForURL("**/support");
    await page.waitForURL(/support/);
    await page.close();
});