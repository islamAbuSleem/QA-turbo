<template>
  <aside class="bg-qt-bg border border-qt-bd rounded-qt p-5 transition hover:shadow-lg" aria-label="Phase 1 example preview">
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
</template>

<script setup lang="ts">
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
</script>
