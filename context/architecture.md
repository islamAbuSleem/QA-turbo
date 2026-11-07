# Architecture — QA-Turbo

## Target (6 stations)
```
[BRD file] → [1 BA] → [2 Test Writer] → [3 Auditor] → [4 Runner] → [5 Bug Opener] → [6 Verifier]
              spec.json  test_cases.json   audit       reports      bugs          fixed/reopened
                         Orchestrator (later) coordinates state/retries
```

## Phase 1 architecture (current scaffold only)
```
[Nuxt FE upload] → POST /brd/upload (NestJS) → storage (OPEN) → GET /brd/:id/analysis (placeholder)
```

- **This scaffold:** NestJS monolith with a `health` module only + route stub for `/brd/*` added in the next ticket (not yet).
- **Frontend:** single Nuxt upload page (next ticket). No agent logic in FE.
- **Contracts:** `backend/openapi.json` is the source of truth. FE calls BE via `NUXT_PUBLIC_API_BASE`.
- **Future split:** Each agent becomes its own NestJS service/process behind a queue (OPEN). Do not split until Phase 1 slice works end-to-end.

## Repo layout
```
qa-turbo/
  backend/          # NestJS API (app.module, health, future brd/)
    openapi.json
    Dockerfile
  frontend/         # Nuxt app
    Dockerfile
  context/          # decisions & plans (this folder)
  AGENTS.md
  README.md
```
