import { test, expect } from "../fixtures/test.js";

test("Google search", async ({ page }) => {
  await test.step("Navigate to Google and perform search", async () => {
    await page.goto("https://google.com");
  });
  await test.step("Fill search query and submit", async () => {
    await page.locator('textarea[name="q"]').fill("Playwright");
  });
  await test.step("Press Enter and verify title", async () => {
    await page.keyboard.press("Enter");
  });
  await test.step("Verify the page title contains 'Playwright'", async () => {
    await expect(page).toHaveTitle(/Playwright/);
  });
});

test("Google search - Intentional Failure", async ({ page }) => {
  await test.step("Navigate to Google and perform search", async () => {
    await page.goto("https://google.com");
  });
  await test.step("Fill search query and submit", async () => {
    await page.locator('textarea[name="q"]').fill("Playwright");
  });
  await test.step("Press Enter and verify title", async () => {
    await page.keyboard.press("Enter");
  });
  await test.step("Intentional wrong assertion to trigger failure", async () => {
    await expect(page).toHaveTitle("This Title Does Not Exist");
  });
});
