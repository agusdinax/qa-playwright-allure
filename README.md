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
</div>

# Playwright Automation Project with TypeScript and Allure  

## 🌍 Language | Idioma  
**[🇬🇧 English](#english) | [🇪🇸 Español](#español)**  

---

## 📌 English  

### 📖 Project Overview  
This project implements automated UI and API tests using **Playwright** with **TypeScript** as the primary language and **Allure** for generating detailed reports. 
The **Page Object Model (POM)** approach ensures organized, maintainable, and reusable test cases.  

### 🎯 Purpose  
Automate functional tests for a web application (e.g., a form at https://v0-classic-registration-form-u8ghow.vercel.app/) to validate:  
✅ Required and optional fields.  
✅ Format validations (email, phone).  
✅ Success and error messages after form submission.  

### 🛠️ Technologies Used  
- **Playwright** - Browser automation tool for UI and API testing.  
- **TypeScript** - Statically typed language for better maintainability.  
- **Allure** - Generates visual and interactive reports for test results.  
- **Node.js** - Execution environment.  

### 📂 Project Structure  
```
project-root/
├── Pages/                # POM classes for web elements
│   └── FormPage.ts       # Example: Class to interact with the form
├── tests/                # Test files
│   └── registration.spec.ts  # Form validation test cases
├── api-tests/            # API test cases
├── allure-results/       # Raw Allure results (git ignored)
├── allure-report/        # Generated HTML report (git ignored)
├── test-results/         # Playwright traces and screenshots (git ignored)
├── playwright.config.ts  # Playwright configuration
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md             # Documentation file
```

### ⚡ Installation  
Install dependencies:  
```bash
npm install
```
Install Playwright browsers:  
```bash
npx playwright install
```

### ✅ Prerequisites  
- **Node.js**: v16 or higher.  
- **Java**: v8 or higher (required for Allure CLI).  

### 🚀 Running Tests  
Run all tests:  
```bash
npm run test
# or
npx playwright test
```
Run a specific test file:  
```bash
npx playwright test tests/registration.spec.ts
```
Run tests in headed mode:  
```bash
npx playwright test --headed
```
Use Playwright's UI mode:  
```bash
npx playwright test --ui
```

### 📊 Generating Allure Reports  
Run tests and generate a report automatically:  
```bash
npm run test-and-report
```
Manually generate a report:  
```bash
npx allure generate allure-results --clean -o allure-report
```
Open the report in the browser:  
```bash
npx allure open allure-report
```

### 🔌 Recommended Plugins  
For a better development experience, install these plugins:  
1. **Playwright for Visual Studio Code**  
   - Provides Playwright snippets and useful features.  
   - Install from the [VS Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)  

2. **Playwright Test Snippets**  
   - Offers common Playwright test snippets.  
   - Install from the [VS Marketplace](https://marketplace.visualstudio.com/items?itemName=mskelton.playwright-test-snippets)  

---

## 🇪🇸 Español  

### 📖 Descripción del Proyecto  
Este proyecto implementa pruebas automatizadas de UI y API utilizando **Playwright** con **TypeScript** como lenguaje principal y **Allure** para la generación de reportes detallados. 
Se aplica el **Page Object Model (POM)** para garantizar pruebas organizadas, mantenibles y reutilizables.  

### 🎯 Propósito  
Automatizar pruebas funcionales en una aplicación web (por ejemplo, un formulario en https://v0-classic-registration-form-u8ghow.vercel.app/) para validar:  
✅ Campos obligatorios y opcionales.  
✅ Validaciones de formato (correo electrónico, teléfono).  
✅ Mensajes de éxito o error tras el envío del formulario.  

### 🛠️ Tecnologías Usadas  
- **Playwright** - Herramienta de automatización de navegadores para UI y API.  
- **TypeScript** - Lenguaje tipado estáticamente para mejor mantenibilidad.  
- **Allure** - Generación de reportes visuales e interactivos.  
- **Node.js** - Entorno de ejecución.  

### 📂 Estructura del Proyecto  
```
project-root/
├── Pages/                # Clases POM para elementos web
│   └── FormPage.ts       # Ejemplo: Clase para interactuar con el formulario
├── tests/                # Archivos de pruebas
│   └── registration.spec.ts  # Casos de prueba del formulario
├── api-tests/            # Casos de prueba para APIs
├── allure-results/       # Resultados generados por Allure (git ignored)
├── allure-report/        # Reporte HTML generado (git ignored)
├── test-results/         # Trazas y capturas de Playwright (git ignored)
├── playwright.config.ts  # Configuración de Playwright
├── package.json          # Dependencias y scripts
├── tsconfig.json         # Configuración de TypeScript
└── README.md             # Archivo de documentación
```

### ⚡ Instalación  
Instalar dependencias:  
```bash
npm install
```
Instalar navegadores de Playwright:  
```bash
npx playwright install
```

### ✅ Requisitos Previos  
- **Node.js**: v16 o superior.  
- **Java**: v8 o superior (necesario para Allure CLI).  

### 🚀 Ejecución de Pruebas  
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

### 📊 Generación de Reportes Allure  
Ejecutar pruebas y generar el reporte automáticamente:  
```bash
npm run test-and-report
```
Generar reporte manualmente:  
```bash
npx allure generate allure-results --clean -o allure-report
```
Abrir el reporte en el navegador:  
```bash
npx allure open allure-report
```

### 🔌 Plugins Recomendados  
Para una mejor experiencia de desarrollo, instala estos plugins:  
1. **Playwright para Visual Studio Code**  
   - Proporciona fragmentos de código y herramientas útiles.  
   - Instalar desde el [VS Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)  

2. **Playwright Test Snippets**  
   - Ofrece fragmentos comunes para pruebas con Playwright.  
   - Instalar desde el [VS Marketplace](https://marketplace.visualstudio.com/items?itemName=mskelton.playwright-test-snippets)  
