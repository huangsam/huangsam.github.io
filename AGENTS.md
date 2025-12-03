# AGENTS.md

This document describes the main agents, modules, and automation logic present in this project, based on the contents of `src/`, `static/`, `tests/`, and `package.json`.

---

## Overview
This project is a SvelteKit-based personal portfolio and showcase, featuring interactive components, automated testing, and static assets for branding and presentation.

---

## Agents & Modules

### 1. UI Components (`src/lib/components`)

Reusable Svelte components for modals, skill visualization, quotes, and GitHub integration.

### 2. Data & Logic (`src/lib`)

Centralized modules for profile data, skills, travel history, employment info, API utilities, and navigation logic.

### 3. Routes (`src/routes`)

SvelteKit route handlers and layouts for page rendering, structure, error handling, and interactive features (e.g., dynamic backgrounds).

### 4. Static Assets (`static/`)

Fonts, icons, and deployment files for branding, typography, and GitHub Pages configuration.

### 5. Tests (`tests/`, `src/lib/pages/`, `src/lib/utils/`)

Unit and end-to-end test specifications for core features, logic, and UI components.

---

## Automation & Scripts (package.json)

- **dev, build, preview**: Agents for local development, building, and previewing the site.
- **test**: Agent for running tests in watch mode (continuous).
- **test run**: Agent for running tests a single time (non-watch).
- **test:e2e, report:e2e**: Agents for running end-to-end tests and viewing reports.
- **lint, format, check**: Agents for code quality, formatting, and type checking.
- **github**: Agent for deploying to GitHub Pages.

---

## Summary

This project leverages modular agents for UI, data, automation, and testing, providing a robust and interactive personal portfolio experience. Each agent is designed for maintainability, extensibility, and clarity.
