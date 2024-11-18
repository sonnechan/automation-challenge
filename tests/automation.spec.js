const { test, expect } = require('@playwright/test');

test('automation', async ({ page }) => {
    await page.goto('https://browser-automation-challenges-demo.netlify.app/');


    await page.getByRole('button', { name: 'Start Challenge' }).click();
    const uuidValue = await page.locator('#uuid').innerText();
    // console.log('UUID Value:', uuidValue);

    // await page.getByPlaceholder('Type the UUID here').click();
    await page.getByPlaceholder('Type the UUID here').fill(uuidValue);
    await page.pause();
  
  });