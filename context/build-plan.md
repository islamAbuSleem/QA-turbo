# Build Plan — QA-Turbo

Read with `project-build` skill ticket-by-ticket. Do not start features beyond the current ticket.

Structure: **Milestone** (one ticket) = **one folder**. Todo now → fill later; do not pre-build.

- [x] **Milestone 1 — Scaffold**
  - Todo: `Ticket 0` — Scaffold. Done. NestJS + Nuxt skeletons, `GET /health`, contract stub, context files. Verified: `npm run build` green BE, FE builds.
  - Todo: `Ticket 0.5` — UI concepts in `designs/` (A/B/C). Done.
  - Todo: `Ticket 0.6` — Stitch Stage 1 → `designs/concept-d-stitch-stage1.html`. Done. Concept D adopted.
  - Todo: `Ticket 0.7/0.7b/0.8` — Auth: offline E/F/G → Stitch live 3 screens → pro `designs/pro/`. Done. Pending merge/adoption.

- [ ] **Milestone 2 — Auth backend + BRD upload (adopted D, Pro source)**
  - Todo: `Ticket 1A — Layouts`: `layouts/app.vue` + `auth.vue` + `landing.vue`, `pages/index.vue` (landing, split into `components/landing/*`), `login.vue`, `onboarding.vue`, `dashboard.vue` — Done, green on `feat/qa-turbo-landing`.
  - Todo: `Ticket 1 — BRD upload`: `POST /brd/upload` (multipart, validation, storage OPEN) + Nuxt upload + list (using adopted design). Verify: upload MD/TXT (PDF/DOCX OPEN) and list uploads. authService/auth module per progress-tracker ordering — see note.

- [ ] **Milestone 3 — Business analysis**
  - Todo: `Ticket 2 — Business analysis contract`: `GET /brd/:id/analysis` returns placeholder `spec.json` (actors/rules/edge cases). No LLM yet.

- [ ] **Milestone 4 — Decide OPEN stack**
  - Todo: `Ticket 3 — Decide OPEN stack items (together)`: DB, auth, storage, LLM source, target type. Then wire storage/DB/LLM.

- [ ] **Milestone 5 — Remaining agents**
  - Todo: `Ticket 4+ — Remaining agents`: Test Writer → Auditor → Runner → Bug Opener → Verifier + orchestrator (one ticket each).

Out of scope for Phase 1: runners, Playwright, payments, production hosting.

**Dependency rule:** `Ticket 1` waits for concept adoption (`D / A / B / C / mix`) — update `progress-tracker.md` immediately when locked.

**Ticket numbering note:** `progress-tracker.md` numbers the auth backend as Ticket 1 (with BRD upload as Ticket 2); this file orders BRD upload first. Ordering within Milestone 2 is interchangeable — decide at plan review; keep both files consistent when locking.
