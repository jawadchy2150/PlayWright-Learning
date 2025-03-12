import { test, expect } from '@playwright/test';
import { log } from 'console';

test('AssertionsTest', async ({ page}) => {

    await page.goto('https://www.wikipedia.org/')
     
    await expect(page).toHaveURL('https://www.wikipedia.org/')

    // await expect(page).toHaveTitle("Register - nopCommerce")

    const logoElement = await page.locator('.central-textlogo')
    await expect(logoElement).toBeVisible()
})