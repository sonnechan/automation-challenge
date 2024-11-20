import { test, expect } from '@playwright/test';

test.beforeEach(async ({}, testInfo) => {
  test.setTimeout(120000);
});
test('test', async ({ page }) => {

  const goStraight = async () => {
    await page.getByRole('button', { name: '↟ Go forward' }).click();
  }
  const turnLeft = async ()=> {
    await page.getByRole('button', { name: '↺ Turn left' }).click();
  }
  const turnRight = async ()=> {
    await page.getByRole('button', { name: '↻ Turn right' }).click();
  }
  await page.goto('https://showdownspace-rpa-challenge.vercel.app/challenge-robot-d34b4b04/');
  await page.getByRole('button', { name: 'Start challenge' }).click();
let i = 0
while(i < 1000) {
  i++

  const leftState =await page.locator('#wallToTheLeft').getAttribute('data-state')
  const frontState =await page.locator('#wallInFront').getAttribute('data-state')
 const rightState=  await page.locator('#wallToTheRight').getAttribute('data-state')
 console.log(frontState,leftState,rightState)
 if (leftState ==='absent' ) {
  await page.getByRole('button', { name: '↺ Turn left' }).click();
  await page.getByRole('button', { name: '↟ Go forward' }).click();
   continue;
 }
 
  if (frontState ==='absent') {
    await page.getByRole('button', { name: '↟ Go forward' }).click();
    continue;
  }

  if (rightState ==='absent' ) {
    await page.getByRole('button', { name: '↻ Turn right' }).click();
    await page.getByRole('button', { name: '↟ Go forward' }).click();
    continue;
  }

 
  await page.getByRole('button', { name: '↺ Turn left' }).click();
}
 
  // await page.getByRole('button', { name: '↟ Go forward' }).click();
  // await page.getByRole('button', { name: '↻ Turn right' }).click();
  // await page.locator('td:nth-child(4)').first().click();
  // await page.getByText('>').click();
  // await page.getByText('>').click();
  // await page.getByText('>').click();
});