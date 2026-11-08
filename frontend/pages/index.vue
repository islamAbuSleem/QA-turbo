<template>
  <div>
    <section class="border-b border-qt-bd bg-white">
      <div class="max-w-[1100px] mx-auto px-5 pt-12 pb-12 md:pt-16 md:pb-16">
        <p class="font-mono text-[11px] text-qt-mutfg bg-qt-bg border border-qt-bd rounded-qt-sm px-3 py-1.5 m-0 mb-4 inline-block">
          BUILD_SPEC: QA-TURBO-L1 // PIPELINE_STATUS: ACTIVE_SLICE // SPEC_REV: 4.18.2
        </p>
        <div class="grid gap-10 md:grid-cols-[1.15fr_.85fr] items-start">
          <div>
            <h1 class="text-4xl md:text-5xl font-semibold leading-[1.08] tracking-tight m-0 mb-4 max-w-[20ch]">
              Turn BRDs into structured, testable quality.
            </h1>
            <p class="text-lg text-qt-mutfg m-0 mb-6 max-w-[62ch] leading-relaxed">
              <b class="text-qt-fg">QA-Turbo</b> is an assembly-line QA platform we’re building from the ground up.
              Each station does one job — from requirement analysis to verified fixes — so quality stays traceable,
              not guesswork.
            </p>
            <div class="flex flex-wrap gap-3 mb-6">
              <NuxtLink
                to="/onboarding"
                class="inline-flex items-center justify-center min-h-[44px] px-5 rounded-qt-sm font-semibold bg-qt-blue text-white no-underline hover:bg-qt-blue-hover hover:no-underline"
              >
                Create project &amp; admin
              </NuxtLink>
              <NuxtLink
                to="/login"
                class="inline-flex items-center justify-center min-h-[44px] px-5 rounded-qt-sm font-semibold bg-white text-qt-fg border border-qt-bd no-underline hover:bg-qt-bg hover:no-underline"
              >
                Sign in
              </NuxtLink>
              <NuxtLink
                to="/dashboard"
                class="inline-flex items-center justify-center min-h-[44px] px-4 rounded-qt-sm font-semibold text-qt-mutfg no-underline hover:text-qt-fg hover:no-underline"
              >
                Open app →
              </NuxtLink>
            </div>
            <dl class="grid grid-cols-2 sm:grid-cols-3 gap-3 m-0">
              <div v-for="item in highlights" :key="item.k" class="bg-qt-bg border border-qt-bd rounded-qt-sm p-3">
                <dt class="text-[11px] uppercase tracking-wide text-qt-mutfg m-0">{{ item.k }}</dt>
                <dd class="text-sm font-semibold text-qt-fg m-0 mt-1">{{ item.v }}</dd>
              </div>
            </dl>
            <p class="text-xs text-qt-mutfg m-0 mt-3">Phase 1 target: deterministic extraction from BRD to reviewed contract.</p>
          </div>

          <aside class="bg-qt-bg border border-qt-bd rounded-qt p-5" aria-label="Phase 1 example preview">
            <div class="flex items-center justify-between gap-2 mb-2">
              <h2 class="text-sm font-semibold m-0">Phase 1 — active slice</h2>
              <span class="font-mono text-[11px] font-semibold text-qt-blue bg-white border border-qt-bd rounded px-2 py-0.5">IN BUILD</span>
            </div>
            <p class="font-mono text-[11px] text-qt-mutfg m-0 mb-3">checkout_requirements_spec.md</p>
            <p class="text-sm text-qt-mutfg m-0 mb-4 leading-relaxed">
              Upload a BRD and produce a structured analysis contract downstream stations can trust.
            </p>
            <dl class="grid grid-cols-4 gap-2 m-0 mb-4 text-center">
              <div v-for="m in metrics" :key="m.k" class="bg-white border border-qt-bd rounded-qt-sm py-2 px-1">
                <dd class="text-lg font-semibold leading-none m-0">{{ m.v }}</dd>
                <dt class="text-[10px] uppercase tracking-wide text-qt-mutfg mt-1">{{ m.k }}</dt>
              </div>
            </dl>
            <ul class="m-0 p-0 list-none grid gap-2 text-sm mb-3">
              <li v-for="c in contract" :key="c" class="flex items-start gap-2 bg-white border border-qt-bd rounded-qt-sm px-3 py-2">
                <span class="text-qt-blue font-mono text-xs mt-0.5" aria-hidden="true">→</span>
                <span class="text-qt-fg">{{ c }}</span>
              </li>
            </ul>
            <p class="text-xs text-qt-mutfg m-0">Example counts shown for preview. Next stations are planned — one ticket at a time.</p>
          </aside>
        </div>
      </div>
    </section>

    <section id="about" class="max-w-[1100px] mx-auto px-5 py-12 md:py-14 scroll-mt-20">
      <div class="grid gap-6 md:grid-cols-[.9fr_1.1fr]">
        <article class="bg-white border border-qt-bd rounded-qt p-6">
          <p class="font-mono text-[11px] font-semibold text-qt-blue m-0 mb-2">WHO WE ARE</p>
          <h2 class="text-2xl font-semibold m-0 mb-3 tracking-tight">QA testing platform, built by doing</h2>
          <p class="text-qt-mutfg m-0 leading-relaxed">
            QA-Turbo is a QA testing platform that turns requirements into verified quality. I’m building and testing
            it myself — every station is a real system I design, code, and verify, so I learn by doing.
          </p>
        </article>
        <article class="bg-white border border-qt-bd rounded-qt p-6">
          <p class="font-mono text-[11px] font-semibold text-qt-blue m-0 mb-2">WHAT WE’RE DOING</p>
          <h2 class="text-2xl font-semibold m-0 mb-3 tracking-tight">Building a traceable 6-station pipeline</h2>
          <p class="text-qt-mutfg m-0 leading-relaxed">
            Requirements become quality artifacts through one chain:
            <span class="font-mono text-[0.92em] text-qt-fg bg-qt-mut border border-qt-bd rounded px-1 py-0.5">BRD → spec → tests → audit → run → bugs → verify</span>.
            Phase 1 starts at the source: structured actors, requirements, rules, edge cases, and open questions — so
            every later step links back to evidence, not black-box guesses.
          </p>
        </article>
      </div>
    </section>

    <section id="how" class="border-y border-qt-bd bg-white scroll-mt-20">
      <div class="max-w-[1100px] mx-auto px-5 py-12 md:py-14">
        <h2 class="text-2xl font-semibold m-0 mb-2 tracking-tight">How it works</h2>
        <p class="text-qt-mutfg m-0 mb-6 max-w-[65ch]">Simple intake now, strict contracts later — built to scale into the full pipeline.</p>
        <ol class="grid gap-3 md:grid-cols-3 m-0 p-0 list-none">
          <li v-for="step in steps" :key="step.n" class="border border-qt-bd rounded-qt p-4 bg-qt-bg">
            <span class="font-mono text-xs font-semibold text-white bg-qt-blue rounded px-1.5 py-0.5">{{ step.n }}</span>
            <h3 class="text-base font-semibold m-0 mt-2 mb-1">{{ step.title }}</h3>
            <p class="text-sm text-qt-mutfg m-0 leading-relaxed">{{ step.desc }}</p>
          </li>
        </ol>
      </div>
    </section>

    <section id="pipeline" class="max-w-[1100px] mx-auto px-5 py-12 md:py-14 scroll-mt-20">
      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6">
        <div>
          <h2 class="text-2xl font-semibold m-0 mb-1 tracking-tight">The pipeline</h2>
          <p class="text-qt-mutfg m-0">Six stations, one traceable chain. Delivered incrementally — honest status per station.</p>
        </div>
        <p class="font-mono text-[11px] text-qt-mutfg m-0">6-STATION TRACEABILITY</p>
      </div>
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="s in stations"
          :key="s.n"
          class="bg-white border border-qt-bd rounded-qt p-4 flex flex-col"
          :class="s.phase === 1 ? 'ring-1 ring-qt-blue/20' : ''"
        >
          <div class="flex items-center justify-between gap-2 mb-2">
            <div class="flex items-center gap-2">
              <span class="font-mono text-xs font-semibold text-qt-blue bg-qt-mut border border-qt-bd rounded px-1.5 py-0.5">{{ s.n }}</span>
              <h3 class="text-sm font-semibold m-0">{{ s.title }}</h3>
            </div>
            <span
              class="font-mono text-[10px] font-semibold rounded px-1.5 py-0.5 border whitespace-nowrap"
              :class="s.phase === 1 ? 'text-qt-blue bg-qt-mut border-qt-bd' : 'text-qt-mutfg bg-white border-qt-bd'"
            >
              {{ s.phase === 1 ? 'PHASE 1 · ACTIVE' : 'PLANNED' }}
            </span>
          </div>
          <p class="text-sm text-qt-mutfg m-0 leading-relaxed">{{ s.desc }}</p>
          <p class="text-xs font-mono text-qt-fg/80 m-0 mt-3 pt-3 border-t border-qt-bd">{{ s.output }}</p>
        </article>
      </div>
    </section>

    <section class="border-t border-qt-bd bg-white">
      <div class="max-w-[1100px] mx-auto px-5 py-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <h2 class="text-2xl font-semibold m-0 mb-2 tracking-tight">Start with Phase 1</h2>
          <p class="text-qt-mutfg m-0 max-w-[60ch]">
            Create a workspace, upload a BRD, and shape the analysis contract. Auth, storage, and downstream agents
            land step by step.
          </p>
        </div>
        <div class="flex flex-wrap gap-3 shrink-0">
          <NuxtLink
            to="/onboarding"
            class="inline-flex items-center justify-center min-h-[44px] px-5 rounded-qt-sm font-semibold bg-qt-blue text-white no-underline hover:bg-qt-blue-hover hover:no-underline"
          >
            Get started
          </NuxtLink>
          <NuxtLink
            to="/login"
            class="inline-flex items-center justify-center min-h-[44px] px-5 rounded-qt-sm font-semibold bg-white text-qt-fg border border-qt-bd no-underline hover:bg-qt-bg hover:no-underline"
          >
            Sign in
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'landing' })

