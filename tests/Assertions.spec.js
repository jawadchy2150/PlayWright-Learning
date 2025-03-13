import { test, expect } from '@playwright/test';
import { log } from 'console';

test('AssertionsTest', async ({ page}) => {

    await page.goto('https://therap.hire.trakstar.com/jobs/fk06psj/')
     
    await expect(page).toHaveURL('https://therap.hire.trakstar.com/jobs/fk06psj/')

    // await expect(page).toHaveTitle("Register - nopCommerce")

    // const logoElement = await page.locator('.central-textlogo')
    // await expect(logoElement).toBeVisible()

    // const searchBox = await page.locator('#searchInput')
    // await expect(searchBox).toBeEnabled()

    const titleToHaveText = await page.locator('.jobdesciption');
    await expect(titleToHaveText).toHaveText('We are seeking motivated individuals to join our team as Associate System Administrators. This position provides an excellent opportunity to kickstart your career in system administration, where you will play a key role in configuring, optimizing, and maintaining servers, storage, and network infrastructure.')
})