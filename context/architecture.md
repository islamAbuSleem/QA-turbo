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

## Auth + persistence (Ticket 1, 2026-11-15; refactored: ports/adapters + config)
```
[Nuxt FE] --POST /auth/login--> [auth/] --TokenService(port)--> [security/adapters/JwtTokenService]
              |                                        |
              | cookie qt_session (HttpOnly)           | PasswordHasher(port) -> security/adapters/BcryptPasswordHasher
              v                                        v
        [JwtAuthGuard (global)]            [UserRepository/ProjectRepository (ports)] -> persistence/adapters/InMemory* (DB adapter pending lock)
```
- Config: `ConfigModule.forRoot({ isGlobal: true })`; typed helpers in `backend/src/common/config/auth.config.ts` (`JWT_SECRET`, `JWT_TTL_SECONDS`, `SESSION_COOKIE_NAME`; cookie TTL derived from JWT TTL — single source; boot fails in production without a real `JWT_SECRET`).
- Modules: `security/` (@Global: hasher + token service + `JwtModule.registerAsync`), `persistence/` (@Global: both in-memory repositories). Feature modules (`auth/`, `users/`, `projects/`) are NOT global — no circular imports.
- **Ports** (`backend/src/common/ports/*`): `UserRepository`, `ProjectRepository`, `PasswordHasher`, `TokenService` — every provider is injected by token, so Postgres + sessions can replace the in-memory/JWT adapters without touching services.
- Normalization: DTO `@Transform` (trim; emails lowercase) + service-level `normalizeEmail`/`normalizeName` (`common/utils/email.util.ts`); `ValidationPipe({ transform: true })`.
- **Guard by default:** `JwtAuthGuard` and `RolesGuard` are global (`APP_GUARD`); only `/health`, `/auth/login`, `/auth/register-project` are `@Public()`.
- **Roles:** `admin | analyst | tester | viewer` (mirrors the FE `/users` page).
- **Still OPEN (owner to lock):** DB engine, auth transport (cookie+JWT default is the current adapter), BRD storage, LLM provider.

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
