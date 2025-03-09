import { test, expect } from '@playwright/test';

test('Built-inLocators', async ({ page}) => {

    await page.setDefaultNavigationTimeout(0);

    await page.goto('https://automationintesting.online/')

    // getByAltText test 

    // const logo = await page.getByAltText('ParaBank')
    // await expect(logo).toBeVisible();

    // getByPlaceHolder test

    const name = await page.getByPlaceholder('Name')
    await expect(name).toBeVisible(); 
    await expect(await page.getByText('Welcome to Restful Booker Platform')).toBeVisible()

}) 