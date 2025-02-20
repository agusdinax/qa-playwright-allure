import { expect, type Locator, type Page } from '@playwright/test';

export class SandboxPage {
    readonly page: Page;
    readonly url: string = 'https://thefreerangetester.github.io/sandbox-automation-testing/';

    readonly dynamicIdButton = () => this.page.getByRole('button', { name: 'Hacé click para generar un ID dinámico y mostrar el elemento oculto' });
    readonly hiddenElement = () => this.page.getByText('OMG, aparezco después de 3 segundos de haber hecho click en el botón 👻.');
    readonly textInput = () => this.page.getByPlaceholder('Ingresá texto');
    readonly pastaCheckbox = () => this.page.getByLabel('Pasta 🍝');
    readonly noRadioButton = () => this.page.getByLabel('No');
    readonly dropdown = () => this.page.getByLabel('Dropdown');
    readonly weekDayButton = () => this.page.getByRole('button', { name: 'Día de la semana' });
    readonly martesOption = () => this.page.getByRole('link', { name: 'Martes' });
    readonly fileUpload = () => this.page.getByLabel('Upload file');
    readonly popupButton = () => this.page.getByRole('button', { name: 'Mostrar popup' });
    readonly popupText = () => this.page.getByText('¿Viste? ¡Apareció un Pop-up!');
    readonly popupCloseButton = () => this.page.getByRole('button', { name: 'Cerrar' });

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto(this.url);
    }

    async clickDynamicIdButton() {
        await this.dynamicIdButton().click({ force: true });
    }

    async fillTextInput(text: string) {
        await this.textInput().fill(text);
    }

    async checkPasta() {
        await this.pastaCheckbox().check();
    }

    async uncheckPasta() {
        await this.pastaCheckbox().uncheck();
    }

    async selectNoRadio() {
        await this.noRadioButton().check();
    }

    async selectDropdownOption(option: string) {
        await this.dropdown().selectOption(option);
    }

    async selectWeekDay() {
        await this.weekDayButton().click();
        await this.martesOption().click();
    }

    async uploadFiles(files: string[]) {
        await this.fileUpload().setInputFiles(files);
    }

    async clearUploadFiles() {
        await this.fileUpload().setInputFiles([]);
    }

    async clickPopupButton() {
        await this.popupButton().click();
    }

    async closePopup() {
        await this.popupCloseButton().click();
    }
}
