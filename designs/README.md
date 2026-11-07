# QA-Turbo — Design Concepts for BRD Upload → Analysis

**Mode:** Operate (dashboard tool — scanability > expression).  
**Design system (ui-ux-pro-max, QA-Turbo):** Flat Design · Primary #2563EB · Accent #059669 · Background #F8FAFC · Foreground #0F172A · Font Fira Sans / Fira Code · Dark supported but light default.  
**Note:** No PRODUCT.md yet — impecabble `context` flagged it. This is a scoped design review; we propose `/impeccable init` after you pick a direction.

## Concepts

| File | Idea | Best for |
|---|---|---|
| `concept-a-workbench.html` | Two-pane workbench (files left, analysis right) | Reviewing spec while uploading next BRD |
| `concept-b-stepper.html` | 3-step wizard (Upload → Analyze → Review) | New users, demos, low cognitive load |
| `concept-c-queue.html` | Table queue + detail drawer | Managing many BRDs (`REQ-001` traceability) |
| `concept-d-stitch-stage1.html` | **Stitch-generated** (QA-Turbo Stage 1 BRD dashboard) — sidebar + intake pane + analysis table | The Stitch winner; closest to your prompt. **Recommended to adopt.** |
| `concept-e-onboarding.html` | **Auth — Onboarding** (Create Project + Admin, Step 1/2) | First-run: project + admin email/password, min 8 chars, match validation |
| `concept-f-login.html` | **Auth — Login** | Email/password, Remember me, Forgot, invalid-credentials error, → Stage 1 |
| `concept-g-user-management.html` | **Auth — Users (Admin only)** | Table + Create User dialog + roles sidebar (admin/analyst/tester/viewer chips) |

All three share: same color tokens, same states (empty / uploading / error / done), same `spec.json` contract (`actors`, `requirements REQ-001`, `businessRules BR-001`, `edgeCases EC-001`, `openQuestions`). Pick one or mix.

## What to check
- Contrast 4.5:1, focus visible, 44px touch targets, responsive 375/768/1024.
- No eyebrow labels, no gradient text, no same-size card grid (per craft floor).
- Fira Sans for UI, Fira Code for IDs.

Reply with `A`, `B`, `C`, or a mix — then we convert the winner to Nuxt components.
