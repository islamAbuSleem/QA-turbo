# Progress Tracker — QA-Turbo

> Update this file every milestone with `done` + `next` + blockers. Never leave it as `scaffold date`.

## Milestones

- [x] **Ticket 0 — Scaffold:** NestJS (BE) + Nuxt (FE), `GET /health`, contract stub, context files — **verified green** (`npm run build` BE + FE). Path `C:\workspace\qa-turbo`.
- [x] **FE ownership:** `app.vue` cleared by owner for own write-up (mentor mode).
- [x] **Ticket 0.5 — UI concepts (designs/):** A (workbench), B (stepper), C (queue) built in `designs/`. Design system: Flat · Primary #2563EB / Accent #059669 / Background #F8FAFC / Fg #0F172A · Fira Sans / Fira Code.
- [x] **Ticket 0.6 — Stitch Stage 1:** Generated in Google Stitch (Web mode, signed in) — Project `QA-Turbo Analysis Dashboard` (`projects/6796892765973811952`). Recreated locally as `designs/concept-d-stitch-stage1.html` (3-col, intake pane 340px, analysis table REQ-001/BR-001, `Send to Test Writer →` CTA, states: empty/uploading/error/done). Stitch UI rendering black in this session — offline copy is the source.
- [x] **Owner decision:** Concept D adopted (Stitch Stage 1) — approved.
- [x] **Ticket 0.7 — Auth designs:** Onboarding (`concept-e-onboarding.html`), Login (`concept-f-login.html`), User Management admin-only (`concept-g-user-management.html`) — same Technical Precision system, roles admin/analyst/tester/viewer. Stitch prompt attempted 2026-11-07 but composer rejected input (black screen session), so pages built offline. **Do not block.**
- [x] **Ticket 0.7b — Stitch Auth:** Generated in Google Stitch same project (`projects/6796892765973811952`) — 3 screens live: `QA-Turbo Login: Sign In`, `QA-Turbo User Management: Admin Administration`, `QA-Turbo Onboarding: Project & Admin Setup` (confirmed via canvas at 39%). Export pending (needs screen selection in UI).
- [x] **Ticket 0.8 — Pro build:** `designs/pro/` (impeccable clean) — `01-onboarding.html` / `02-login.html` / `03-users.html`. Professional polish pass.
- [x] **Owner decision:** Pro as source (Stitch as reference) — layouts scaffolded. DB/Auth/Roles still pending lock.
- [x] **Ticket 1A — Layouts + demo pages:** `frontend/layouts/app.vue` + `auth.vue`, `pages/index.vue` (app), `pages/login.vue` + `pages/onboarding.vue` (auth via `definePageMeta`). Build green. `users.vue` intentionally left for owner to write.
- [x] **Ticket 1A.1 — Login design:** `pages/login.vue` redesigned from `designs/pro/02-login.html` (Fira Sans/Code, #2563EB/#F8FAFC, card 440px, alert role, Remember/Forgot, Sign In →). Styles moved to `frontend/assets/css/login.css` (`<style scoped src>`). `<script setup>` only refs + stub submit. Build green.
- [ ] **Ticket 1 — Auth backend (next):** `POST /auth/register-project` (project+admin), `POST /auth/login`, `GET /auth/me`, `POST /users` (admin-only) + JWT guard. Todo — not started.
- [ ] **Ticket 2 — BRD upload:** `POST /brd/upload` + Nuxt upload + list (Todo only — not started).
- [ ] **Ticket 3 — Business analysis stub:** `GET /brd/:id/analysis` → placeholder `spec.json` (Todo).
- [ ] **Ticket 4 — OPEN decisions:** DB (Postgres?), JWT, storage, LLM, BRD input types, final name, hosting (Todo).
- [ ] **Ticket 5+ — Remaining agents:** Test Writer → Auditor → Runner → Bug Opener → Verifier + orchestrator (Todo).

## Blockers

- None active. Stitch export/insert in-browser blocked by session rendering (see below).

## Incidents

- Stitch Review pane stuck black after generation; export click did not produce downloadable HTML in-session. **Workaround:** rebuilt as `concept-d-stitch-stage1.html` offline. **Do not block:** owner can re-export/account-share from Google if needed.
- 2026-11-07: Stitch auth prompt (E/F/G) — composer at `agent-ia-composer` rejected `execCommand insertText` (empty insert, `is-editor-empty` stayed). **Workaround:** built E/F/G offline. Stitch project still live at `projects/6796892765973811952` if owner wants to paste manually.
- 2026-11-07: Stitch auth generated after fixing insert via `textContent` + `InputEvent` — 3 live screens confirmed. Canvas screenshots intermittently black in this session (rendering flake) — designs are live in Stitch account regardless.

## Next step

1. Owner writes `pages/users.vue` (admin table + create dialog, using app layout) — mentor reviews.
2. Lock: DB (Postgres Docker?), JWT, roles `admin/analyst/tester/viewer`.
3. Mentor scaffolds NestJS `auth` + `users` + `projects` modules. Owner writes login guard + hashing logic.
4. Verify: `cd backend && npm run build`, `cd frontend && npm run build` (green), `GET /health` 200, register → login → create user flow.

Last updated: 2026-11-07 — Layouts app/auth + demo pages green, users.vue pending owner.

## OPEN decisions (owner to decide together)

- DB, auth (JWT?), storage, LLM provider, BRD input types, final project name, hosting.

## Handoff note

Mentor mode: you code the data flow + analysis contract; I review/hint. Branch per ticket (`feat/qa-turbo-*`), small commits, never commit to `main` to scaffold.
