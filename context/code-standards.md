# Code Standards — QA-Turbo

Applies to NestJS (BE) + Nuxt (FE). `/project-init` and `/product-build` (alias `project-build`) must read and respect this file while building.

## Universal
- One component / one class per file + named exports. No default-export suites.
  - NestJS: one module, controller, service, DTO per file.
  - Nuxt: one component per file under `components/`, named exports where applicable.
- SOLID. Depend on abstractions (interfaces/ports) in NestJS via injected tokens/providers.
- No `any`. Use `unknown` + type narrowing or proper DTOs. Fix lint errors, do not suppress.
- Validation on every input: NestJS `class-validator` DTOs + global `ValidationPipe`; Nuxt forms validate before submit.
- Auth guard by default on every route except `/health` (active once auth is decided — see OPEN in `project-overview.md`).

## API security
- `helmet` + `cors` enabled on every NestJS API.
- Never log or return secrets, `LLM_API_KEY`, or internal paths.
- File uploads: validate size/type/extension, store outside `public/`, never serve raw uploads directly.

## FE (Nuxt)
- Keep tuning in `context/ui-tokens.md`, rules in `context/ui-rules.md`, registry in `context/ui-registry.md`.
- API calls only via a typed client using `NUXT_PUBLIC_API_BASE`.
- No business logic in components — calls go through composables/services.

### Landing / page component rules (must follow for `/project-init` and `/product-build`)
1. **Page → feature components split.** A page is composition-only (header/slot + section components). Feature markup lives in `frontend/components/<feature>/` (e.g. `landing/`). Shared/reusable UI lives at `frontend/components/` root. Never dump a whole page into `pages/index.vue`.
   - Example landing split (reference implementation): `components/landing/LandingHero.vue`, `PhaseOnePanel.vue`, `AboutSection.vue`, `HowItWorks.vue`, `PipelineSection.vue`, `CtaSection.vue`; `pages/index.vue` only composes them.
2. **No duplication — data + `v-for` + child card.** Repeatable blocks must be a child component driven by a typed data array and `v-for`. No copy-pasted card markup per item.
   - Example: `AboutSection.vue` holds `cards: AboutCardData[]` and renders `<AboutCard v-for="card in cards" ... />`; the card is `components/landing/AboutCard.vue`.
3. **Types directory under the feature.** Shared UI data interfaces live in `frontend/components/<feature>/types/<Name>.ts` and are imported with `import type` by the consumers. Component props mirror the interface inline in the child component — Vite's Vue plugin in dev cannot resolve `defineProps<ImportedType>` (needs FS/`compileScript`); the interface file is the single source for data typing, not for runtime props extraction.
   - Example: `components/landing/types/AboutCardData.ts` (`eyebrow`, `title`, `text?`, `textBefore?`, `chain?`, `textAfter?`), imported into `AboutSection.vue` and mirrored in `AboutCard.vue` props.

## Commits & branches
- Branch-per-feature, small commits, research-first (log sources in `library-docs.md`).
