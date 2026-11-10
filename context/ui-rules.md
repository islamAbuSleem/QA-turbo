# UI Rules — QA-Turbo

Applies to every page. `/project-init` and `/product-build` must apply these while building a page.

- One component per file, named exports, accessible forms, upload states (idle/uploading/error).
- **Page → components split:** pages compose only; feature markup lives in `frontend/components/<feature>/` (landing reference: `LandingHero`, `PhaseOnePanel`, `AboutSection`, `HowItWorks`, `PipelineSection`, `CtaSection`). Shared UI lives at `components/` root.
- **No duplication:** repeatable blocks are a child card component + typed data array + `v-for` (`AboutSection` → `AboutCard` with `v-for` over `cards`).
- **Types directory:** data shapes live in `components/<feature>/types/*.ts` (`AboutCardData.ts`) and are imported with `import type`; child props mirror the interface inline (Vite cannot resolve `defineProps<ImportedType>` in dev).
- Tailwind utilities in templates; no per-component custom CSS.
- **Shared primitives live at `components/` root with a `Qt` prefix** (`QtDataTable`, `QtPill`, …) and are reused by every feature — do not re-implement a table/pill/badge inside a feature folder. Data tables use `QtDataTable` (column config + `cell-<key>` slots + `row-click` / `row-activate` / `sort-change` events) instead of feature-local table markup.
