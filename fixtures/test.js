import { test as base } from "@playwright/test";
import { attachOnFailure } from "../utils/hooks.js";

export const test = base.extend({});

test.afterEach(async ({ page }, testInfo) => {
  await attachOnFailure(page, testInfo);
});

export { expect } from "@playwright/test";
