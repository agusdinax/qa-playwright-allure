import { test, expect } from '@playwright/test';
import { ParabankPage } from '../Pages/ParabankPage';
import * as fs from 'fs';
import * as path from 'path';
const testData = readJsonData('001-DATA-Parabank.json');

function readJsonData(filePath: string) {
  const fullPath = path.resolve(__dirname, '..', 'Data', filePath); // Adjust path if needed
  const rawData = fs.readFileSync(fullPath, 'utf-8');
  return JSON.parse(rawData);
}

test.describe('UI Tests for Parabank Application', () => {
  let parabankPage: ParabankPage;

  test.beforeEach(async ({ page }) => {
    parabankPage = new ParabankPage(page);
    await test.step('Given that I navigate to the web page', async () => {
      await parabankPage.navigate();
    });
  });

  test('Positive Test - Successful Login @smoke', async ({ page }) => {
    const { username, password } = testData[0]; 
    await parabankPage.login(username, password);
    const welcomeMessage = await page.locator('text=Welcome');
    await expect(welcomeMessage).toBeVisible();
  });

  test('Negative Test - Invalid Credentials @smoke', async ({ page }) => {
    await parabankPage.login('invalid', 'wrongpassword');

    const errorMessage = await page.locator('text=The username and password could not be verified.');
    await expect(errorMessage).toBeVisible();
  });

  test('Positive Test - Successful Transfer @smoke', async ({ page }) => {
    const { username, password, amount, accountTo } = testData[0];
    await parabankPage.login(username, password);
    await parabankPage.transferMoney(amount, accountTo);
  
  });

  test('Positive Test - Logout functionality @smoke', async ({ page }) => {
    const { username, password } = testData[0];
    await parabankPage.login(username, password);
    await parabankPage.logout();

    const loginButton = await page.locator('input[type="submit"][value="Log In"]');
    await expect(loginButton).toBeVisible();
  });
});
