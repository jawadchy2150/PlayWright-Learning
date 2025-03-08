const {test, expect} = require('@playwright/test')

test('Home page', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');

    await expect(page).toHaveTitle('STORE');

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')

    page.close()
})