import { Page } from '@playwright/test';

export class ParabankPage {
  readonly page: Page;

  readonly urlParbank:string = 'https://parabank.parasoft.com/parabank/index.htm'
  readonly loginButton = () => this.page.locator('input[type="submit"][value="Log In"]');
  readonly usernameInput = () => this.page.locator('input[name="username"]');
  readonly passwordInput = () => this.page.locator('input[name="password"]');
  readonly submitButton = () => this.page.locator('button[type="submit"]');
  readonly transferMenu = () => this.page.locator('text=Transfer Funds');
  readonly transferAmountInput = () => this.page.locator('#amount');
  readonly transferAccountInput = () => this.page.locator('#toAccountId');
  readonly transferButton = () => this.page.locator('input[type="submit"][value="Transfer"]');
  readonly successMessage = () => this.page.locator('text=Transfer Successful');
  readonly errorMessage = () => this.page.locator('text=Insufficient funds');
  readonly logOutButton = () => this.page.locator('text=Log Out');

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(this.urlParbank);
  }

  async login(username: string, password: string) {
    await this.usernameInput().fill(username);
    await this.passwordInput().fill(password);
    await this.loginButton().click();
  }

  async transferMoney(amount: number, accountTo: string) {
    await this.transferMenu().click();
    await this.transferAmountInput().fill(amount.toString());
    await this.transferButton().click();
  }

  async logout() {
    await this.logOutButton().click();
  }
}
