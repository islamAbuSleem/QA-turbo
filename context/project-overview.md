# Project Overview — QA-Turbo

> Scaffold step 1 (project-init). Locked items are decided by the owner.
> OPEN items are **not** decided — decide together before coding them.

## Goal (owner answers)
- Build a **challenging, non-traditional** app to learn something new, by doing.
- Chosen direction: multi-system QA testing environment (6 stations: BA → Test Writer → Checker → Runner → Bug Opener → Verifier).
- Difficulty: steep but survivable. Time: 20+ hrs/week. Mode: learn by doing (mentor builds plumbing, owner writes core logic).

## Stack — locked
- **FE:** NuxtJS (Vue + TypeScript)
- **BE:** NestJS (TypeScript)
- **First slice:** Upload BRD (Business Requirements Document) → return business analysis (rules/actors/edge cases as a structured contract). No LLM yet.
- **Name:** `qa-turbo` (QA-Turbo). Alternatives proposed below — owner picks final.
  - QA-Turbo (current)
  - QAForge / QAGrid / SentinelQA — more "assembly line" flavored.

## Stack — OPEN (do not assume; decide together)
| Area | Status | Proposal (not locked) |
|---|---|---|
| DB | OPEN | Postgres vs SQLite vs MySQL — owner to choose |
| Auth | OPEN | Owner to choose (local demo token vs real auth) |
| Payments | N/A | None for Phase 1 |
| BRD storage | OPEN | Local disk vs S3/Minio — owner to choose, depends on upload types |
| BRD input types | OPEN | PDF/DOCX/MD/OpenAPI? Owner to choose |
| Hosting | OPEN | Default boycott-clean: no Vercel in serving path, EU host (e.g. Hetzner + Coolify) where possible |
| LLM provider/model | OPEN — later | NARA / APiNex / Ollama — owner said "think later" |
| Test target | Deferred | Phase 1 has no runner target yet (REST API / Web UI decided later) |

## Contracts
- **API contract location:** `backend/openapi.json` (stub now; BE source of truth)
- **Type generation direction:** BE (NestJS + DTOs / OpenAPI) → FE (Nuxt). Manual for scaffold; add generator when contract stabilizes.
- **Health:** `GET /health` → `200 { "status": "ok", "dbConfigured": false }` (honest when DB not configured).

## Ports + env names
- BE `PORT` (default `3001`): NestJS API
- FE Nuxt `3000`: `NUXT_PUBLIC_API_BASE=http://localhost:3001`
- `DATABASE_URL` reserved (unused until DB decided)
- `UPLOAD_DIR`, `LLM_PROVIDER`, `LLM_API_KEY`, `LLM_MODEL` reserved (unused until decided)
- `.env` lives in `backend/.env` / `frontend/.env` locally; root `.env.example` documents names. Never commit real secrets.
