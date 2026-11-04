# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Akbar, the owner-designer-developer** — builds, maintains, and uses the design system as the foundation for ERDE work; needs a reliable component reference and a place to verify patterns.
- **Prospective clients and collaborators** — evaluate the studio through the public surface and the component gallery.
- **Other developers** — may adopt the shared components and patterns; success includes the foundation being easy to understand and reuse.

## Product Purpose

ERDE is Akbar's personal studio/portfolio and internal design system. The public site expresses the studio's craft; the `/components` gallery renders every installed component as a live, interactive reference. Success means the system is ready for the next ERDE app, the public surface earns trust, and other developers can adopt the foundation without friction.

## Positioning

A studio and its design system share one source of truth: the same real components and tokens power the public surface and the working gallery. The gallery is the proof, not a separate marketing mock.

## Operating Context

- pnpm + Turborepo monorepo: `apps/web` for the public surface, `packages/ui` for shared components.
- TanStack Start SSR with file-based routes; `/` is the brand entry point and `/components` is the gallery.
- shadcn/ui Nova on Base UI, with Tailwind CSS v4 tokens shared through `@workspace/ui`.
- Local development runs on port 3000; the design system is documented in `docs/DESIGN.md`.
- Light and dark themes persist across visits; motion respects reduced-motion preferences.

## Capabilities and Constraints

- 63 shadcn/ui components installed and rendered in the gallery, grouped into sections.
- Shared `@workspace/ui` package for components, tokens, and utilities.
- No deployment target, CI pipeline, or license selected yet.
- Known contrast gaps remain open in `docs/DESIGN.md`: the light-mode focus ring and `chart-1`.
- Public studio content is not built yet: no case studies, work index, services, pricing, testimonials, or contact page in the repository.
- The README currently calls ERDE a "starter"; the owner confirmed studio/portfolio plus internal design system as the product roles. Public starter/template positioning is undecided.

## Brand Commitments

- Name: **ERDE**.
- Footer tagline: **"Making coolsh\*t that performs"**.
- Home hero mark: `A\`.
- Footer credit: "Built with shadcn/ui".

## Evidence on Hand

- Runnable web app and 63-component gallery.
- `docs/DESIGN.md` design-system documentation.
- README with setup, stack, and project status.
- No real client work, case studies, testimonials, client logos, press, photography, or contact details. Future work must not fabricate these.

## Product Principles

1. **One system, two jobs.** The public studio surface and the internal reference use the same real components and tokens.
2. **Show the work.** The interactive gallery is the proof of craft; do not replace it with screenshots or marketing claims.
3. **Make the foundation adoptable.** Clear docs, a shared package, and a small setup path keep the system usable by other developers.
4. **Never invent proof.** Use only real artifacts and confirmed facts, especially for studio credibility.
5. **Craft is the product.** Quality is judged in states, edge cases, and everyday interactions, not only the hero.
