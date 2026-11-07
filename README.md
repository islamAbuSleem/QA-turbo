# QA-Turbo

Multi-system QA testing environment — learn-by-doing project, NestJS + NuxtJS.

**Vision (6 systems, one assembly line):**
1. BA Agent (BRD → business rules) · 2. Test Writer · 3. Auditor/Checker · 4. Runner + reports · 5. Bug Opener · 6. Verifier/Reopener

**Phase 1 only (this scaffold):** `BRD upload → business analysis (placeholder contract)`.
LLM choice, DB, storage and hosting are **OPEN** — to be decided together. See `context/project-overview.md`.

## Run locally
```bash
# backend
cd backend && npm install && npm run start:dev
# -> GET http://localhost:3001/health  => { "status": "ok" }

# frontend (new terminal)
cd frontend && npm install && npm run dev
# -> http://localhost:3000
```

## Stack (locked so far)
- FE: NuxtJS (Vue) · BE: NestJS (TypeScript)
- API contract: `backend/openapi.json` (stub; source of truth)
- Ports: BE `3001`, FE `3000`
- Env: `PORT`, `NUXT_PUBLIC_API_BASE`, `DATABASE_URL` (when DB decided)

## Verify
```bash
cd backend && npm run build
```
See `AGENTS.md` and `context/` for architecture, standards and build plan.