useHead({
  title: 'QA-Turbo — Turn BRDs into structured, testable quality',
  meta: [
    {
      name: 'description',
      content:
        'QA-Turbo is a multi-system QA testing environment: turn BRDs into structured, traceable quality across analysis, tests, audit, execution, bugs, and verification.',
    },
  ],
})

const highlights = [
  { k: 'Phase 1', v: 'BRD → analysis' },
  { k: 'Pipeline', v: '6 stations' },
  { k: 'Principle', v: 'Traceable output' },
]

const metrics = [
  { v: '24', k: 'Reqs' },
  { v: '14', k: 'Rules' },
  { v: '8', k: 'Edge' },
  { v: '3', k: 'Open Q' },
]

const contract = [
  'Actors and stakeholders',
  'Requirements (REQ-*)',
  'Business rules (BR-*)',
  'Edge cases (EC-*)',
  'Open questions',
]

const steps = [
  { n: '01', title: 'Upload raw specification', desc: 'Bring in the BRD as the source of truth for the project.' },
  { n: '02', title: 'Generate & review contract', desc: 'Extract a structured spec — actors, rules, requirements, edge cases, gaps.' },
  { n: '03', title: 'Feed automated pipeline', desc: 'Use the contract to drive tests, audits, execution, bugs, and verification.' },
]

const stations = [
  { n: '01', phase: 1, title: 'BA Agent', desc: 'Analyzes the BRD and produces a structured, reviewable specification.', output: 'Output: brd_contract.json' },
  { n: '02', phase: 2, title: 'Test Writer', desc: 'Generates test cases mapped to requirements and business rules.', output: 'Output: gherkin_scenarios.feature' },
  { n: '03', phase: 2, title: 'Auditor', desc: 'Checks coverage and flags weak, missing, or unsupported tests.', output: 'Output: compliance_coverage_audit.md' },
  { n: '04', phase: 2, title: 'Runner', desc: 'Executes tests in isolation and captures evidence and reports.', output: 'Output: execution_telemetry.log' },
  { n: '05', phase: 2, title: 'Bug Opener', desc: 'Creates clear, deduplicated bug reports from real failures.', output: 'Output: bug ticket payload' },
  { n: '06', phase: 2, title: 'Verifier', desc: 'Retests fixes and decides FIXED vs REOPENED with regression memory.', output: 'Output: verification_report' },
]
</script>
