<template>
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
        class="bg-white border border-qt-bd rounded-qt p-4 flex flex-col transition hover:shadow-lg"
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
</template>

<script setup lang="ts">
const stations = [
  { n: '01', phase: 1, title: 'BA Agent', desc: 'Analyzes the BRD and produces a structured, reviewable specification.', output: 'Output: brd_contract.json' },
  { n: '02', phase: 2, title: 'Test Writer', desc: 'Generates test cases mapped to requirements and business rules.', output: 'Output: gherkin_scenarios.feature' },
  { n: '03', phase: 2, title: 'Auditor', desc: 'Checks coverage and flags weak, missing, or unsupported tests.', output: 'Output: compliance_coverage_audit.md' },
  { n: '04', phase: 2, title: 'Runner', desc: 'Executes tests in isolation and captures evidence and reports.', output: 'Output: execution_telemetry.log' },
  { n: '05', phase: 2, title: 'Bug Opener', desc: 'Creates clear, deduplicated bug reports from real failures.', output: 'Output: bug ticket payload' },
  { n: '06', phase: 2, title: 'Verifier', desc: 'Retests fixes and decides FIXED vs REOPENED with regression memory.', output: 'Output: verification_report' },
]
</script>
