// var jq = document.createElement('script');
// jq.src = "https://code.jquery.com/jquery-3.7.1.js"
//               integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=";
// document.getElementsByTagName('head')[0].appendChild(jq);
// $('.chakra-button').click()

// $('.chakra-badge')

const { test, expect } = require('@playwright/test');


test('test', async ({ page }) => {
  await page.goto('https://showdownspace-rpa-challenge.vercel.app/challenge-hunting-fed83d58/?submitTo=https%3A%2F%2Fchallenges.showdown.space%2Fapi%2Fsubmissions%2Fsubmit&token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NjQ4OTdmYjk3MDkyZWI1Y2VjYWQwYWQiLCJ0ZWFtTmFtZSI6IuC4q-C4oeC4ueC5gOC4lOC5ieC4hyIsImNoYWxsZW5nZUlkIjo0LCJjaGFsbGVuZ2VDb2RlbmFtZSI6IjFfaHVudGluZyIsImV4cCI6MTczMjE0ODEyMSwiaXNzIjoiaHR0cHM6Ly9zaG93ZG93bi5zcGFjZS9ldmVudHMvYnJvd3Nlci1hdXRvbWF0aW9uLWNoYWxsZW5nZXMvIiwiYXVkIjoic3VibWl0dGVyIn0.sfRnaHyOwNACbZ20OUiRsxsfhEYCvC-ZZuuPYMP8FT4&reportTo=wss%3A%2F%2Fchallenges-progress-reporter.showdown.space');
  await page.getByRole('button', { name: 'Start challenge' }).click();
  const badges = await page.locator('.chakra-badge');
  const a = []

  // Get the total number of badges
  const badgeCount = await badges.count();
  
  // Loop through each badge
  for (let i = 0; i < badgeCount; i++) {
    // Get the text of the current badge
    const badgeText = await badges.nth(i).textContent();
    a.push(badgeText)
    console.log(`Badge ${i + 1}: ${badgeText}`);
  }


  // hover
  const allImages = await page.locator("img")
const imgCount = await allImages.count()

  for (let i = 0; i < imgCount; i++) {
    const node = allImages.nth(i)
    // const content = //todo
await node.hover();
const lastDiv = await page.locator('body > div:last-of-type');

// Get the text content of the last div (if needed)
const lastDivText = await lastDiv.textContent();
    if (a.includes(lastDivText)) {
      node.click()
    }
  }
  // await page.getByText('50916').click();
  // await page.getByText('28172').click();
  // await page.locator('div:nth-child(4) > img').click();
});

