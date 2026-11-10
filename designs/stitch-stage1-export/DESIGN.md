---
name: Verification Matrix
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3d4a42'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6d7a72'
  outline-variant: '#bccac0'
  surface-tint: '#006c4a'
  primary: '#006948'
  on-primary: '#ffffff'
  primary-container: '#00855d'
  on-primary-container: '#f5fff7'
  inverse-primary: '#68dba9'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#8d4b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#b15f00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#85f8c4'
  primary-fixed-dim: '#68dba9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#005137'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0em
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
  space-2xl: 2rem
---

## Brand & Style

This design system delivers a high-density, engineer-credible testing environment engineered for uncompromising software verification and release management. The visual language merges technical precision with terminal-grade discipline, emphasizing passing verification states, deterministic data structures, and immediate scanability.

The visual ethos rejects cosmetic trends such as soft skeuomorphism, glowing glass, and decorative gradient treatments. Instead, the interface adopts a sharp, architectural Brutalist-Technical paradigm: precise 1px partition lines, hard rectangular geometry, zero corner rounding, and dense monospaced readouts that prioritize structural clarity and fast operational triage.

## Colors

The palette is engineered around high-contrast legibility and deterministic state feedback, anchored by an authoritative verification green.

- **Primary (`#059669`)**: Verification green indicating passing test runs, healthy deployment gates, and baseline operational status.
- **Secondary (`#2563EB`)**: Technical execution blue dedicated to interactive triggers, links, active pipeline selections, and primary command flows.
- **Tertiary (`#D97706`)**: Diagnostic amber for flaky tests, performance bottlenecks, and non-blocking warnings.
- **Critical Alert (`#DC2626`)**: Direct red reserved strictly for runtime failures, test assertion errors, and pipeline blockers.
- **Surfaces & Borders**: Canvas defaults to `#F8FAFC`, paired with pure `#FFFFFF` data surfaces, `#F1F5FD` telemetry panels, and sharp 1px structural framing in `#E4ECFC`.

## Typography

The typographic hierarchy relies on a dual-engine architecture:

1. **Space Grotesk**: Applied to section titles, test suite headers, and core view anchors to provide structured, industrial cadence without losing readability.
2. **JetBrains Mono**: Applied to all telemetry, assertion logs, file paths, test IDs, runtime execution stamps, and data tables. Monospaced tabular alignment guarantees vertical scanning across multi-line assertion diffs and metric streams.

## Layout & Spacing

The layout model is governed by a technical column grid and strict vertical rhythm based on 4px increments (4, 8, 12, 16, 24, 32px):

- **Column System**: 12-column dynamic grid on desktop views (breakpoints at 1280px and 1440px), 8-column layout on tablet viewports (768px to 1024px), and single-column stack on mobile devices.
- **Partition Dividers**: Sections, telemetry docks, and sidebars align flush against 1px perimeter borders (`#E4ECFC`), eliminating superfluous white margins in favor of unified data panels.
- **Density**: Core application panels employ a compact rhythm (`space-sm` to `space-md`) to ensure critical diagnostics remain visible within initial viewport viewports without pagination or unnecessary scroll offset.

## Elevation & Depth

Visual hierarchy is maintained without diffused ambient shadows or multi-stage blur effects. The system utilizes pure planar construction:

- **Primary Structure**: Planar hierarchy is expressed through 1px solid borders (`#E4ECFC`) and background value shifting (e.g., `#F8FAFC` base canvas vs `#FFFFFF` data table rows vs `#F1F5FD` control strips).
- **Floating Contexts**: Modals, quick-filter popovers, and contextual command menus use hard, crisp drop elevation: `0 4px 0 0 #0F172A` or a single hairline outline `1px solid #0F172A` over an opaque `#FFFFFF` substrate.
- **Active Focus**: Interactive selections apply an explicit outline ring of `2px solid #2563EB` with a `2px` offset, ensuring total keyboard navigation visibility across dense tabular arrays.

## Shapes

Every component adheres to a strict `0px` radius mandate. Mechanical square edges define test cards, inputs, badge indicators, buttons, and alert strips. 

This strict right-angle construction emphasizes industrial reliability, facilitates continuous edge-to-edge border stacking, and maximizes horizontal space efficiency for monospaced strings, UUIDs, and assertion breadcrumbs.

## Components

### Buttons & Interactive Controls
- **Primary Execution**: Hard-edged, solid `#2563EB` background with `#FFFFFF` JetBrains Mono text. Hover transitions to `#1D4ED8`. Active state shifts to `#1E40AF`.
- **Status Triggers**: Solid `#059669` background with `#FFFFFF` text for approving test suites or clearing gates.
- **Secondary & Ghost**: `#FFFFFF` background with 1px solid `#E4ECFC` border and `#0F172A` text. Hover shifts background to `#F1F5FD` with `#2563EB` text.
- **Touch Targets**: Minimum 44px hit-box enforcement for mouse and touch interactions, with inner content padding scaling down to preserve high-density visual alignment.

### Data Chips & Status Badges
- **Success/Passing**: `#ECFDF5` background, 1px solid `#A7F3D0` border, `#065F46` monospaced text.
- **Warning/Flaky**: `#FFFBEB` background, 1px solid `#FDE68A` border, `#92400E` monospaced text.
- **Failure/Blocked**: `#FEF2F2` background, 1px solid `#FECACA` border, `#991B1B` monospaced text.
- **Metadata Chip**: `#F1F5FD` background, 1px solid `#E4ECFC` border, `#475569` text (used for execution times, thread IDs, commit hashes).

### Inputs & Filters
- **Text & Search Fields**: `#FFFFFF` fill, 1px solid `#E4ECFC` border, `#0F172A` text, 0px radius. On focus: border shifts to `#2563EB` with an external `2px #2563EB` focus ring with `2px` offset.
- **Checkboxes & Radios**: 16x16px square containers with 1px solid `#E4ECFC` borders. Checked state fills with `#2563EB` containing a crisp white tick or internal square indicator.

### Data Tables & Panels
- **Structure**: Continuous table layout with `#F1F5FD` header bars, 1px solid `#E4ECFC` divider lines, and `#FFFFFF` rows. Hovering a table row changes background to `#F8FAFC`.
- **Log Views**: Terminal-grade `#0F172A` dark container variant with `#A7F3D0` text for pass streams and `#FECACA` for stack traces, maintaining identical 0px edge alignment and dense 16px line heights.