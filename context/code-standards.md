# Code Standards — QA-Turbo

Applies to NestJS (BE) + Nuxt (FE). `project-build` must respect this file.

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

## Commits & branches
- Branch-per-feature, small commits, research-first (log sources in `library-docs.md`).
