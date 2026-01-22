# Este es un desarrollo de Playwright API Automatización
# This is Playwright API Automation Framework Project


# Descripcion about this project
# Descripcion del proyecto

Framework de automatización de APIs REST construido con **Playwright + TypeScript**, enfocado en pruebas funcionales, negativas y buenas prácticas de testing backend.

Este proyecto fue diseñado con un enfoque real de industria, priorizando estabilidad, claridad y mantenibilidad.

---

## Tecnologia y metodos usados
## Techology in this project

- Playwright (@playwright/test)
- TypeScript
- Node.js
- API REST
- Testing funcional y negativo
- Diseño orientado a reutilización

---

## API bajo prueba
## Test API

Fake Store API
https://fakestoreapi.com

Se eligió esta API porque:

- Es pública
- No bloquea automatización server-side
- Es estable para CI/CD
- Permite escenarios reales de testing

---

##  Estructura del Proyecto
## Project Structure

playwright-api-automation/
├── tests/
│   ├── products.spec.ts            # Tests positivos
│   └── products.negative.spec.ts   # Tests negativos
│
├── core/
│   └── apiClient.ts                # Cliente reutilizable para tests positivos
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md


---

## Escenarios
## Scenarios

Escenarios Positivos:
- Obtener listado de productos
- Crear un producto exitosamente

Escenarios Negativos:
- Endpoint inexistente (404)
- Creación de producto con campos incompletos
- Eliminación de recurso inexistente

---

## Instalación
## Instalation

- npm install

---

## Ejecución de Pruebas
## Test Execution

- npx playwright test

---

## Autor
Leonardo Jasiel Reyes Horta
