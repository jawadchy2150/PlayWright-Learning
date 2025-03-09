import { test, expect } from '@playwright/test';

test('Locators', async ({page}) => {
    await page.goto('https://www.demoblaze.com/index.html')

    // click on the login button
    // await page.locator().click('id = login2')
    await page.click('id=login2')

    // fill the user login form

    await page.fill('#loginusername', 'jawad123')
    await page.fill('#loginpassword', 'jawad123')

    // await page.waitForSelector('#logInModal', { state: 'visible' });
    await page.click('//button[normalize-space()="Log in"]');


    const logoutLink = await page.locator("id=logout2")

    await expect(logoutLink).toBeVisible({ timeout: 100000} );

    await page.close()
})