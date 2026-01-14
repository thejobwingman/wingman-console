![The Job Wingman Logo](./public/logo.png)

# Wingman Console

**Wingman Console** is the internal dashboard application for **The Job Wingman** platform.

It is used by coaches and administrators to review client intake submissions, manage workflows, and prepare job-search materials. This app is not public-facing and is intended for authenticated internal use only.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)

## Local Development

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

## Testing

This project uses **Vitest** and **React Testing Library**.

Run the test suite:

```bash
npm test
```

Run tests in watch mode during development:

```bash
npm run test:watch
```

Build the application (used in CI/CD):

```bash
npm run build
```

## Versioning

This project follows [Semantic Versioning](https://semver.org/) while in active development.

During the `0.x` phase, minor versions may include breaking changes as the product evolves toward a stable MVP.
