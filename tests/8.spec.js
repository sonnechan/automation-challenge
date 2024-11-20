import { test, expect } from "@playwright/test";

test.beforeEach(async ({}, testInfo) => {
  test.setTimeout(120000);
});
const dates = ['2010-03-25 01:25',
'2010-09-25 01:50',
'2019-06-08 18:45',
'1986-10-17 03:15',
'1983-09-17 22:20',
'2006-08-23 18:30',
'2008-05-16 04:05',
'1980-01-18 04:25',
'1992-07-02 01:40',
'2000-09-22 01:00',
'1986-01-04 20:20',
'1993-07-18 06:10',
'1985-09-01 11:05',
'1980-12-29 07:15',
'1993-07-24 02:35',
'2029-09-18 21:58',
'2028-01-20 14:50',
'1995-07-09 10:33',
'2013-06-01 16:15',
'2009-02-25 05:37']
test('test', async ({ page }) => {
  await page.goto('https://showdownspace-rpa-challenge.vercel.app/challenge-mui-168af805/');
  const badges = await page.locator('.chakra-badge');
  const a = []
  await page.getByRole('button', { name: 'Start challenge' }).click();

  // Get the total number of badges
  const badgeCount = await badges.count();
  
  // Loop through each badge
  for (let i = 0; i < 1; i++) {
    // Get the text of the current badge
    const badgeText = await badges.nth(i).textContent();
    a.push(badgeText)
    console.log(`Badge ${i + 1}: ${badgeText}`);

    const date = new Date(badgeText);

// Extracting individual components
    const year = date.getFullYear();   // 2010
    const month = date.getMonth() + 1; // 3 (months are 0-based, so add 1)
    const day = date.getDate();        // 25
    const hour = date.getHours();      // 1
    const minute = date.getMinutes();  // 25
    const now = new Date()
    const currentMonth = now.getMonth()
    const gap = month - currentMonth - 1

console.log(year)
    await page.getByRole('button', { name: '2024' }).click();
    await page.getByRole('radio', { name: year }).click();

    if (gap > 0) {
      await page.getByRole('radio', { name: year }).click();
      for(let j=0;j<gap;j++){
        await page.getByLabel('Next month').click();
      }
    } else if (gap < 0) {
      await page.getByRole('radio', { name: year }).click();

      for(let k=0;k<gap*-1;k++){
        await page.getByLabel('Previous month').click();
      }
    }


  }



  
  // await page.getByLabel('pick time').click();
  // const clock = await page.locator('.MuiClock-squareMask')
  // const box = await clock.boundingBox();

  // if (box) {
  //   // Calculate the x and y position (for example, clicking at the center of the div)
  //   const x = box.x + box.width / 2;  // Horizontal center
  //   const y = box.y + box.height / 2; // Vertical center
    
  //   // Click at the calculated position
  //   await page.mouse.click(x, y);
  // }
  
  // await page.getByRole('button', { name: 'Start challenge' }).click();
  // await page.getByText('-09-25 01:50').click();
  // await page.getByRole('button', { name: 'Nov' }).click();
  // await page.getByRole('button', { name: '20', exact: true }).click();
  // await page.getByRole('button', { name: '56' }).click();
  // await page.locator('.MuiClock-squareMask').click();
  // await page.locator('.MuiClock-squareMask').click();
  // await page.getByLabel('pick date').click();
  // await page.getByRole('gridcell', { name: '5', exact: true }).click();
  // await page.locator('.MuiClock-squareMask').click();
  // await page.getByLabel('pick date').click();
  // await page.getByText('November').click();
  // await page.getByRole('radio', { name: '2021' }).click();
  // await page.getByLabel('Previous month').click();
  // await page.getByLabel('Previous month').click();
  // await page.getByRole('button', { name: '2021' }).click();
  // await page.getByRole('radio', { name: '2015' }).click();
  // await page.getByRole('button', { name: 'OK' }).click();
  // await page.locator('html').click();
  // await page.getByRole('button', { name: 'Start over' }).click();
});