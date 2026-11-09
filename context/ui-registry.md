# UI Registry — QA-Turbo

Logged components live under `frontend/`. Tie-in rules: `context/ui-rules.md`, tokens: `context/ui-tokens.md`.

## Landing (feature: landing) — pages/index.vue composes only
| Component | Role |
|---|---|
| `components/landing/LandingHero.vue` | H1 + lede + CTAs + 3 highlights (Phase 1 / 6 stations / traceable) |
| `components/landing/PhaseOnePanel.vue` | "Phase 1 — active slice" side panel; metrics + contract list via `v-for` |
| `components/landing/AboutSection.vue` | Who we are / What we're doing — `cards: AboutCardData[]` + `v-for` → `<LandingAboutCard>` |
| `components/landing/AboutCard.vue` | Single card (eyebrow/title + text or chain highlight); props mirror the interface |
| `components/landing/HowItWorks.vue` | 01/02/03 steps grid |
| `components/landing/PipelineSection.vue` | 6-station grid, PHASE 1 · ACTIVE vs PLANNED badges |
| `components/landing/CtaSection.vue` | Final CTA band |
| `components/landing/types/AboutCardData.ts` | Landing card data interface (`import type` consumers) |

## Layouts
- `layouts/landing.vue` — public page shell (skip-link, sticky header, footer) — used by `/`
- `layouts/auth.vue` — auth shell — used by `/login`, `/onboarding`
- `layouts/app.vue` — dashboard shell — used by `/dashboard`
