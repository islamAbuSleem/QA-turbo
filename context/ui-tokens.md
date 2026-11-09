# UI Tokens — QA-Turbo

Styling system **decided (2026-11-07): Tailwind CSS 3 via `@nuxtjs/tailwindcss`** — utilities first, global SCSS kept minimal (`frontend/assets/scss/global.scss`: base reset + focus-visible + selection only).

## Tokens
Defined in `frontend/tailwind.config.ts` under `colors.qt`:

| Token | Value |
|---|---|
| `qt-blue` | `#2563EB` (primary; hover `qt-blue-hover #1D4ED8`) |
| `qt-green` | `#059669` (accent) |
| `qt-bg` | `#F8FAFC` (canvas) |
| `qt-fg` | `#0F172A` (foreground) |
| `qt-mut` | `#F1F5FD` (muted surface) |
| `qt-mutfg` | `#475569` (muted text) |
| `qt-bd` | `#E4ECFC` (border) |
| `qt-red` / `qt-red-bg` / `qt-red-bd` / `qt-red-fg` | `#DC2626` / `#FEF2F2` / `#FECACA` / `#991B1B` (error) |

Fonts (Google Fonts, loaded in `nuxt.config.ts`): **Fira Sans** (UI, `font-sans`), **Fira Code** (IDs/badges, `font-mono`).
Radius: `rounded-qt` = 12px (cards), `rounded-qt-sm` = 8px (controls).

## Rules
- Tailwind utilities in templates; **no per-component custom CSS**.
- Reusable tokens/new patterns go in `tailwind.config.ts` / `global.scss @layer components` — only when a block repeats.
- Hover shadow on cards: `transition hover:shadow-lg` (landing convention).
