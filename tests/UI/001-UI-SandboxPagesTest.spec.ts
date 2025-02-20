import { test, Browser, Page, expect } from '@playwright/test';
import { SandboxPage } from '../Pages/SandboxPage';

(async () => {
    let browser: Browser;
    let page: Page;
    let textoAEscribir = 'Hello, this is a text and I am learning to use Playwright! 🚀';

    test.describe('Automated tests are performed with Playwright to validate the UI', () => {
        let sandbox: SandboxPage;

        //BEFORE EACH NAVEGO A LA PAGINA
        test.beforeEach(async ({ page }) => {
            sandbox = new SandboxPage(page);
            await test.step('Given that I navigate to the web page', async () => {
                await sandbox.navigate();
            });
        });

        test('Click on dynamic ID button', async () => {
            await test.step('I can click on the button with the dynamic ID', async () => {
                await sandbox.clickDynamicIdButton();
                await expect(sandbox.hiddenElement()).toBeVisible();
            });
        });

        test('I fill in a text field', async () => {
            await test.step('I can enter text in the field', async () => {
                await expect(sandbox.textInput()).toBeEditable();
                await sandbox.fillTextInput(textoAEscribir);
                await expect(sandbox.textInput()).toHaveValue(textoAEscribir);
            });
        });

        test('I can check and uncheck a checkbox', async () => {
            await test.step('I can check the checkbox for Pasta', async () => {
                await sandbox.checkPasta();
                await expect(sandbox.pastaCheckbox()).toBeChecked();
            });
            await test.step('I can uncheck the Pasta checkbox', async () => {
                await sandbox.uncheckPasta();
                await expect(sandbox.pastaCheckbox()).not.toBeChecked();
            });
        });

        test('I can select radio buttons', async () => {
            await test.step('I can select the radio button for NO', async () => {
                await sandbox.selectNoRadio();
                await expect(sandbox.noRadioButton()).toBeChecked();
            });
        });

        test('I can select an item from the dropdown', async () => {
            await test.step('Select an sport from the dropdown', async () => {
                await sandbox.selectDropdownOption('Tennis');
            });
        });

        test('I can verify that the items from the dropdown are the correct ones', async ({ page }) => {
            await test.step('Validate list from the dropdown', async () => {
                const deportes = ['Fútbol', 'Tennis', 'Basketball', 'Yoga'];
                for (let opcion of deportes) {
                    const element = await page.$(`select#formBasicSelect > option:is(:text("${opcion}"))`);
                    if (!element) {
                        throw new Error(`The option '${opcion}' is not present.`);
                    }
                }
            });
        });

        test('Validate column "NAME" from the static table', async ({ page }) => {
            await test.step('Validate column "NAME', async () => {
                const valoresColumnaNombres = await page.$$eval(
                    'h2:has-text("Tabla estática") + table tbody tr td:nth-child(2)',
                    elements => elements.map(element => element.textContent)
                );
                const nombresEsperados = ['Messi', 'Ronaldo', 'Mbappe'];
                await test.info().attach('screenshot', {
                    body: await page.screenshot(),
                    contentType: 'image/png',
                });
                expect(valoresColumnaNombres).toEqual(nombresEsperados);
            });
        });

        test('I validate dynamic table values after reload.', async ({ page }) => {
            await test.step('Validate dynamic table values after reload', async () => {
                const valoresTablaDinamica = await page.$$eval(
                    'h2:has-text("Tabla dinámica") + table tbody tr td',
                    elements => elements.map(element => element.textContent)
                );
                await page.reload();
                const valoresPostReload = await page.$$eval(
                    'h2:has-text("Tabla dinámica") + table tbody tr td',
                    elements => elements.map(element => element.textContent)
                );
                expect(valoresTablaDinamica).not.toEqual(valoresPostReload);
            });
        });

        test('Soft Assertions', async () => {
            await test.step('Validate checkboxes', async () => {
                await expect.soft(sandbox.page.getByText('Pizza 🍕')).toBeVisible();
                await expect.soft(sandbox.page.getByText('Hamburguesa 🍔')).toBeVisible();
                await expect.soft(sandbox.page.getByText('Pasta 🍝')).toBeVisible();
                await expect.soft(sandbox.page.getByText('Helado 🍧')).toBeVisible();
                await expect.soft(sandbox.page.getByText('Torta 🍰')).toBeVisible();
            });
        });

        test('I can select a day from the week dropdown', async () => {
            test.info().annotations.push({
                type: 'bug',
                description: 'Hello this is to inform you '
            })
            await test.step('Select a day from the dropdown', async () => {
                await sandbox.selectWeekDay();
            });
        });

        test.fixme('I can upload files - IN PROCESS', async () => {
            await test.step('Adding files', async () => {
                await sandbox.uploadFiles(['pathAlArchivo.pdf', 'Invoice1.pdf', 'Invoice2.pdf']);
                await sandbox.clearUploadFiles();
            });
        });

        test('Validating within a popup.', async () => {
            await test.step('Click on the popup button.', async () => {
                await sandbox.clickPopupButton();
            });
            await test.step('Validate element in the popup', async () => {
                await expect(sandbox.popupText()).toHaveText('¿Viste? ¡Apareció un Pop-up!');
                await sandbox.closePopup();
            });
        });
    });
})();