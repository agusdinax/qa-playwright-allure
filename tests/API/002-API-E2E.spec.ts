import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

const REPO = 'qa-playwright-allure';
const USER = 'agusdinax';

let apiContext;
test.beforeAll(async ({ playwright }) => {
    apiContext = await playwright.request.newContext({
        //baseURL: 'https://api.github.com',
        extraHTTPHeaders: {
            'Accept': 'application/vnd.github.v3+json',
            'Authorization': `token ${process.env.API_TOKEN}`,
        },
    });
});

test.afterAll(async ({ }) => {
    await apiContext.dispose();
});

test('The last created issue is the first in the list', async ({ page }) => {
    const newIssue = await apiContext.post(`https://api.github.com/repos/${USER}/${REPO}/issues`, {
        data: {
            title: '[Feature] The framework should iron my clothes',
        }
    });
    expect(newIssue.ok()).toBeTruthy();
    await page.goto(`https://github.com/${USER}/${REPO}/issues`);
    const firstIssue = page.locator(`a[data-hovercard-type='issue']`).first();
    await expect(firstIssue).toHaveText('[Feature] The framework should iron my clothes');
});