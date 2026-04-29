import { allure } from "allure-playwright";
import fs from "fs";

export async function attachOnFailure(page, testInfo) {
  if (testInfo.status !== testInfo.expectedStatus) {
    const screenshot = await page.screenshot({ fullPage: true });
    await allure.attachment("Screenshot", screenshot, "image/png");

    if (page.video()) {
      const videoPath = await page.video().path();
      const video = fs.readFileSync(videoPath);
      await allure.attachment("Video", video, "video/webm");
    }
  }
}
