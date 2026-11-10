# QA-Turbo — AGENTS.md

## Mode
- Mode: **Learn by doing (mentor)**. The builder writes every line of the core logic (BRD ingestion, BA, later test agents). The mentor scaffolds plumbing, reviews, gives hints, and unblocks.
- Branch-per-feature. Never scaffold or commit to `main`. Work on `feat/qa-turbo-*` branches.
- Small commits. Each commit = one ticket, one verifiable outcome.

## Verify command
```bash
# backend (NestJS)
cd backend && npm run build && npm run start:healthcheck
# frontend (Nuxt)
cd frontend && npm run build
```
Boot check: Backend `GET /health` returns `200 { "status": "ok" }`. DB (if configured) reports `configured: false` honestly — never fake.

## Rules
- One component / one class per file + named exports (NestJS: one module/controller/service per file; Nuxt: one component per file in `components/`).
- Nuxt page splits (landing rules for `/project-init` + `/product-build`): pages compose only (`components/<feature>/`), repeatable cards via data + `v-for` with a child card, data interfaces in `components/<feature>/types/` imported with `import type` (child props mirror inline). See `context/code-standards.md` → Landing / page component rules.
- SOLID, no `any` (use `unknown` + narrowing / DTOs). Validation on every input (`class-validator` + `ValidationPipe` on NestJS, `zod`/validations on Nuxt forms).
- Auth guard by default on every route except `/health` (when auth is decided — see `context/project-overview.md` OPEN items).
- `helmet` + `cors` on all NestJS APIs.
- Research-first: check official NestJS / Nuxt docs before coding a feature. Log links in `context/library-docs.md`.
- Security: never commit real secrets. Keep `.env` out of git. `.env.example` only.
- Stack locks: NestJS (BE) + Nuxt (FE). Everything else (DB, storage, hosting, LLM) is OPEN — decide together, do not assume.
