import { test, expect } from "@playwright/test";

test.beforeEach(async ({}, testInfo) => {
  test.setTimeout(120000);
});
test("test", async ({ page }) => {
  await page.goto(
    "https://showdownspace-rpa-challenge.vercel.app/challenge-buttons-a9808c5e/"
  );
  await page.getByRole("button", { name: "Start challenge" }).click();

  for (let j = 0; j < 100; j++) {
    const problem = await page.locator(".chakra-text").first().textContent();
    console.log(problem);
    const [a, operand, b] = problem.split(" ");
    const first = parseInt(a.replace(/,/g, "").trim(), 10);
    const second = parseInt(b.replace(/,/g, "").trim(), 10);
    console.log(first, second);

    let result =
      operand === "+"
        ? (first + second)
        : operand === "-"
        ? (first - second)
        : operand === "×"
        ? (BigInt(first) * BigInt(second))
        : (first / second);
    console.log(result);
result = result.toString()
    for (let i = 0; i < result.length; i++) {
      // console.log("click", result[i]);

      await page.getByRole("button", { name: result[i] }).click();
    }
    await page.getByRole("button", { name: "Submit" }).click();
  }

  // const regx = new RegExp(/(\d+|[+])/g)

  // const parts = regx.match(problem); // Match numbers (\d+) or the "+" sign
  // console.log(parts); // Output: ["9", "+", "12"]
  // await page.getByRole('paragraph').nth(1).click();
  // await page.getByRole('button', { name: '7' }).click();
  // await page.getByRole('button', { name: '8' }).click();
  // await page.getByRole('button', { name: '8' }).click();
  // await page.getByRole('button', { name: '4' }).click();
  // await page.locator('#root div').filter({ hasText: 'Question #116 + 6 = ? 7,' }).nth(3).click();
  // await page.getByRole('button', { name: 'Submit' }).click();
});
