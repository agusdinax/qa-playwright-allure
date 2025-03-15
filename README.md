<div id="header" align="center">
  <div id="badges">
    <a>
     <img src="https://img.shields.io/badge/Playwright-blue?style=for-the-badge&logo=Playwright&logoColor=white" alt="Playwright Badge"/>
    </a>
    <a>
      <img src="https://img.shields.io/badge/TypeScript-red?style=for-the-badge&logo=TypeScript&logoColor=white" alt="TypeScript Badge"/>
    </a>
    <a>
      <img src="https://img.shields.io/badge/Allure-green?style=for-the-badge&logo=Allure&logoColor=white" alt="Allure Badge"/>
    </a>
</div>

### Playwright Automation Project with TypeScript and Allure

## English

### Project Overview
This project implements automated UI tests using Playwright with TypeScript as the primary language and Allure for generating detailed reports. The approach follows the Page Object Model (POM) to keep tests organized, maintainable, and reusable.

### Purpose
Automate functional tests for a web application (e.g., a form at https://v0-classic-registration-form-u8ghow.vercel.app/) to validate behaviors such as:
- Required and optional fields.
- Format validations (email, phone).
- Success or error messages after form submission.

### Technologies Used
- **Playwright**: Browser automation tool.
- **TypeScript**: Statically typed language for better maintainability.
- **Allure**: Generates visual and interactive reports.
- **Node.js**: Execution environment.

### Project Structure
```
project-root/
├── Pages/                # POM classes for pages
│   └── FormPage.ts       # Example: Class to interact with the form
├── tests/                # Test files
│   └── registration.spec.ts  # Test cases for the form
├── allure-results/       # Allure-generated results (git ignored)
├── allure-report/        # Generated HTML report (git ignored)
├── test-results/         # Playwright traces and screenshots (git ignored)
├── playwright.config.ts  # Playwright configuration
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

### Installation
Clone the repository:
```bash
git clone <REPOSITORY_URL>
cd <PROJECT_NAME>
```
Install dependencies:
```bash
npm install
```
Install Playwright browsers:
```bash
npx playwright install
```

### Prerequisites
- **Node.js**: v16 or higher.
- **Java**: v8 or higher (required for Allure CLI).

### Running Tests
Execute all tests:
```bash
npm run test
# or
npx playwright test
```
Run a specific test file:
```bash
npx playwright test tests/registration.spec.ts
```
Run in headed mode:
```bash
npx playwright test --headed
```
Use Playwright's UI mode:
```bash
npx playwright test --ui
```

### Generating Allure Reports
Run tests and generate a report:
```bash
npm run test
```
Manually generate a report:
```bash
npx allure generate allure-results --clean -o allure-report
```
Open the report:
```bash
npx allure open allure-report
```

### Plugins to Install
For a better development experience, install the following plugins:
1. **Playwright for Visual Studio Code**  
   This plugin provides Playwright snippets and other helpful features for easier test development.
   - Install from the [VS Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

2. **Playwright Test Snippets**  
   This plugin provides common snippets for Playwright test development.
   - Install from the [VS Marketplace](https://marketplace.visualstudio.com/items?itemName=mskelton.playwright-test-snippets)

---

## Español

### Descripción del Proyecto
Este proyecto implementa pruebas automatizadas de interfaz de usuario utilizando Playwright con TypeScript como lenguaje principal y Allure para la generación de reportes detallados. El enfoque sigue el patrón Page Object Model (POM) para mantener las pruebas organizadas, mantenibles y reutilizables.

### Propósito
Automatizar pruebas funcionales en una aplicación web (por ejemplo, un formulario en https://v0-classic-registration-form-u8ghow.vercel.app/) para validar comportamientos como:
- Campos obligatorios y opcionales.
- Validaciones de formato (correo electrónico, teléfono).
- Mensajes de éxito o error tras el envío del formulario.

### Tecnologías Usadas
- **Playwright**: Herramienta de automatización de navegadores.
- **TypeScript**: Lenguaje con tipado estático para mejor mantenibilidad.
- **Allure**: Generación de reportes visuales e interactivos.
- **Node.js**: Entorno de ejecución.

### Estructura del Proyecto
```
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
```

### Instalación
Clonar el repositorio:
```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
```
Instalar dependencias:
```bash
npm install
```
Instalar navegadores de Playwright:
```bash
npx playwright install
```

### Requisitos Previos
- **Node.js**: v16 o superior.
- **Java**: v8 o superior (necesario para Allure CLI).

### Ejecución de Pruebas
Ejecutar todas las pruebas:
```bash
npm run test
# o
npx playwright test
```
Ejecutar un archivo específico:
```bash
npx playwright test tests/registration.spec.ts
```
Ejecutar en modo gráfico:
```bash
npx playwright test --headed
```
Modo UI de Playwright:
```bash
npx playwright test --ui
```

### Generación de Reportes Allure
Ejecutar pruebas y generar reporte:
```bash
npm run test-and-report
```
Generar reporte manualmente:
```bash
npx allure generate allure-results --clean -o allure-report
```
Abrir reporte:
```bash
npx allure open allure-report
```

### Plugins para Instalar
Para una mejor experiencia de desarrollo, instala los siguientes plugins:
1. **Playwright para Visual Studio Code**  
   Este plugin proporciona fragmentos de código y otras funciones útiles para el desarrollo de pruebas.
   - Instalar desde el [VS Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

2. **Playwright Test Snippets**  
   Este plugin proporciona fragmentos comunes para el desarrollo de pruebas con Playwright.
   - Instalar desde el [VS Marketplace](https://marketplace.visualstudio.com/items?itemName=mskelton.playwright-test-snippets)
