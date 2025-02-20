Aquí tienes un ejemplo de un archivo README.md para un proyecto de Playwright con Allure en TypeScript. Incluye información sobre el propósito del proyecto, el uso del Page Object Model (POM), la integración con Allure, cómo ver reportes, y una lista de comandos útiles, incluyendo --ui.
Proyecto de Automatización con Playwright, TypeScript y Allure
Este proyecto implementa pruebas automatizadas de interfaz de usuario usando Playwright con TypeScript como lenguaje principal y Allure para la generación de reportes detallados. El enfoque sigue el patrón Page Object Model (POM) para mantener las pruebas organizadas, mantenibles y reutilizables.
Propósito
Automatizar pruebas funcionales en una aplicación web (por ejemplo, un formulario en https://v0-classic-registration-form-u8ghow.vercel.app/) para validar comportamientos como:
Campos obligatorios y no obligatorios.
Validaciones de formato (email, teléfono).
Mensajes de éxito o error tras el envío del formulario.
Tecnologías
Playwright: Herramienta de automatización de navegadores.
TypeScript: Lenguaje para tipado estático y mejor mantenibilidad.
Allure: Generación de reportes visuales e interactivos.
Node.js: Entorno de ejecución.
Estructura del Proyecto
project-root/
├── Pages/                # Clases POM para las páginas
│   └── FormPage.ts       # Ejemplo: Clase para interactuar con el formulario
├── tests/                # Archivos de pruebas
│   └── registration.spec.ts  # Casos de prueba para el formulario
├── allure-results/       # Resultados generados por Allure (git ignored)
├── allure-report/        # Reporte HTML generado (git ignored)
├── test-results/         # Trazas y capturas de Playwright (git ignored)
├── playwright.config.ts  # Configuración de Playwright
├── package.json          # Dependencias y scripts
├── tsconfig.json         # Configuración de TypeScript
└── README.md             # Este archivo
Page Object Model (POM)
Este proyecto usa el patrón POM para encapsular la lógica de interacción con las páginas web:
Ubicación: Las clases POM están en la carpeta Pages/.
Ejemplo: FormPage.ts contiene métodos como fillName(), submitForm(), y expectErrorForField() para interactuar con un formulario.
Ventajas:
Código reutilizable.
Separación de lógica de pruebas y elementos de la UI.
Fácil mantenimiento si la UI cambia.
Instalación
Clona el repositorio:
bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
Instala las dependencias:
bash
npm install
Instala los navegadores de Playwright:
bash
npx playwright install
Requisitos previos
Node.js: v16 o superior.
Java: v8 o superior (necesario para Allure CLI).
Configuración
El archivo playwright.config.ts define las opciones de ejecución:
Carpeta de pruebas: ./tests.
Reporteros: 'line' (consola) y 'allure-playwright' (Allure).
Navegadores: Chromium por defecto.
Base URL: https://v0-classic-registration-form-u8ghow.vercel.app/.
Ejemplo de configuración:
typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  reporter: [['line'], ['allure-playwright', { outputFolder: 'allure-results' }]],
  use: {
    baseURL: 'https://v0-classic-registration-form-u8ghow.vercel.app/',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on',
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
  ],
});
Uso del Proyecto
Comandos más utilizados
Ejecución de pruebas
Correr todas las pruebas:
bash
npm run test
# o
npx playwright test
Correr un archivo específico:
bash
npx playwright test tests/registration.spec.ts
Correr con interfaz gráfica:
bash
npx playwright test --headed
Modo UI de Playwright:
Usa la interfaz gráfica de Playwright para explorar y ejecutar pruebas:
bash
npx playwright test --ui
Abre una UI en el navegador donde puedes:
Ver y filtrar pruebas.
Ejecutarlas individualmente.
Depurar con inspector.
Generación de reportes con Allure
Correr pruebas y generar reporte:
bash
npm run test-and-report
Este script:
Ejecuta las pruebas (npx playwright test).
Genera el reporte (npx allure generate).
Abre el reporte (npx allure open).
Generar reporte manualmente:
bash
npx allure generate allure-results --clean -o allure-report
Abrir reporte:
bash
npx allure open allure-report
Limpieza
Limpiar caché y resultados:
bash
npm run clean
Elimina node_modules, test-results, allure-results, allure-report, y el caché de npm.
Instalar desde cero:
bash
npm run install-fresh
Depuración
Depurar paso a paso:
bash
npx playwright test --debug
Ver salida en consola:
bash
npx playwright test --reporter=line
Scripts en package.json
json
{
  "scripts": {
    "test": "npx playwright test",
    "test-ui": "npx playwright test --ui",
    "clean": "rm -rf node_modules package-lock.json test-results allure-results allure-report && npm cache clean --force",
    "install-fresh": "npm run clean && npm install && npx playwright install",
    "generate-report": "npx allure generate allure-results --clean -o allure-report",
    "open-report": "npx allure open allure-report",
    "test-and-report": "npm run test && npm run generate-report && npm run open-report"
  }
}
Integración con Allure
Allure se integra como reportero en Playwright para generar reportes detallados:
Configuración: Definida en playwright.config.ts con 'allure-playwright'.
Resultados: Guardados en allure-results tras ejecutar las pruebas.
Generación: Convertidos a HTML con npx allure generate.
Visualización: Abiertos con npx allure open.
Ver los reportes
Después de correr npm run test-and-report, el reporte se abre automáticamente en tu navegador (e.g., http://localhost:XXXX).
Si no se abre, usa:
bash
npx allure open allure-report
El reporte muestra:
Lista de pruebas con estado (passed, failed, skipped).
Pasos detallados (test.step).
Capturas y trazas (si habilitadas).
Ejemplo de prueba
typescript
// tests/registration.spec.ts
import { test } from '@playwright/test';
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
    await test.step('Given that I do not fill any mandatory fields', async () => {});
    await test.step('When I try to submit the form', async () => {
      await formPage.submitForm();
    });
    await test.step('Then I see errors in the mandatory fields', async () => {
      await formPage.expectErrorForField('El nombre debe tener al menos 2 caracteres.');
    });
  });
});
Notas
POM: Las clases en Pages/ encapsulan localizadores y métodos, haciendo las pruebas más legibles.
Allure: Requiere Java para npx allure generate. Verifica con java -version.
TypeScript: Usa tsconfig.json para configurar el compilador:
json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "rootDir": "./",
    "outDir": "./dist",
    "esModuleInterop": true
  },
  "include": ["./tests/**/*.ts", "./Pages/**/*.ts"]
}
Solución de problemas
Reporte Allure "unknown":
Limpia: rm -rf allure-results allure-report.
Re-ejecuta: npm run test-and-report.
Pruebas no corren: Verifica localizadores en FormPage.ts con el HTML real.
Errores de caché: Usa npm run clean y reinstala.
Este README cubre lo esencial para empezar, ejecutar, y mantener el proyecto. ¿Te gustaría que añada algo más, como ejemplos específicos del formulario o detalles de CI/CD? ¡Avísame!