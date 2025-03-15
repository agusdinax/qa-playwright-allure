import { Page, expect } from '@playwright/test';

export class SauceDemoPage {
  readonly page: Page;
  readonly url: string = 'https://www.saucedemo.com/';
  readonly usernameInput = () => this.page.locator('#user-name');
  readonly passwordInput = () => this.page.locator('#password');
  readonly loginButton = () => this.page.locator('#login-button');
  readonly errorMessage = () => this.page.locator('[data-test="error"]');
  readonly title = () => this.page.locator('.title');
  readonly cartLink = () => this.page.locator('.shopping_cart_link');
  readonly checkoutButton = () => this.page.locator('[data-test="checkout"]');
  readonly firstNameInput = () => this.page.locator('[data-test="firstName"]');
  readonly lastNameInput = () => this.page.locator('[data-test="lastName"]');
  readonly postalCodeInput = () => this.page.locator('[data-test="postalCode"]');
  readonly continueButton = () => this.page.locator('[data-test="continue"]');
  readonly finishButton = () => this.page.locator('[data-test="finish"]');
  readonly completeHeader = () => this.page.locator('.complete-header');

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(this.url);
  }
  
  async login(username: string, password: string) {
    await this.usernameInput().fill(username);
    await this.passwordInput().fill(password);
    await this.loginButton().click();
  }

  async verifySuccessfulLogin() {
    await expect(this.title()).toHaveText('Products');
  }

  async verifyLoginFailed() {
    await expect(this.errorMessage()).toBeVisible();
  }

  async addToCart(productName: string) {
    const productLocator = this.page.locator(`text=${productName}`).locator('xpath=ancestor::div[contains(@class, "inventory_item")]');
    await productLocator.locator('button').click();
  }

  async openCart() {
    await this.cartLink().click();
  }

  async verifyProductInCart(productName: string) {
    await expect(this.page.locator('.cart_item .inventory_item_name')).toHaveText(productName);
  }

  async proceedToCheckout() {
    await this.checkoutButton().click();
  }

  async completePurchase(firstName: string, lastName: string, postalCode: string) {
    await this.firstNameInput().fill(firstName);
    await this.lastNameInput().fill(lastName);
    await this.postalCodeInput().fill(postalCode);
    await this.continueButton().click();
    await this.finishButton().click();
    await expect(this.completeHeader()).toHaveText('Thank you for your order!');
  }
}
