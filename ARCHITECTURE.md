# ARCHITECTURE

## Overview

Vue 3 portfolio website for Voikyrioh. Displays hero section, about, experience, projects gallery, skills, and contact sections. Single-page application with client-side routing (Vue Router 5).

## Directory Structure

- **`src/components/`** — Reusable UI components organized by atomic design: `atoms/` (smallest units), `molecules/` (composite components).
- **`src/pages/`** — Full-page views (Home, Project Detail); lazy-loaded via Vue Router.
- **`src/composables/`** — Vue composables for shared logic (fade-in animations, project data retrieval).
- **`src/router/`** — Vue Router configuration and route definitions.
- **`src/types/`** — TypeScript type definitions (Project interface, etc.).
- **`public/`** — Static assets (images, favicons).
- **`src/style.css`** — Global styles (Tailwind + custom CSS).

[ARCHITECTURE.md]: atoms, molecules, pages, router

## Technology Stack

- **Vue 3.5.22** — Progressive JavaScript framework, `<script setup>` SFC syntax.
- **TypeScript 5.9** — Type safety; strict mode enforced.
- **Vite (Rolldown)** — Fast dev server and production bundler.
- **Tailwind CSS 4** — Utility-first CSS framework.
- **Vue Router 5** — Client-side routing (hash-based or history).
- **Vitest 4.1** — Unit test runner; Happy DOM and jsdom adapters.
- **@Voikyrioh/vue-translate 1.0** — Custom i18n library for multi-language UI.
- **@Voikyrioh/observable 0.1.3** — Reactive data store for projects and translations.

## Deployment

Containerized via Docker + Nginx. Deployed behind Traefik proxy on production.

