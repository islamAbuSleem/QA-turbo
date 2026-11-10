# UI Registry — QA-Turbo

Logged components live under `frontend/`. Tie-in rules: `context/ui-rules.md`, tokens: `context/ui-tokens.md`.

## Shared components (root `frontend/components/`, `Qt` prefix)
| Component | Role |
|---|---|
| `components/QtDataTable.vue` | Reusable data table: `columns` + `items` props, slot per cell (`cell-<key>` / `header-<key>`), `v-model:sort-by` / `v-model:sort-desc` / `v-model:selected-keys`, events `row-click` / `row-activate` / `sort-change`, props `row-key`, `active-row-key`, `selectable`, `loading`, `empty-text`, `dense` |
| `components/QtPill.vue` | Status pill (tones: success / info / warning / error / muted / neutral) |
| `components/types/DataTableColumn.ts` | Column interface for `QtDataTable` consumers (mirrored inline in the component) |

## Dashboard (feature: dashboard) — pages/dashboard.vue composes only
Source: `designs/stitch-stage1-export/code.html` (Stitch export, adopted).
| Component | Role |
|---|---|
| `components/dashboard/PipelineStepper.vue` | 6-station strip (ACTIVE/QUEUED/PENDING/STANDBY) + run chip |
| `components/dashboard/IntakePane.vue` | Drop zone + filter tabs + file list (v-for) |
| `components/dashboard/FileCard.vue` | Single intake file row (status pill, progress, error) |
| `components/dashboard/AnalysisPane.vue` | Inspector header, metric grid, actors, analysis table (`QtDataTable` + cell slots) |
| `components/dashboard/MetricCard.vue` | One count card (Requirements/Rules/Edge/Open Questions) |
| `components/dashboard/types/*.ts` | `PipelineStation`, `IntakeFile`, `PipelineMetric`, `AnalysisEntry` |

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
