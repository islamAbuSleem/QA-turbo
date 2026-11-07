# QA-Turbo — Professional Auth (Pro build)

**Direction (frontend-design + impeccable + ui-ux-pro-max):**
- **Subject:** Precision test harness. A bench instrument, not a SaaS site. The world is requirements, actors and audit trails — every pixel serves Operate mode.
- **Color:** Flat, no gradients/shadows. Primary #2563EB, Accent #059669, Background #F8FAFC, Foreground #0F172A, Border #E4ECFC (verified from ui-ux-pro-max). Semantics: emerald = done/active, amber = warning, red = error.
- **Type:** Fira Sans (UI) + Fira Code (IDs like `brd_1E8A`, `REQ-001`). One scale, tabular data, 65–75ch measure.
- **Layout:** Operate precision — 56px header, 240px sidebar, single primary action per view. No eyebrows, no all-caps labels, no same-size card grids.
- **Motion:** One authored moment only — single load reveal. Respects `prefers-reduced-motion`.

**Files (open in any browser):**
- `01-onboarding.html` — Create Project + Admin, Step 1 of 2. Inline validation, password strength, confirm match. No project yet → this first.
- `02-login.html` — Email/password, Remember me, Forgot, invalid-credentials error → Stage 1. Same card system.
- `03-users.html` — Admin-only User Management. Table + Create User dialog + role guide. Roles: admin / analyst / tester / viewer.

**Checklist (all pass):** contrast 4.5:1, visible focus, 44px targets, 375/768/1024 responsive, no emojis as icons, reduced-motion respected.
