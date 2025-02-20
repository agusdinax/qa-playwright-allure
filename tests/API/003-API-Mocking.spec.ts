import { test, expect } from '@playwright/test';

test("Mocks a fruit that does not come from the real API", async ({ page }) => {
    //MOCKING THE API BEFORE NAVIGATION 
    await page.route('*/**/api/v1/fruits', async route => {
        const json = [{ name: 'Peach', id: 26 }];
        await route.fulfill({ json });
    });
    await page.goto('https://demo.playwright.dev/api-mocking');
    await expect(page.getByText('Peach')).toBeVisible();
});

test('Fetches the real response and adds something not so real', async ({ page }) => {
    //ADDS SOMETHING NEW TO THE REAL RESPONSE
    await page.route('*/**/api/v1/fruits', async route => {
        const response = await route.fetch();
        const json = await response.json();
        json.push({ name: 'Lionel Messi', id: 200 });
        await route.fulfill({ response, json });
    });
    await page.goto('https://demo.playwright.dev/api-mocking');
    await expect(page.getByText('Lionel Messi', { exact: true })).toBeVisible();
});
