import { test, expect } from '@playwright/test';

test('AssertionsTest', async ({ page}) => {

    await page.goto('https://www.nopcommerce.com/en/register')
     
    await expect(page).toHaveURL('https://www.nopcommerce.com/en/register')

    await expect(page).toHaveTitle("Register - nopCommerce")
})