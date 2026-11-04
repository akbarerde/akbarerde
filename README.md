<div align="center">

# ERDE

**The akbarerde starter — a compact, zinc-accented TanStack Start monorepo powered by shadcn/ui.**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=06181f)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Nova-000000?style=flat-square)](https://ui.shadcn.com)
[![pnpm](https://img.shields.io/badge/pnpm-11-F69220?style=flat-square&logo=pnpm&logoColor=white)](https://pnpm.io)
[![Turborepo](https://img.shields.io/badge/Turborepo-2-EF4444?style=flat-square)](https://turborepo.com)

[![Last commit](https://img.shields.io/github/last-commit/akbarerde/akbarerde?style=flat-square)](https://github.com/akbarerde/akbarerde/commits/main)
[![Repo size](https://img.shields.io/github/repo-size/akbarerde/akbarerde?style=flat-square)](https://github.com/akbarerde/akbarerde)

[Design System](./docs/DESIGN.md) · [Getting Started](#getting-started) · [Scripts](#scripts) · [Project Structure](#project-structure)

</div>

---

## Overview

`akbarerde` is a pnpm + Turborepo monorepo for building the ERDE interface. It pairs **TanStack Start** for SSR and file-based routing with a shared **shadcn/ui** package, so every app uses the same components and design tokens.

The starter includes a gallery at [`/components`](http://localhost:3000/components) that renders every installed shadcn/ui component with live, interactive examples. The visual system behind it lives in [`docs/DESIGN.md`](./docs/DESIGN.md).

## Tech stack

| Layer         | Technology                                                                                     | Notes                                                |
| ------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| App framework | [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router)  | SSR, file-based routes                               |
| UI            | [React 19](https://react.dev)                                                                  |                                                      |
| Language      | [TypeScript 6](https://www.typescriptlang.org)                                                 | Strict mode                                          |
| Styling       | [Tailwind CSS v4](https://tailwindcss.com)                                                     | CSS-first theme tokens                               |
| Components    | [shadcn/ui](https://ui.shadcn.com) Nova + [Base UI](https://base-ui.com)                       | Shared in `packages/ui`                              |
| Icons         | [Lucide](https://lucide.dev)                                                                   |                                                      |
| Fonts         | Geist + Bricolage Grotesque                                                                    | Self-hosted via [Fontsource](https://fontsource.org) |
| Tooling       | [pnpm 11](https://pnpm.io) + [Turborepo 2](https://turborepo.com) + [Vite 8](https://vite.dev) |                                                      |
| Quality       | ESLint + Prettier                                                                              |                                                      |

## Requirements

- Node.js **22.12+**
- pnpm **11.25** via Corepack
- Git

## Getting started

```bash
git clone https://github.com/akbarerde/akbarerde.git
cd akbarerde
corepack enable
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The home page links to `/components`, where all 63 components are rendered with live examples.

To run only the web app:

```bash
pnpm --filter web dev
```

## Scripts

| Command          | Description                                          |
| ---------------- | ---------------------------------------------------- |
| `pnpm dev`       | Start all dev tasks; the web app runs on port `3000` |
| `pnpm build`     | Build all apps and packages                          |
| `pnpm lint`      | Run ESLint across the workspace                      |
| `pnpm typecheck` | Run TypeScript checks                                |
| `pnpm format`    | Format TS/TSX sources with Prettier                  |

## Project structure

```text
akbarerde/
├─ apps/
│  └─ web/
│     ├─ src/routes/          # File-based routes
│     ├─ src/router.tsx       # TanStack Router setup
│     └─ vite.config.ts
├─ packages/
│  └─ ui/
│     ├─ src/components/      # shadcn/ui components
│     ├─ src/lib/             # cn() and shared utilities
│     └─ src/styles/globals.css
├─ docs/
│  └─ DESIGN.md               # Design system, tokens, and component rules
├─ turbo.json
├─ pnpm-workspace.yaml
└─ package.json
```

## Design system

The full design system is documented in [`docs/DESIGN.md`](./docs/DESIGN.md). It covers the `bcivVNCa` shadcn/ui preset, light/dark tokens, typography, component rules, accessibility, and known gaps.

| Role        | Token                  | Value                        |
| ----------- | ---------------------- | ---------------------------- |
| Canvas      | `--background`         | `oklch(1 0 0)`               |
| Ink         | `--foreground`         | `oklch(0.141 0.005 285.823)` |
| Accent      | `--primary`            | `oklch(0.21 0.006 285.885)`  |
| Accent text | `--primary-foreground` | `oklch(0.985 0 0)`           |
| Radius      | `--radius`             | `0.625rem`                   |
| Body        | `--font-sans`          | Geist Variable               |
| Heading     | `--font-heading`       | Bricolage Grotesque Variable |

The zinc preset is monochrome: `--primary` is near-black in light mode and near-white in dark mode, so primary text passes contrast in both themes. The remaining gaps — the light-mode focus ring and low-contrast `chart-1` — are documented in `DESIGN.md`.

### Adding shadcn/ui components

Run the CLI from the repository root:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

Components are installed into `packages/ui/src/components`, not directly into the app.

### Importing components

```tsx
import { Button } from "@workspace/ui/components/button"
```

The UI package is exposed through the `@workspace/ui/*` alias. Its global styles are imported by the web app from `@workspace/ui/globals.css`.

> **Base UI:** this project uses Base UI, not Radix. Use the `render` prop instead of `asChild` when composing triggers.

## Build

```bash
pnpm build
```

The web build is written to `apps/web/dist`. No deployment target is configured yet.

## Status

- [x] pnpm + Turborepo monorepo
- [x] Shared shadcn/ui package
- [x] Design tokens and dark mode
- [x] Bricolage Grotesque heading font
- [x] ERDE starter page
- [x] Design system documentation
- [x] Install all shadcn/ui components
- [x] Component gallery at `/components`
- [ ] Resolve the known contrast gaps in `DESIGN.md`
- [ ] Add CI for lint, typecheck, and build
- [ ] Add a license

## Contributing

1. Fork the repository.
2. Create a branch: `git checkout -b feat/my-change`.
3. Make your changes.
4. Run the checks:
   ```bash
   pnpm lint
   pnpm typecheck
   pnpm build
   ```
5. Commit using [Conventional Commits](https://www.conventionalcommits.org/).
6. Open a pull request.

## License

A license has not been selected yet. Add a `LICENSE` file before distributing or accepting external contributions.

## Acknowledgements

- [shadcn/ui](https://ui.shadcn.com) for the component system.
- [TanStack](https://tanstack.com) for Start and Router.
- [Base UI](https://base-ui.com) for the primitives.
- [Fontsource](https://fontsource.org) for self-hosted Geist and Bricolage Grotesque.
