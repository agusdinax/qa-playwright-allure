import { Page, expect } from '@playwright/test';

export class FormPage {
    readonly page: Page;
    readonly url: string = 'https://v0-classic-registration-form-u8ghow.vercel.app/';

    readonly nameField = () => this.page.getByRole('textbox', { name: 'Nombre *' })
    readonly lastnameField = () => this.page.getByRole('textbox', { name: 'Apellido *' })
    readonly emailField = () => this.page.getByRole('textbox', { name: 'Email *' })
    readonly phoneField = () => this.page.getByRole('textbox', { name: 'Teléfono *' })
    readonly addressField = () => this.page.getByRole('textbox', { name: 'Dirección *' })
    readonly cityField = () => this.page.getByRole('textbox', { name: 'Ciudad *' })
    readonly postalCode = () => this.page.getByRole('textbox', { name: 'Codigo Postal' })
    readonly pais = () => this.page.getByRole('textbox', { name: 'País' })
    readonly profesion = () => this.page.getByRole('textbox', { name: 'Profesión' })
    readonly interestsField = () => this.page.getByRole('textbox', { name: 'Intereses' })
    readonly submitButton = () => this.page.getByRole('button', { name: 'Enviar Registro' });

    readonly errorMessage = (errorText: string) => this.page.getByText(errorText);
    readonly successMessage = () => this.page.getByText('¡Registro exitoso!');

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto(this.url);
    }

    async fillName(name: string) {
        await this.nameField().fill(name);
    }

    async fillLastname(lastname: string) {
        await this.lastnameField().fill(lastname);
    }

    async fillEmail(email: string) {
        await this.emailField().fill(email);
    }

    async fillPhone(phone: string) {
        await this.phoneField().fill(phone);
    }

    async fillAddress(address: string) {
        await this.addressField().fill(address);
    }

    async fillCity(city: string) {
        await this.cityField().fill(city);
    }

    async fillPostalCode(code: string) {
        await this.postalCode().fill(code);
    }

    async fillPais(pais: string) {
        await this.pais().fill(pais);
    }

    async fillProfesion(profesion: string) {
        await this.profesion().fill(profesion);
    }

    async fillInterests(interests: string) {
        await this.interestsField().fill(interests);
    }

    async submitForm() {
        await this.submitButton().click();
    }

    async expectErrorForField(errorText: string) {
        await expect(this.errorMessage(errorText)).toBeVisible();
    }

    async expectSuccessMessage() {
        await expect(this.successMessage()).toBeVisible();
    }
}
