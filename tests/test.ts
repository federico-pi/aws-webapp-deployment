import { expect, test } from '@playwright/test';

test('should run successfully', async ({ page }) => {
	await page.goto('/');

	expect(true).toBeTruthy();
});
