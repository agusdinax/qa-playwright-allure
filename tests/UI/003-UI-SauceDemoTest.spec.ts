import { test } from '@playwright/test';
import { SauceDemoPage } from '../Pages/SauceDemoPage';

test.describe('Automation testing on a login and shopping cart', () => {
   let sauceDemoPage: SauceDemoPage;

    test.beforeEach(async ({ page }) => {
      sauceDemoPage = new SauceDemoPage(page);
      await test.step('Given that I navigate to the web page', async () => {
      await sauceDemoPage.navigate();
      });
    });

    test('Login with valid credentials @smoke', async ({ page }) => {
      const sauceDemoPage = new SauceDemoPage(page);
      await sauceDemoPage.login('standard_user', 'secret_sauce');
      await sauceDemoPage.verifySuccessfulLogin();
    });

    test('Login with invalid credentials @smoke', async ({ page }) => {
      const sauceDemoPage = new SauceDemoPage(page);
      await sauceDemoPage.login('invalid_user', 'wrong_password');
      await sauceDemoPage.verifyLoginFailed();
    });

    test('Add product to cart @smoke', async () => {
      await sauceDemoPage.login('standard_user', 'secret_sauce');
      await sauceDemoPage.addToCart('Sauce Labs Backpack');
      await sauceDemoPage.openCart();
      await sauceDemoPage.verifyProductInCart('Sauce Labs Backpack');
    });
    
    test('Proceed to checkout and complete purchase @smoke', async () => {
      await sauceDemoPage.login('standard_user', 'secret_sauce');
      await sauceDemoPage.addToCart('Sauce Labs Backpack');
      await sauceDemoPage.openCart();
      await sauceDemoPage.proceedToCheckout();
      await sauceDemoPage.completePurchase('John', 'Doe', '12345');
    });
});