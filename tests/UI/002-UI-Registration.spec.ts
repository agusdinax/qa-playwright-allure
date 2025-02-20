import { test, expect } from '@playwright/test';
import { FormPage } from '../Pages/FormPage';

test.describe('Automation testing on a form', () => {
    let formPage: FormPage;

    test.beforeEach(async ({ page }) => {
        formPage = new FormPage(page);
        await test.step('Given that I navigate to the web page', async () => {
            await formPage.navigate();
        });
    });

    test('Empty mandatory fields prevent form submission', async () => {
        await test.step('Given that I do not fill any mandatory fields', async () => {
            //LEAVE ALL INPUTS EMPTY
        });
        await test.step('When I try to submit the form', async () => {
            await formPage.submitForm();
        });
        await test.step('Then I see errors in the mandatory fields', async () => {
            await formPage.expectErrorForField('El nombre debe tener al menos 2 caracteres.');
            await formPage.expectErrorForField('El apellido debe tener al menos 2 caracteres.');
            await formPage.expectErrorForField('Ingrese un email válido.');
            await formPage.expectErrorForField('Ingrese un número de teléfono válido.');
            await formPage.expectErrorForField('La dirección debe tener al menos 5 caracteres.');
            await formPage.expectErrorForField('Ingrese una ciudad válida.');
            await formPage.expectErrorForField('Este campo es obligatorio.'); 
        });
    });

    test('Empty non-mandatory fields allow form submission', async () => {
        await test.step('Given that I fill only the mandatory fields', async () => {
            await formPage.fillName('Juan');
            await formPage.fillLastname('Pérez');
            await formPage.fillEmail('juan@example.com');
            await formPage.fillPhone('1234567890');
            await formPage.fillAddress('Calle False 123');
            await formPage.fillCity('Tandil');
            await formPage.fillPhone('1234567890');
            await formPage.fillInterests('Programming');
        });
        await test.step('When I submit the form', async () => {
            await formPage.submitForm();
        });
        await test.step('Then I see a success message', async () => {
            await formPage.expectSuccessMessage();
        });
    });

    test('Invalid email format shows an error', async () => {
        await test.step('Given that I fill the email with an invalid format', async () => {
            await formPage.fillName('Juan');
            await formPage.fillLastname('Pérez');
            await formPage.fillEmail('invalid-email');
            await formPage.fillPhone('1234567890');
            await formPage.fillInterests('Programming');
        });
        await test.step('When I try to submit the form', async () => {
            await formPage.submitForm();
        });
        await test.step('Then I see an error in the email field', async () => {
            await formPage.expectErrorForField('Ingrese un email válido.');
        });
    });

    test('Phone with letters shows an error', async () => {
        await test.step('Given that I fill the phone with letters', async () => {
            await formPage.fillName('Juan');
            await formPage.fillLastname('Pérez');
            await formPage.fillEmail('juan@example.com');
            await formPage.fillPhone('abcde');
            await formPage.fillInterests('Programming');
        });
        await test.step('When I try to submit the form', async () => {
            await formPage.submitForm();
        });
        await test.step('Then I see an error in the phone field', async () => {
            await formPage.expectErrorForField('Ingrese un número de teléfono válido.');
        });
    });

    test('Complete form with valid data shows success', async () => {
        await test.step('Given that I fill all fields with valid data', async () => {
            await formPage.fillName('Juan');
            await formPage.fillLastname('Pérez');
            await formPage.fillEmail('juan@example.com');
            await formPage.fillPhone('1234567890');
            await formPage.fillAddress('Calle Falsa 123');
            await formPage.fillCity('Buenos Aires');
            await formPage.fillInterests('Programming');
        });
        await test.step('When I submit the form', async () => {
            await formPage.submitForm();
        });
        await test.step('Then I see a success message', async () => {
            await formPage.expectSuccessMessage();
        });
    });

    test('Individual mandatory field empty shows error', async () => {
        await test.step('Given that I leave the name field empty', async () => {
            await formPage.fillLastname('Pérez');
            await formPage.fillEmail('juan@example.com');
            await formPage.fillPhone('1234567890');
            await formPage.fillInterests('Programming');
        });
        await test.step('When I try to submit the form', async () => {
            await formPage.submitForm();
        });
        await test.step('Then I see an error only in the name field', async () => {
            await formPage.expectErrorForField('El nombre debe tener al menos 2 caracteres.');
            await expect(formPage.errorMessage('Ingrese un email válido.')).not.toBeVisible();
            await expect(formPage.errorMessage('Ingrese un número de teléfono válido.')).not.toBeVisible();
        });
    });
});